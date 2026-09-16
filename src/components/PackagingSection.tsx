import { useState } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { PACKAGING_PROJECTS, SECTIONS_METADATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface PackagingSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function PackagingSection({ onSelectProject, onCursorChange }: PackagingSectionProps) {
  const meta = SECTIONS_METADATA.packaging;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Split: Two brands in first line, other three in next line
  const firstRowProjects = PACKAGING_PROJECTS.slice(0, 2); // Vortex, Bloom Beam
  const secondRowProjects = PACKAGING_PROJECTS.slice(2, 5); // Juicy Knot, Good Swan, Edvora

  const totalShots = PACKAGING_PROJECTS.reduce(
    (acc, p) => acc + (p.mockups?.length || 1),
    0
  );

  // Theme accents for each brand's washi tape and badges
  const BRAND_ACCENTS: Record<string, { tapeBg: string; tapeText: string; accent: string }> = {
    'pack-vortex': { tapeBg: '#D8FF00', tapeText: '#111111', accent: '#C0D02F' },
    'pack-bloom-beam': { tapeBg: '#0F8442', tapeText: '#FFFFFF', accent: '#0F8442' },
    'pack-juicy-knot': { tapeBg: '#EB225E', tapeText: '#FFFFFF', accent: '#EB225E' },
    'pack-good-swan': { tapeBg: '#FFB600', tapeText: '#111111', accent: '#FFB600' },
    'pack-edvora': { tapeBg: '#032F46', tapeText: '#FCB514', accent: '#FCB514' }
  };

  return (
    <section
      id="packaging"
      className="relative py-20 md:py-28 px-6 md:px-10 bg-[#F5F1EA] bg-dots border-b border-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#111111] pb-8 mb-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-sm md:text-base font-bold text-[#FF4D2E] block mb-2">
              [{meta.number} // 05]
            </span>
            <h2 className="font-display text-[70px] sm:text-[90px] md:text-[110px] text-[#111111] leading-[0.85] uppercase tracking-tighter m-0">
              PACK<br />
              <span className="text-[#111111]">AGING</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed font-medium">
              “{meta.description}”
            </p>
            <div className="flex items-center gap-3 font-grotesk text-xs uppercase tracking-widest text-[#111111]/70">
              <span className="flex items-center gap-1.5 font-bold text-[#111111]">
                <Box size={14} className="text-[#FF4D2E]" />
                5 PACKAGING SYSTEMS
              </span>
              <span className="w-10 h-[1px] bg-[#111111]" />
              <span className="font-mono text-[#111111] font-bold bg-[#D8FF00] px-2.5 py-0.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                {totalShots} 3D SHOTS TOTAL
              </span>
            </div>
          </div>
        </div>

        {/* Brand System Packaging Gallery */}
        <div className="space-y-10 md:space-y-12">
          {/* ========================================================= */}
          {/* 1. FIRST LINE: TWO BRANDS (Vortex & Bloom Beam)            */}
          {/* ========================================================= */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-[#111111] pb-3 mb-6 border-b border-[#111111]/30">
              <span className="font-bold text-[#FF4D2E] uppercase tracking-wider">
                TIER 01 // 02 BRAND SYSTEMS
              </span>
              <span className="text-[#111111]/60">FEATURED 3D PACKAGING</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {firstRowProjects.map((item, index) => {
                const isHovered = hoveredId === item.id;
                const theme = BRAND_ACCENTS[item.id] || { tapeBg: '#111111', tapeText: '#FFFFFF', accent: '#FF4D2E' };
                const rotation = index === 0 ? -1.2 : 1.2;
                const mockups = item.mockups || [];

                return (
                  <div
                    key={item.id}
                    id={`packaging-card-${item.id}`}
                    onClick={() => onSelectProject(item)}
                    onMouseEnter={() => {
                      setHoveredId(item.id);
                      onCursorChange?.('view', 'VIEW');
                    }}
                    onMouseLeave={() => {
                      setHoveredId(null);
                      onCursorChange?.('default');
                    }}
                    style={{
                      transform: isHovered
                        ? 'rotate(0deg) translate(-2px, -3px)'
                        : `rotate(${rotation}deg)`,
                    }}
                    className="group cursor-pointer bg-[#F5F1EA] border-2 border-[#111111] p-6 sm:p-8 transition-all duration-300 shadow-[6px_6px_0px_#111111] hover:shadow-[10px_10px_0px_#FF4D2E] hover:bg-[#111111] hover:text-[#F5F1EA] relative flex flex-col justify-between"
                  >
                    {/* Washi Tape Accent */}
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 border border-[#111111] shadow-[2px_2px_0px_#111111] font-mono text-[9px] font-bold uppercase tracking-wider whitespace-nowrap"
                      style={{
                        backgroundColor: theme.tapeBg,
                        color: theme.tapeText,
                      }}
                    >
                      SYSTEM 0{index + 1}
                    </div>

                    <div>
                      {/* Top Meta Line */}
                      <div className="flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#D8D0C5] pb-3 border-b border-[#111111] group-hover:border-[#333333] transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#FF4D2E] group-hover:text-[#D8FF00]">
                            0{index + 1} // 05
                          </span>
                          <span className="uppercase font-bold truncate max-w-[200px]">
                            {item.client || item.title}
                          </span>
                        </div>
                        <span className="font-mono">{item.year}</span>
                      </div>

                      {/* Brand Logo Cover Page */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden my-4 bg-white border-2 border-[#111111] p-6 sm:p-8 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={`${item.title} Brand Logo`}
                          className="w-full h-full object-contain max-h-[160px] sm:max-h-[190px] group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 font-mono text-[9px] font-bold px-2 py-0.5 bg-[#111111] text-[#D8FF00] border border-[#111111]">
                          COVER LOGO // 3D
                        </div>
                        <div className="absolute top-2.5 right-2.5 font-mono text-[9px] font-bold px-2 py-0.5 bg-[#FF4D2E] text-white border border-[#111111]">
                          {mockups.length} SHOTS
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="font-mono text-xs font-bold text-[#111111] bg-[#D8FF00] px-3.5 py-1.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                            EXPAND PACKAGING
                          </span>
                        </div>
                      </div>

                      {/* Mini Mockup Preview Bar */}
                      {mockups.length > 0 && (
                        <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1">
                          {mockups.slice(0, 4).map((shotUrl, sIdx) => (
                            <div
                              key={sIdx}
                              className="w-12 h-14 sm:w-14 sm:h-16 bg-black border border-[#111111] shrink-0 overflow-hidden shadow-[1px_1px_0px_#111111]"
                            >
                              <img
                                src={shotUrl}
                                alt={`${item.title} Pack ${sIdx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))}
                          {mockups.length > 4 && (
                            <div className="w-12 h-14 sm:w-14 sm:h-16 bg-[#111111] text-[#D8FF00] border border-[#111111] shrink-0 flex items-center justify-center font-mono text-[10px] font-bold">
                              +{mockups.length - 4}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Project Title & Description */}
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] group-hover:text-[#F5F1EA]">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-[#111111]/80 group-hover:text-[#D8D0C5] mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags & Action Button */}
                    <div className="pt-4 mt-4 border-t border-[#111111]/20 group-hover:border-[#333333] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-grotesk text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border border-[#111111] bg-[#F5F1EA] text-[#111111] group-hover:bg-[#222222] group-hover:text-[#D8D0C5] group-hover:border-[#444444]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-8 h-8 border border-[#111111] bg-[#111111] text-[#F5F1EA] group-hover:bg-[#FF4D2E] group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. NEXT LINE: OTHER THREE BRANDS (Juicy Knot, Good Swan, Edvora) */}
          {/* ========================================================= */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-[#111111] pb-3 mb-6 border-b border-[#111111]/30">
              <span className="font-bold text-[#FF4D2E] uppercase tracking-wider">
                TIER 02 // 03 BRAND SYSTEMS
              </span>
              <span className="text-[#111111]/60">SPECIALTY & HOSPITALITY PACKAGING</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {secondRowProjects.map((item, index) => {
                const isHovered = hoveredId === item.id;
                const theme = BRAND_ACCENTS[item.id] || { tapeBg: '#111111', tapeText: '#FFFFFF', accent: '#FF4D2E' };
                const rotation = index === 0 ? -1.0 : index === 1 ? 0.8 : -0.8;
                const mockups = item.mockups || [];

                return (
                  <div
                    key={item.id}
                    id={`packaging-card-${item.id}`}
                    onClick={() => onSelectProject(item)}
                    onMouseEnter={() => {
                      setHoveredId(item.id);
                      onCursorChange?.('view', 'VIEW');
                    }}
                    onMouseLeave={() => {
                      setHoveredId(null);
                      onCursorChange?.('default');
                    }}
                    style={{
                      transform: isHovered
                        ? 'rotate(0deg) translate(-2px, -3px)'
                        : `rotate(${rotation}deg)`,
                    }}
                    className="group cursor-pointer bg-[#F5F1EA] border-2 border-[#111111] p-5 sm:p-6 transition-all duration-300 shadow-[6px_6px_0px_#111111] hover:shadow-[10px_10px_0px_#FF4D2E] hover:bg-[#111111] hover:text-[#F5F1EA] relative flex flex-col justify-between"
                  >
                    {/* Washi Tape Accent */}
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 border border-[#111111] shadow-[2px_2px_0px_#111111] font-mono text-[9px] font-bold uppercase tracking-wider whitespace-nowrap"
                      style={{
                        backgroundColor: theme.tapeBg,
                        color: theme.tapeText,
                      }}
                    >
                      SYSTEM 0{index + 3}
                    </div>

                    <div>
                      {/* Top Meta Line */}
                      <div className="flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#D8D0C5] pb-3 border-b border-[#111111] group-hover:border-[#333333] transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#FF4D2E] group-hover:text-[#D8FF00]">
                            0{index + 3} // 05
                          </span>
                          <span className="uppercase font-bold truncate max-w-[150px]">
                            {item.client || item.title}
                          </span>
                        </div>
                        <span className="font-mono text-[11px]">{item.year}</span>
                      </div>

                      {/* Brand Logo Cover Page */}
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden my-3.5 bg-white border-2 border-[#111111] p-5 sm:p-6 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={`${item.title} Brand Logo`}
                          className="w-full h-full object-contain max-h-[140px] sm:max-h-[160px] group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 font-mono text-[8px] font-bold px-1.5 py-0.5 bg-[#111111] text-[#D8FF00] border border-[#111111]">
                          COVER LOGO
                        </div>
                        <div className="absolute top-2 right-2 font-mono text-[8px] font-bold px-1.5 py-0.5 bg-[#FF4D2E] text-white border border-[#111111]">
                          {mockups.length} SHOTS
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="font-mono text-xs font-bold text-[#111111] bg-[#D8FF00] px-3 py-1.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                            EXPAND PACKAGING
                          </span>
                        </div>
                      </div>

                      {/* Mini Mockup Preview Bar */}
                      {mockups.length > 0 && (
                        <div className="mb-3.5 flex items-center gap-1.5 overflow-x-auto pb-1">
                          {mockups.slice(0, 4).map((shotUrl, sIdx) => (
                            <div
                              key={sIdx}
                              className="w-11 h-13 sm:w-12 sm:h-14 bg-black border border-[#111111] shrink-0 overflow-hidden shadow-[1px_1px_0px_#111111]"
                            >
                              <img
                                src={shotUrl}
                                alt={`${item.title} Pack ${sIdx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))}
                          {mockups.length > 4 && (
                            <div className="w-11 h-13 sm:w-12 sm:h-14 bg-[#111111] text-[#D8FF00] border border-[#111111] shrink-0 flex items-center justify-center font-mono text-[10px] font-bold">
                              +{mockups.length - 4}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Project Title & Description */}
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#111111] group-hover:text-[#F5F1EA]">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-[#111111]/80 group-hover:text-[#D8D0C5] mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags & Action Button */}
                    <div className="pt-3.5 mt-3.5 border-t border-[#111111]/20 group-hover:border-[#333333] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="font-grotesk text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border border-[#111111] bg-[#F5F1EA] text-[#111111] group-hover:bg-[#222222] group-hover:text-[#D8D0C5] group-hover:border-[#444444]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-7 h-7 border border-[#111111] bg-[#111111] text-[#F5F1EA] group-hover:bg-[#FF4D2E] group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2">
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
