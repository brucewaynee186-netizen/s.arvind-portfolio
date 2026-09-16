import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function Footer({ onOpenContact, onCursorChange }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#111111] bg-dots-dark text-[#F5F1EA] pt-20 pb-12 px-6 md:px-10 overflow-hidden border-t-2 border-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Status & Freelance Availability Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A2A2A] pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#D8FF00] animate-pulse" />
            <span className="font-grotesk text-xs md:text-sm font-bold tracking-widest uppercase text-[#F5F1EA]">
              AVAILABLE FOR FREELANCE // 2026
            </span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => onCursorChange?.('link')}
            onMouseLeave={() => onCursorChange?.('default')}
            className="flex items-center gap-2 font-grotesk text-xs font-bold uppercase tracking-widest text-[#D8D0C5] hover:text-[#FF4D2E] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Large Typography Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[70px] sm:text-[90px] md:text-[120px] text-[#F5F1EA] leading-[0.85] uppercase tracking-tighter m-0">
              LET'S<br />
              <span className="text-[#FF4D2E]">CREATE.</span>
            </h2>
          </div>

          {/* Email Quick Action Card */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-body text-base text-[#D8D0C5] leading-relaxed">
              Open for brand identities, packaging suites, campaign visuals, and bespoke print systems.
            </p>

            <div className="pt-2">
              <button
                id="footer-copy-email-btn"
                onClick={copyEmail}
                onMouseEnter={() => onCursorChange?.('link')}
                onMouseLeave={() => onCursorChange?.('default')}
                className="w-full p-4 bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] hover:border-[#FF4D2E] transition-all flex items-center justify-between text-left group shadow-[4px_4px_0px_#000000]"
              >
                <div>
                  <span className="block font-mono text-[10px] text-[#FF4D2E] font-bold uppercase tracking-widest">
                    DIRECT INBOX
                  </span>
                  <span className="block font-grotesk text-sm md:text-base font-bold text-[#F5F1EA] group-hover:text-[#D8FF00] transition-colors">
                    {DESIGNER_INFO.email}
                  </span>
                </div>
                <div className="p-2 bg-[#111111] border border-[#333333] text-[#D8D0C5] group-hover:text-[#FF4D2E]">
                  {copied ? <Check size={16} className="text-[#D8FF00]" /> : <Copy size={16} />}
                </div>
              </button>
              {copied && (
                <p className="font-mono text-xs text-[#D8FF00] mt-1.5 font-bold animate-in fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            <button
              onClick={onOpenContact}
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="w-full py-4 bg-[#FF4D2E] hover:bg-[#D8FF00] hover:text-[#111111] text-[#F5F1EA] font-grotesk text-xs font-bold uppercase tracking-widest transition-all border border-[#FF4D2E] shadow-[4px_4px_0px_#000000] flex items-center justify-center gap-2"
            >
              <span>SEND INQUIRY FORM</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Social Links & Colophon Bottom Row */}
        <div className="pt-10 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6 font-grotesk text-xs text-[#D8D0C5]/70">
          {/* Socials */}
          <div className="flex flex-wrap items-center gap-6 font-bold uppercase tracking-widest text-[#F5F1EA]">
            <a
              href={DESIGNER_INFO.socials.behance}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1"
            >
              <span>BEHANCE</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href={DESIGNER_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href={DESIGNER_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href={DESIGNER_INFO.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1"
            >
              <span>DRIBBBLE</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Copyright line */}
          <div className="flex items-center gap-4 text-[11px] font-mono text-[#D8D0C5]/50">
            <span>© 2026 {DESIGNER_INFO.name}. ALL RIGHTS RESERVED.</span>
            <span>SET IN SPACE GROTESK & ARCHIVO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
