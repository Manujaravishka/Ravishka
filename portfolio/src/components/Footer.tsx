import { JSX } from 'react';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-zinc-900 text-white px-6 py-12 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright & Minimal Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-black tracking-wider uppercase text-white">
            RAVISHKA<span className="text-zinc-600">.</span>
          </span>
          <p className="text-xs text-zinc-500 font-mono">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>

        {/* Center: Premium Subtle Watermark */}
        <div className="flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-zinc-600 font-bold">
            Handcrafted by <span className="text-zinc-400 font-black">MANUJA Ravishka</span>
          </span>
        </div>

        {/* Right Side: Social Navigation Links (Pure SVGs) */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Manujaravishka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/manuja-ravishka-4206a9232/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="https://web.facebook.com/manuja.ravishka.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="https://medium.com/@manujaravishka2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="Medium"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm6.5 0c1.933 0 3.5-1.567 3.5-3.5S20.433 5 18.5 5 15 6.567 15 8.5s1.567 3.5 3.5 3.5zm3.5-1c.276 0 .5-.224.5-.5V6c0-.276-.224-.5-.5-.5s-.5.224-.5.5v5c0 .276.224.5.5.5z" />
            </svg>
          </a>

          <a
            href="https://stackoverflow.com/users/27146289/manuja-ravishka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="Stack Overflow"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 18v3H3v-3M6 14l11 2M7 10l10 4M9 6l9 3M12 3l8 2" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}