import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppV2 from './v2/AppV2';
import './index.css';

// Lightweight path-based routing (SPA fallback serves index.html for any path).
const isV2 = window.location.pathname.replace(/\/+$/, '').endsWith('/v2');

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isV2 ? <AppV2 /> : <App />}</StrictMode>
);
