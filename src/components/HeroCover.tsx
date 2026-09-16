import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { DoodleGuy } from './DoodleGuy';

interface HeroCoverProps {
  onExploreClick: () => void;
  onOpenContact: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function HeroCover({ onExploreClick, onOpenContact, onCursorChange }: HeroCoverProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { id: 'logofolio', num: '01', title: 'Logofolio', count: '012' },
    { id: 'branding', num: '02', title: 'Branding', count: '008' },
    { id: 'social', num: '03', title: 'Social', count: '024' },
    { id: 'packaging', num: '04', title: 'Packaging', count: '005' },
    { id: 'print', num: '05', title: 'Print', count: '011' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col pt-20 border-b border-[#111111] bg-[#F5F1EA] bg-dots text-[#111111] overflow-hidden"
    >
      {/* 2-Column Split: Geometric Balance Core Structure */}
      <div className="flex-grow flex flex-col lg:flex-row relative">
        {/* LEFT COLUMN: MAIN HERO */}
        <div className="w-full lg:w-3/5 border-b lg:border-b-0 lg:border-r border-[#111111] p-6 sm:p-10 md:p-12 flex flex-col justify-between relative bg-[#F5F1EA] bg-dots min-h-[580px] sm:min-h-[640px] lg:min-h-[720px]">
          {/* Main Title */}
          <div className="relative pt-4 pb-6 sm:pb-10 z-10">
            <h1 className="font-display text-[85px] sm:text-[120px] md:text-[145px] lg:text-[150px] leading-[0.8] uppercase -ml-2 tracking-tighter text-[#111111] select-none">
              PORT<br />
              FOLIO
            </h1>
          </div>

          {/* Standing Designer Character spanning from "PORT" text level all the way to the bottom moving band */}
          <motion.div
            style={{
              x: -mousePos.x * 0.7,
              y: -mousePos.y * 0.4,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-4 sm:top-6 lg:top-10 right-2 sm:right-6 md:right-8 lg:right-10 bottom-0 z-20 flex flex-col justify-end pointer-events-auto"
          >
            <DoodleGuy
              onOpenContact={onOpenContact}
              onCursorChange={onCursorChange}
            />
          </motion.div>

          {/* Intro description & High-Contrast Availability Tag */}
          <div className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm mt-4 sm:mt-8 space-y-5 z-10">
            <p className="font-body text-sm md:text-base text-[#111111] leading-relaxed font-normal">
              {DESIGNER_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="font-grotesk text-[11px] uppercase border border-[#111111] py-2 px-3.5 inline-block bg-[#D8FF00] text-[#111111] font-bold shadow-[3px_3px_0px_#111111]">
                Available for work • 2026
              </div>

              <button
                onClick={onOpenContact}
                onMouseEnter={() => onCursorChange?.('link')}
                onMouseLeave={() => onCursorChange?.('default')}
                className="font-grotesk text-[11px] uppercase border border-[#111111] py-2 px-3.5 inline-flex items-center gap-1.5 bg-[#111111] text-[#F5F1EA] hover:bg-[#FF4D2E] transition-colors font-bold shadow-[3px_3px_0px_#111111]"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SECTION CATEGORIES INDEX */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between bg-[#F5F1EA] bg-dots">
          <div className="p-6 sm:p-8 md:p-10 border-b border-[#111111] bg-[#111111] text-[#F5F1EA] flex justify-between items-end">
            <div>
              <span className="font-grotesk text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-1">
                Section Index
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F1EA] m-0">
                Categories
              </h2>
            </div>
            <span className="font-mono text-xs text-[#D8FF00] font-bold">05 DISCIPLINES</span>
          </div>

          {/* Category Rows with Italic Font-Display and High-Impact Hover */}
          <div className="flex-grow flex flex-col font-display uppercase italic">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                onMouseEnter={() => onCursorChange?.('view', 'EXPLORE')}
                onMouseLeave={() => onCursorChange?.('default')}
                className={`flex-grow group ${
                  idx < categories.length - 1 ? 'border-b border-[#111111]' : ''
                } p-5 sm:p-6 lg:p-7 flex justify-between items-center hover:bg-[#FF4D2E] hover:text-white transition-colors duration-150 cursor-pointer`}
              >
                <span className="text-3xl sm:text-4xl tracking-tighter group-hover:translate-x-2 transition-transform duration-200">
                  {cat.num} {cat.title}
                </span>
                <span className="font-grotesk not-italic text-xs tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity font-bold">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Rotating Corner Badge: EST. 2026 */}
      <div className="hidden sm:flex absolute bottom-6 right-6 md:bottom-8 md:right-8 w-20 h-20 md:w-24 md:h-24 bg-[#FF4D2E] rounded-full border border-[#111111] items-center justify-center text-center p-2 text-white leading-none font-display uppercase rotate-12 shadow-xl z-20 pointer-events-none select-none">
        <span className="text-xs sm:text-sm tracking-tight">
          EST.<br />2026
        </span>
      </div>
    </section>
  );
}
