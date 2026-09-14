export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'demo', label: 'Demo' },
  { id: 'approach', label: 'Approach' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'roi', label: 'ROI' },
  { id: 'features', label: 'Features' },
  { id: 'security', label: 'Security' },
];

// Full walkthrough hosted on YouTube.
export const YOUTUBE_EMBED = 'https://www.youtube.com/embed/pZUww11bRt8?rel=0';
export const YOUTUBE_TITLE =
  'Automating Salesforce with MeshMesh Studio — BrowserMesh Flow Audit Report';
