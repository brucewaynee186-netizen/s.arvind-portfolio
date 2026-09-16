import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LOGOFOLIO_PROJECTS, SECTIONS_METADATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface LogofolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function LogofolioSection({ onSelectProject, onCursorChange }: LogofolioSectionProps) {
  const meta = SECTIONS_METADATA.logofolio;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="logofolio"
      className="relative py-20 md:py-28 px-6 md:px-10 bg-[#F5F1EA] bg-dots border-b border-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#111111] pb-8 mb-14">
          <div className="lg:col-span-7">
            <span className="font-mono text-sm md:text-base font-bold text-[#FF4D2E] block mb-2">
              [{meta.number} // 05]
            </span>
            <h2 className="font-display text-[70px] sm:text-[90px] md:text-[110px] text-[#111111] leading-[0.85] uppercase tracking-tighter m-0">
              LOGO<br />
              <span className="text-[#111111]">FOLIO</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] font-bold bg-[#111111] text-[#D8FF00] px-2.5 py-1 uppercase tracking-widest border border-[#111111] shadow-[2px_2px_0px_#FF4D2E]">
                ✦ CREATIVE EXPLORATION & IDENTITY CRAFT
              </span>
            </div>
            <p className="font-grotesk text-xs sm:text-sm uppercase tracking-wider font-bold text-[#FF4D2E]">
              DISTILLING COMPLEX BRAND ESSENCE INTO TIMELESS VECTOR SIGNATURES
            </p>
            <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed font-medium border-l-2 border-[#111111] pl-4">
              “{meta.description}”
            </p>
            <div className="flex items-center gap-3 font-grotesk text-xs uppercase tracking-widest text-[#111111]/70 pt-1">
              <span>EXPLORE MONOGRAMS & EMBLEMS</span>
              <span className="w-12 h-[1px] bg-[#111111]" />
              <span className="font-mono text-[#FF4D2E] font-bold bg-[#D8FF00] px-2 py-0.5 border border-[#111111]">
                {LOGOFOLIO_PROJECTS.length} MARKS
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid with Geometric Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {LOGOFOLIO_PROJECTS.map((item, index) => {
            const colSpan =
              item.size === 'large'
                ? 'md:col-span-7'
                : item.size === 'medium'
                ? 'md:col-span-5'
                : 'md:col-span-4';

            return (
              <div
                key={item.id}
                id={`card-${item.id}`}
                onClick={() => onSelectProject(item)}
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  onCursorChange?.('view', 'VIEW');
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  onCursorChange?.('default');
                }}
                className={`${colSpan} group cursor-pointer relative bg-[#F5F1EA] border border-[#111111] shadow-[5px_5px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 p-5 md:p-7 flex flex-col justify-between transition-all duration-200 hover:bg-[#111111]`}
              >
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#D8D0C5] pb-4 transition-colors">
                  <span className="font-bold text-[#FF4D2E] group-hover:text-[#D8FF00]">0{index + 1}</span>
                  <span className="uppercase tracking-wider font-bold">{item.categoryLabel}</span>
                  <span className="font-mono">{item.year}</span>
                </div>

                {/* Logo Image / Canvas Container */}
                <div className="relative aspect-square my-3 overflow-hidden bg-white border border-[#111111] p-6 md:p-8 flex items-center justify-center transition-colors duration-200">
                  <img
                    src={item.image}
                    alt={`${item.title} Logo Mark`}
                    className="w-full h-full object-contain max-h-[240px] transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bottom Project Info Bar */}
                <div className="pt-4 border-t border-[#111111] group-hover:border-[#333333] transition-colors">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight uppercase text-[#111111] group-hover:text-[#F5F1EA]">
                        {item.title}
                      </h3>
                      <p className="font-grotesk text-xs text-[#111111]/70 group-hover:text-[#D8D0C5] uppercase tracking-wider mt-0.5">
                        {item.client || 'Visual Identity'}
                      </p>
                    </div>

                    {/* Geometric Arrow badge */}
                    <div className="w-9 h-9 border border-[#111111] bg-[#111111] text-[#F5F1EA] group-hover:bg-[#FF4D2E] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#111111]/30 group-hover:border-[#333333]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-grotesk text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border border-[#111111] bg-[#F5F1EA] text-[#111111] group-hover:bg-[#222222] group-hover:text-[#D8D0C5] group-hover:border-[#444444] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
