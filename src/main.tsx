import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Developer easter egg — for the curious ones who open DevTools
console.log(
  '%c// PseudoCoding',
  'color:#86e33d;font-family:monospace;font-size:18px;font-weight:700;line-height:2',
);
console.log(
  '%c' +
  '// ─────────────────────────────────────────────────\n' +
  '// Hey — good instincts opening DevTools.\n' +
  '//\n' +
  '// Stack: React · TypeScript · Vite · Tailwind · Framer Motion\n' +
  '// Host:  Cloudflare Pages\n' +
  '//\n' +
  "// I'm actively looking for a principal / staff role.\n" +
  '// Reach out: devin@pseudocoding.xyz\n' +
  '// Source:    github.com/PseudoCoding\n' +
  '// ─────────────────────────────────────────────────',
  'color:#475569;font-family:monospace;font-size:11px;line-height:1.8',
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
