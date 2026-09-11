export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'demo', label: 'Demo' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'roi', label: 'ROI' },
  { id: 'features', label: 'Features' },
  { id: 'security', label: 'Security' },
];

export const VIDEO_SRC =
  'https://meshmesh.io/videos/BrowserMesh%20Flow%20Audit%20Report.mp4';
