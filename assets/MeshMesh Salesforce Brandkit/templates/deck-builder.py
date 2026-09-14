#!/usr/bin/env python3
"""
MeshMesh × Salesforce — branded PowerPoint deck generator.

Builds two 16:9 .pptx files from the shared brand tokens:
  templates/deck-template.pptx  — placeholder copy, ready to fill in
  examples/deck-example.pptx    — the MeshMesh landing narrative, filled in

Regenerate after changing brand tokens:
    python3 -m pip install python-pptx pillow
    python3 templates/deck-builder.py

Layouts: cover-art TITLE + CLOSING slides (dark scrim + white lockup),
a SECTION divider, a bulleted CONTENT slide, a four-up METRIC slide
(white numerals / mono labels), and a QUOTE slide.
"""
import os
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml import parse_xml
from pptx.oxml.ns import qn, nsdecls

# ---- brand tokens (mirror brand-config.json) -------------------------------
INK      = RGBColor(0x0A, 0x0A, 0x0A)
SURFACE  = RGBColor(0x14, 0x14, 0x14)
CORAL    = RGBColor(0xFA, 0x68, 0x63)
MINT     = RGBColor(0x3A, 0xD5, 0x98)
AMBER    = RGBColor(0xD3, 0x8C, 0x49)
FG       = RGBColor(0xFF, 0xFF, 0xFF)
MUTED    = RGBColor(0xA1, 0xA1, 0xA1)
SUBTLE   = RGBColor(0x6B, 0x6B, 0x6B)
BORDER   = RGBColor(0x26, 0x26, 0x26)
SANS = "Geist"        # desktop family name (Google Fonts / installed), not the Typekit "Geist Sans"
MONO = "Geist Mono"

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COVER_BLUE  = os.path.join(ROOT, "assets/covers/MeshMesh Cover 2 Large.png")
COVER_TEAL  = os.path.join(ROOT, "assets/covers/MeshMesh Cover3 Large.png")
COVER_AMBER = os.path.join(ROOT, "assets/covers/MeshMesh Cover Large.png")
LOCKUP_WHT  = os.path.join(ROOT, "assets/logos/meshmesh-salesforce-wordmark-wht.png")

EMU_IN = 914400
SW, SH = 13.333, 7.5  # 16:9 widescreen, inches


# ---- helpers ---------------------------------------------------------------
def _set_alpha(fill_or_shape, pct):
    """Apply transparency (0-100) to a shape's solid fill."""
    srgb = fill_or_shape.fill.fore_color._xFill.find(qn('a:srgbClr'))
    a = srgb.makeelement(qn('a:alpha'), {'val': str(int((100 - pct) * 1000))})
    srgb.append(a)


def add_cover(slide, img):
    """Full-bleed cover image, cropped to fill the 16:9 frame."""
    pic = slide.shapes.add_picture(img, 0, 0, width=Inches(SW))
    # cover art is 3:2; center vertically and let top/bottom crop
    pic.top = Emu(int((SH * EMU_IN - pic.height) / 2))
    return pic


def add_scrim(slide, left, width, opacity, color=INK):
    """opacity = scrim strength in % (70 = a strong 70%-opaque darken)."""
    r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), 0,
                               Inches(width), Inches(SH))
    r.line.fill.background()
    r.fill.solid()
    r.fill.fore_color.rgb = color
    _set_alpha(r, 100 - opacity)   # _set_alpha takes transparency
    r.shadow.inherit = False
    return r


def _hex(color):
    return "%02X%02X%02X" % (color[0], color[1], color[2])


def add_gradient_scrim(slide, stops, angle_deg=0, color=INK):
    """Full-bleed rectangle with a linear alpha gradient (no hard edges).
    stops: list of (position_pct, opacity_pct) from 0..100 → e.g. [(0,94),(45,78),(72,30),(100,0)].
    angle_deg: 0 = left→right, 90 = top→bottom."""
    r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(SW), Inches(SH))
    r.line.fill.background()
    r.shadow.inherit = False
    gs = "".join(
        f'<a:gs pos="{int(p*1000)}"><a:srgbClr val="{_hex(color)}">'
        f'<a:alpha val="{int(o*1000)}"/></a:srgbClr></a:gs>'
        for p, o in stops
    )
    grad = parse_xml(
        f'<a:gradFill {nsdecls("a")} rotWithShape="1">'
        f'<a:gsLst>{gs}</a:gsLst>'
        f'<a:lin ang="{int(angle_deg*60000)}" scaled="1"/></a:gradFill>'
    )
    spPr = r._element.spPr
    for tag in ('a:noFill','a:solidFill','a:gradFill','a:blipFill','a:pattFill','a:grpFill'):
        el = spPr.find(qn(tag))
        if el is not None:
            spPr.remove(el)
    ln = spPr.find(qn('a:ln'))
    spPr.insert(list(spPr).index(ln), grad) if ln is not None else spPr.append(grad)
    return r


def bg_ink(slide):
    r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(SW), Inches(SH))
    r.line.fill.background()
    r.fill.solid()
    r.fill.fore_color.rgb = INK
    r.shadow.inherit = False
    return r


def text(slide, x, y, w, h, runs, align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP,
         space_after=None, line=None):
    """runs: list of paragraphs; each paragraph is a list of (s, font, size, color, bold, tracking)."""
    tb = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    for i, para in enumerate(runs):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = align
        if space_after is not None:
            p.space_after = Pt(space_after)
        if line is not None:
            p.line_spacing = line
        for (s, font, size, color, bold, track) in para:
            r = p.add_run()
            r.text = s
            r.font.name = font
            r.font.size = Pt(size)
            r.font.color.rgb = color
            r.font.bold = bold
            if track:
                rPr = r._r.get_or_add_rPr()
                rPr.set('spc', str(int(track * 100)))
    return tb


def coral_rule(slide, x, y, w=0.55):
    r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(y),
                               Inches(w), Pt(2.4))
    r.line.fill.background()
    r.fill.solid()
    r.fill.fore_color.rgb = CORAL
    r.shadow.inherit = False


def add_lockup(slide, x, y, w=2.35):
    h = w * (460 / 1604)
    slide.shapes.add_picture(LOCKUP_WHT, Inches(x), Inches(y),
                             width=Inches(w), height=Inches(h))


# ---- slide builders --------------------------------------------------------
def slide_blank(prs):
    return prs.slides.add_slide(prs.slide_layouts[6])


def title_slide(prs, cover, eyebrow, title, subtitle):
    s = slide_blank(prs)
    add_cover(s, cover)
    # single uniform scrim — even darken, no hard vertical seam over the art
    add_scrim(s, 0, SW, 70)
    add_lockup(s, 0.92, 0.85)
    text(s, 0.92, 3.0, 7.6, 0.5,
         [[(eyebrow, MONO, 12, CORAL, False, 2.2)]])
    coral_rule(s, 0.92, 2.78)
    text(s, 0.9, 3.45, 8.0, 2.4,
         [[(title, SANS, 44, FG, False, -0.5)]], line=1.02)
    text(s, 0.92, 5.75, 7.4, 1.0,
         [[(subtitle, SANS, 17, MUTED, False, 0)]], line=1.3)
    return s


def section_slide(prs, index, eyebrow, title):
    s = slide_blank(prs); bg_ink(s)
    text(s, 0.92, 2.55, 3, 0.6, [[(index, MONO, 13, CORAL, False, 2.0)]])
    coral_rule(s, 0.92, 2.42)
    text(s, 0.92, 2.95, 2.4, 0.5, [[(eyebrow, MONO, 12, SUBTLE, False, 2.2)]])
    text(s, 0.9, 3.35, 11.0, 2.0, [[(title, SANS, 40, FG, False, -0.5)]], line=1.05)
    return s


def content_slide(prs, eyebrow, title, items):
    """items: list of (index, head, body)."""
    s = slide_blank(prs); bg_ink(s)
    text(s, 0.92, 0.85, 6, 0.4, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]])
    coral_rule(s, 0.92, 0.72)
    text(s, 0.9, 1.25, 11.4, 1.0, [[(title, SANS, 30, FG, False, -0.4)]])
    y = 2.75
    for idx, head, body in items:
        text(s, 0.92, y, 1.0, 0.5, [[(idx, MONO, 13, CORAL, False, 1.5)]])
        text(s, 2.0, y - 0.04, 10.2, 0.5, [[(head, SANS, 18, FG, True, 0)]])
        text(s, 2.0, y + 0.42, 10.2, 0.7, [[(body, SANS, 14, MUTED, False, 0)]], line=1.25)
        y += 1.35
    return s


def metric_slide(prs, eyebrow, title, figs):
    """figs: list of (big, unit, label, sub) — up to 4."""
    s = slide_blank(prs); bg_ink(s)
    text(s, 0.92, 0.85, 8, 0.4, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]])
    coral_rule(s, 0.92, 0.72)
    text(s, 0.9, 1.25, 11.4, 1.0, [[(title, SANS, 30, FG, False, -0.4)]])
    n = len(figs)
    gap, marg = 0.35, 0.92
    cw = (SW - 2 * marg - (n - 1) * gap) / n
    x = marg
    for big, unit, label, sub in figs:
        card = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x),
                                  Inches(3.0), Inches(cw), Inches(2.6))
        card.fill.solid(); card.fill.fore_color.rgb = SURFACE
        card.line.color.rgb = BORDER; card.line.width = Pt(1)
        card.shadow.inherit = False
        card.adjustments[0] = 0.06
        big_runs = [[(big, SANS, 40, FG, False, -0.6)]]
        if unit:
            big_runs[0].append((" " + unit, SANS, 18, MUTED, False, 0))
        text(s, x + 0.3, 3.35, cw - 0.6, 0.9, big_runs)
        text(s, x + 0.32, 4.5, cw - 0.6, 0.4, [[(label, MONO, 10.5, SUBTLE, False, 1.6)]])
        text(s, x + 0.32, 4.95, cw - 0.6, 0.6, [[(sub, SANS, 12.5, MUTED, False, 0)]], line=1.2)
        x += cw + gap
    return s


def quote_slide(prs, eyebrow, quote, attribution):
    s = slide_blank(prs); bg_ink(s)
    text(s, 0.92, 1.4, 6, 0.4, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]])
    coral_rule(s, 0.92, 1.27)
    # coral left rule for the quote
    r = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.92), Inches(2.4),
                           Pt(3), Inches(2.6))
    r.line.fill.background(); r.fill.solid(); r.fill.fore_color.rgb = CORAL
    r.shadow.inherit = False
    text(s, 1.35, 2.35, 10.6, 3.0, [[(quote, SANS, 27, FG, False, -0.3)]], line=1.22)
    text(s, 1.37, 5.35, 10.0, 0.5, [[(attribution, MONO, 12, MUTED, False, 1.2)]])
    return s


def closing_slide(prs, cover, eyebrow, title, cta):
    s = slide_blank(prs)
    add_cover(s, cover)
    add_scrim(s, 0, SW, 52)
    add_lockup(s, 0.92, 0.85, w=2.1)
    text(s, 0, 2.9, SW, 0.5, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]], align=PP_ALIGN.CENTER)
    text(s, 1.0, 3.35, SW - 2.0, 1.6, [[(title, SANS, 38, FG, False, -0.5)]],
         align=PP_ALIGN.CENTER, line=1.05)
    # coral CTA pill
    bw, bh = 3.9, 0.72
    btn = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches((SW - bw) / 2),
                             Inches(5.25), Inches(bw), Inches(bh))
    btn.fill.solid(); btn.fill.fore_color.rgb = CORAL
    btn.line.fill.background(); btn.shadow.inherit = False
    btn.adjustments[0] = 0.5
    tf = btn.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    run = p.add_run(); run.text = cta
    run.font.name = SANS; run.font.size = Pt(15); run.font.bold = True
    run.font.color.rgb = INK
    return s


def _eyebrow(s, eyebrow, title, ty=1.25, tsize=30):
    text(s, 0.92, 0.85, 10, 0.4, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]])
    coral_rule(s, 0.92, 0.72)
    text(s, 0.9, ty, 11.6, 1.0, [[(title, SANS, tsize, FG, False, -0.4)]])


def agenda_slide(prs, eyebrow, title, items):
    """items: list of (num, label) — laid out in two columns."""
    s = slide_blank(prs); bg_ink(s)
    _eyebrow(s, eyebrow, title)
    half = (len(items) + 1) // 2
    cols = [items[:half], items[half:]]
    for ci, col in enumerate(cols):
        x = 0.92 + ci * 6.05
        y = 2.75
        for num, label in col:
            text(s, x, y, 0.9, 0.5, [[(num, MONO, 13, CORAL, False, 1.5)]])
            text(s, x + 0.95, y - 0.02, 4.9, 0.6, [[(label, SANS, 18, FG, False, 0)]])
            r = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(y + 0.62),
                                   Inches(5.5), Pt(1))
            r.line.fill.background(); r.fill.solid(); r.fill.fore_color.rgb = BORDER
            r.shadow.inherit = False
            y += 1.0
    return s


def two_column_slide(prs, eyebrow, title, left, right):
    """left/right: (head, body)."""
    s = slide_blank(prs); bg_ink(s)
    _eyebrow(s, eyebrow, title)
    for i, (head, body) in enumerate((left, right)):
        x = 0.92 + i * 6.05
        text(s, x, 2.8, 5.5, 0.5, [[(head, SANS, 19, FG, True, 0)]])
        r = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(3.35),
                               Inches(0.5), Pt(2.2))
        r.line.fill.background(); r.fill.solid(); r.fill.fore_color.rgb = CORAL
        r.shadow.inherit = False
        text(s, x, 3.6, 5.5, 3.0, [[(body, SANS, 15, MUTED, False, 0)]], line=1.4)
    return s


def steps_slide(prs, eyebrow, title, steps):
    """steps: list of (num, head, body) — up to 4 across."""
    s = slide_blank(prs); bg_ink(s)
    _eyebrow(s, eyebrow, title)
    n = len(steps); gap, marg = 0.4, 0.92
    cw = (SW - 2 * marg - (n - 1) * gap) / n
    x = marg
    for i, (num, head, body) in enumerate(steps):
        text(s, x, 3.0, cw, 0.5, [[(num, MONO, 13, CORAL, False, 1.5)]])
        r = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(3.5),
                               Inches(cw), Pt(1))
        r.line.fill.background(); r.fill.solid(); r.fill.fore_color.rgb = BORDER
        r.shadow.inherit = False
        text(s, x, 3.72, cw, 0.6, [[(head, SANS, 18, FG, True, 0)]])
        text(s, x, 4.35, cw, 1.6, [[(body, SANS, 13.5, MUTED, False, 0)]], line=1.3)
        x += cw + gap
    return s


def comparison_slide(prs, eyebrow, title, left, right):
    """left/right: (panel_title, [lines], accent) — e.g. a Without / With split."""
    s = slide_blank(prs); bg_ink(s)
    _eyebrow(s, eyebrow, title)
    pw, gap, marg, top, ph = None, 0.5, 0.92, 2.9, 3.9
    pw = (SW - 2 * marg - gap) / 2
    for i, (ptitle, lines, accent) in enumerate((left, right)):
        x = marg + i * (pw + gap)
        card = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(top),
                                  Inches(pw), Inches(ph))
        card.fill.solid(); card.fill.fore_color.rgb = SURFACE
        card.line.color.rgb = BORDER; card.line.width = Pt(1)
        card.shadow.inherit = False; card.adjustments[0] = 0.045
        text(s, x + 0.4, top + 0.35, pw - 0.8, 0.5, [[(ptitle, MONO, 12, accent, False, 1.8)]])
        paras = [[(("—  " + ln), SANS, 15, FG if accent == MINT else MUTED, False, 0)] for ln in lines]
        text(s, x + 0.4, top + 1.0, pw - 0.8, ph - 1.4, paras, space_after=10, line=1.25)
        x += pw + gap
    return s


def statement_slide(prs, eyebrow, statement):
    """Large centered impact statement with a coral period."""
    s = slide_blank(prs); bg_ink(s)
    text(s, 0, 1.6, SW, 0.5, [[(eyebrow, MONO, 12, CORAL, False, 2.2)]], align=PP_ALIGN.CENTER)
    text(s, 1.4, 2.55, SW - 2.8, 3.4,
         [[(statement, SANS, 34, FG, False, -0.4), ("", SANS, 34, CORAL, False, 0)]],
         align=PP_ALIGN.CENTER, line=1.2)
    return s


# ---- font embedding (self-contained decks) ---------------------------------
FONTS = os.path.join(ROOT, "assets/fonts")
FONT_FACES = {  # typeface -> {style: ttf path}
    "Geist":      {"regular": os.path.join(FONTS, "Geist-Regular.ttf"),
                   "bold":    os.path.join(FONTS, "Geist-Bold.ttf")},
    "Geist Mono": {"regular": os.path.join(FONTS, "GeistMono-Regular.ttf")},
}
_P = "http://schemas.openxmlformats.org/presentationml/2006/main"
_R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
_CT = "http://schemas.openxmlformats.org/package/2006/content-types"
_REL = "http://schemas.openxmlformats.org/package/2006/relationships"
_FONT_REL = _R + "/font"


def embed_fonts(pptx_path, faces=FONT_FACES):
    """Post-process a .pptx to embed TrueType fonts so the deck renders in
    Geist even on machines without it installed."""
    import zipfile, shutil
    from lxml import etree
    if not all(os.path.exists(p) for f in faces.values() for p in f.values()):
        print("  (font files missing — skipping embed)"); return
    zin = zipfile.ZipFile(pptx_path, "r")
    parts = {n: zin.read(n) for n in zin.namelist()}
    zin.close()

    # 1) content-type default for .fntdata
    ct = etree.fromstring(parts["[Content_Types].xml"])
    if not any(d.get("Extension") == "fntdata" for d in ct.findall(f"{{{_CT}}}Default")):
        d = etree.SubElement(ct, f"{{{_CT}}}Default")
        d.set("Extension", "fntdata"); d.set("ContentType", "application/x-fontdata")
    parts["[Content_Types].xml"] = etree.tostring(ct, xml_declaration=True, encoding="UTF-8", standalone=True)

    # 2) add font parts + presentation rels
    rels = etree.fromstring(parts["ppt/_rels/presentation.xml.rels"])
    used = [int(r.get("Id")[3:]) for r in rels if r.get("Id", "").startswith("rId") and r.get("Id")[3:].isdigit()]
    rid = max(used) + 1 if used else 1
    fontnum = 1
    embed_xml = etree.Element(f"{{{_P}}}embeddedFontLst")
    for typeface, styles in faces.items():
        ef = etree.SubElement(embed_xml, f"{{{_P}}}embeddedFont")
        fe = etree.SubElement(ef, f"{{{_P}}}font"); fe.set("typeface", typeface)
        for style, path in styles.items():
            part_name = f"ppt/fonts/font{fontnum}.fntdata"
            parts[part_name] = open(path, "rb").read()
            rel = etree.SubElement(rels, f"{{{_REL}}}Relationship")
            rid_str = f"rId{rid}"
            rel.set("Id", rid_str); rel.set("Type", _FONT_REL)
            rel.set("Target", f"fonts/font{fontnum}.fntdata")
            se = etree.SubElement(ef, f"{{{_P}}}{style}"); se.set(f"{{{_R}}}id", rid_str)
            rid += 1; fontnum += 1
    parts["ppt/_rels/presentation.xml.rels"] = etree.tostring(rels, xml_declaration=True, encoding="UTF-8", standalone=True)

    # 3) presentation.xml: embedTrueTypeFonts + embeddedFontLst (after notesSz)
    pres = etree.fromstring(parts["ppt/presentation.xml"])
    pres.set("embedTrueTypeFonts", "1")
    anchor = pres.find(f"{{{_P}}}notesSz")
    idx = list(pres).index(anchor) + 1 if anchor is not None else len(list(pres))
    pres.insert(idx, embed_xml)
    parts["ppt/presentation.xml"] = etree.tostring(pres, xml_declaration=True, encoding="UTF-8", standalone=True)

    tmp = pptx_path + ".tmp"
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
        for name, data in parts.items():
            zout.writestr(name, data)
    shutil.move(tmp, pptx_path)
    print(f"  embedded {fontnum - 1} font faces")


# ---- deck assembly ---------------------------------------------------------
def build(path, c):
    prs = Presentation()
    prs.slide_width = Inches(SW)
    prs.slide_height = Inches(SH)
    title_slide(prs, c["title_cover"], c["title_eyebrow"], c["title"], c["subtitle"])
    agenda_slide(prs, c["agenda_eyebrow"], c["agenda_title"], c["agenda_items"])
    section_slide(prs, c["sec_index"], c["sec_eyebrow"], c["sec_title"])
    content_slide(prs, c["content_eyebrow"], c["content_title"], c["content_items"])
    two_column_slide(prs, c["twocol_eyebrow"], c["twocol_title"], c["twocol_left"], c["twocol_right"])
    steps_slide(prs, c["steps_eyebrow"], c["steps_title"], c["steps"])
    metric_slide(prs, c["metric_eyebrow"], c["metric_title"], c["metrics"])
    comparison_slide(prs, c["cmp_eyebrow"], c["cmp_title"], c["cmp_left"], c["cmp_right"])
    quote_slide(prs, c["quote_eyebrow"], c["quote"], c["quote_attr"])
    statement_slide(prs, c["stmt_eyebrow"], c["stmt"])
    closing_slide(prs, c["close_cover"], c["close_eyebrow"], c["close_title"], c["close_cta"])
    prs.save(path)
    n = len(prs.slides._sldIdLst)
    embed_fonts(path)
    print("wrote", path, "-", n, "slides")


TEMPLATE = {
    "title_cover": COVER_BLUE,
    "title_eyebrow": "EYEBROW — CATEGORY · CONTEXT",
    "title": "{{ Presentation title goes here }}",
    "subtitle": "{{ One-line subtitle or supporting statement. Keep it to a sentence. }}",
    "agenda_eyebrow": "AGENDA",
    "agenda_title": "{{ What we'll cover }}",
    "agenda_items": [
        ("01", "{{ Agenda item one }}"), ("02", "{{ Agenda item two }}"),
        ("03", "{{ Agenda item three }}"), ("04", "{{ Agenda item four }}"),
        ("05", "{{ Agenda item five }}"), ("06", "{{ Agenda item six }}"),
    ],
    "sec_index": "(01)",
    "sec_eyebrow": "SECTION",
    "sec_title": "{{ Section divider title }}",
    "content_eyebrow": "EYEBROW",
    "content_title": "{{ Content slide title }}",
    "content_items": [
        ("01", "{{ Point one }}", "{{ Supporting detail for the first point. }}"),
        ("02", "{{ Point two }}", "{{ Supporting detail for the second point. }}"),
        ("03", "{{ Point three }}", "{{ Supporting detail for the third point. }}"),
    ],
    "twocol_eyebrow": "EYEBROW",
    "twocol_title": "{{ Two-column slide title }}",
    "twocol_left": ("{{ Left heading }}", "{{ Left column body copy. Use this side for context, the problem, or the 'before'. }}"),
    "twocol_right": ("{{ Right heading }}", "{{ Right column body copy. Use this side for the answer, the approach, or the 'after'. }}"),
    "steps_eyebrow": "PROCESS",
    "steps_title": "{{ How it works, in steps }}",
    "steps": [
        ("01", "{{ Step one }}", "{{ What happens in the first step. }}"),
        ("02", "{{ Step two }}", "{{ What happens in the second step. }}"),
        ("03", "{{ Step three }}", "{{ What happens in the third step. }}"),
    ],
    "metric_eyebrow": "(FIGURES)",
    "metric_title": "{{ Metrics slide title }}",
    "metrics": [
        ("00%", "", "LABEL ONE", "{{ context }}"),
        ("00", "unit", "LABEL TWO", "{{ context }}"),
        ("00", "", "LABEL THREE", "{{ context }}"),
        ("00%", "", "LABEL FOUR", "{{ context }}"),
    ],
    "cmp_eyebrow": "COMPARISON",
    "cmp_title": "{{ Before vs. after }}",
    "cmp_left": ("WITHOUT", ["{{ Pain point one }}", "{{ Pain point two }}", "{{ Pain point three }}"], MUTED),
    "cmp_right": ("WITH", ["{{ Improvement one }}", "{{ Improvement two }}", "{{ Improvement three }}"], MINT),
    "quote_eyebrow": "TESTIMONIAL",
    "quote": "“{{ A short, punchy customer or stakeholder quote goes here. }}”",
    "quote_attr": "— NAME, TITLE, COMPANY",
    "stmt_eyebrow": "IN ONE LINE",
    "stmt": "{{ A single, bold statement that anchors the whole deck. }}",
    "close_cover": COVER_TEAL,
    "close_eyebrow": "CALL TO ACTION",
    "close_title": "{{ Closing headline }}",
    "close_cta": "{{ CTA label → }}",
}

EXAMPLE = {
    "title_cover": COVER_BLUE,
    "title_eyebrow": "THE AGENTIC TEAMMATE · SALESFORCE · AND BEYOND",
    "title": "Make the complex Salesforce simple.",
    "subtitle": "MeshMesh is Salesforce’s AI-native, agent-driven teammate that operates your entire tech stack — Salesforce and beyond.",
    "agenda_eyebrow": "AGENDA",
    "agenda_title": "What we'll cover",
    "agenda_items": [
        ("01", "The agentic teammate"), ("02", "How it works"),
        ("03", "One teammate, whole stack"), ("04", "Enterprise ROI"),
        ("05", "Two very different Mondays"), ("06", "Getting started"),
    ],
    "sec_index": "(01)",
    "sec_eyebrow": "APPROACH",
    "sec_title": "Diagnose. Fix. Innovate.",
    "content_eyebrow": "HOW IT WORKS",
    "content_title": "One teammate across the whole stack.",
    "content_items": [
        ("01", "Diagnose", "Rapidly find the root cause across Salesforce and the tools around it — by asking, not configuring."),
        ("02", "Fix", "Apply the change, ship the flow, resolve the backlog — production-grade work, not suggestions."),
        ("03", "Innovate", "Move from firefighting to shipping innovation, saving 120+ hours a month."),
    ],
    "twocol_eyebrow": "CONVERSATION, NOT CONFIGURATION",
    "twocol_title": "Ask for what you need.",
    "twocol_left": ("The old way", "Ticket queues, admin backlogs, and brittle point-and-click config. Weeks of clicks to ship a single change across clouds."),
    "twocol_right": ("With MeshMesh", "Describe the outcome in plain language. MeshMesh plans and builds production-grade work across Salesforce and beyond."),
    "steps_eyebrow": "PROCESS",
    "steps_title": "From ask to shipped.",
    "steps": [
        ("01", "Ask", "State the outcome you want in plain language — no config screens."),
        ("02", "Plan", "MeshMesh diagnoses across the stack and proposes a concrete plan."),
        ("03", "Build", "It executes production-grade changes and flows across your clouds."),
        ("04", "Ship", "Review and ship — hours of work done before standup."),
    ],
    "metric_eyebrow": "(FIGURES)",
    "metric_title": "Enterprise ROI, measured.",
    "metrics": [
        ("+940%", "", "ROI MULTIPLIER", "9.4 hrs value per hour used"),
        ("55%", "", "GAME-CHANGERS", "Save 1+ business day / week"),
        ("80", "hrs", "UNLOCKED / MONTH", "Per employee"),
        ("80–95%", "", "SATISFACTION LIFT", "In work satisfaction"),
    ],
    "cmp_eyebrow": "TWO VERY DIFFERENT MONDAYS",
    "cmp_title": "Same backlog. Different Monday.",
    "cmp_left": ("WITHOUT MESHMESH", ["Sprint spent on config and tickets", "Backlog grows faster than it clears", "Innovation waits for capacity"], MUTED),
    "cmp_right": ("WITH MESHMESH", ["The work is done before standup", "Backlog clears as fast as you ask", "120+ hours a month back for building"], MINT),
    "quote_eyebrow": "TESTIMONIAL",
    "quote": "“The work that used to eat a whole sprint now gets done before standup. We just ask MeshMesh.”",
    "quote_attr": "— SALESFORCE ENTERPRISE PILOT",
    "stmt_eyebrow": "IN ONE LINE",
    "stmt": "Make the complex Salesforce simple — just ask.",
    "close_cover": COVER_TEAL,
    "close_eyebrow": "READY WHEN YOU ARE",
    "close_title": "Ready to make the complex simple?",
    "close_cta": "Nominate a customer hero →",
}

if __name__ == "__main__":
    build(os.path.join(ROOT, "templates/deck-template.pptx"), TEMPLATE)
    build(os.path.join(ROOT, "examples/deck-example.pptx"), EXAMPLE)
