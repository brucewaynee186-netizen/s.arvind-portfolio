import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { SOCIAL_PROJECTS, SECTIONS_METADATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface SocialMediaSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function SocialMediaSection({ onSelectProject, onCursorChange }: SocialMediaSectionProps) {
  const meta = SECTIONS_METADATA.social;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Separate Vortex from the subsequent two pairs of brands
  const vortexProject = SOCIAL_PROJECTS.find((p) => p.id === 'social-vortex') || SOCIAL_PROJECTS[0];
  const middleRowProjects = SOCIAL_PROJECTS.filter(
    (p) => p.id === 'social-bloom-beam' || p.id === 'social-juicy-knot'
  );
  const bottomRowProjects = SOCIAL_PROJECTS.filter(
    (p) => p.id === 'social-good-swan' || p.id === 'social-edvora'
  );

  const totalPosters = SOCIAL_PROJECTS.reduce(
    (acc, p) => acc + (p.mockups?.length || 1),
    0
  );

  return (
    <section
      id="social"
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
              SOCIAL<br />
              <span className="text-[#111111]">MEDIA</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed font-medium">
              “{meta.description}”
            </p>
            <div className="flex items-center gap-3 font-grotesk text-xs uppercase tracking-widest text-[#111111]/70">
              <span className="flex items-center gap-1.5 font-bold text-[#111111]">
                <Layers size={14} className="text-[#FF4D2E]" />
                5 BRAND CAMPAIGNS
              </span>
              <span className="w-10 h-[1px] bg-[#111111]" />
              <span className="font-mono text-[#111111] font-bold bg-[#D8FF00] px-2.5 py-0.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                {totalPosters} POSTERS TOTAL
              </span>
            </div>
          </div>
        </div>

        {/* Brand System Exhibition: Vortex Full First, then Two Brands, then Bottom Two Brands */}
        <div className="space-y-10 md:space-y-12">
          {/* ========================================================= */}
          {/* 1. VORTEX FIRST FULLY                                      */}
          {/* ========================================================= */}
          {vortexProject && (
            <div
              id={`social-card-${vortexProject.id}`}
              onClick={() => onSelectProject(vortexProject)}
              onMouseEnter={() => {
                setHoveredId(vortexProject.id);
                onCursorChange?.('view', 'VIEW');
              }}
              onMouseLeave={() => {
                setHoveredId(null);
                onCursorChange?.('default');
              }}
              className="group cursor-pointer bg-[#F5F1EA] border-2 border-[#111111] p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_#111111] hover:shadow-[12px_12px_0px_#FF4D2E] hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Washi Tape Header Accent */}
              <div className="absolute -top-3 left-8 sm:left-12 w-20 h-5 bg-[#D8FF00] border border-[#111111] shadow-[2px_2px_0px_#111111] font-mono text-[9px] font-bold text-[#111111] flex items-center justify-center uppercase tracking-wider">
                FEATURED
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Brand Logo as Cover Page */}
                <div className="lg:col-span-6 overflow-hidden bg-white border-2 border-[#111111] p-8 sm:p-12 flex items-center justify-center relative aspect-[16/10] sm:aspect-[16/9] shadow-[4px_4px_0px_#111111] group-hover:shadow-[6px_6px_0px_#D8FF00] transition-all">
                  <img
                    src={vortexProject.image}
                    alt={`${vortexProject.title} Brand Logo`}
                    className="w-full h-full object-contain max-h-[180px] sm:max-h-[220px] group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner Badges on Logo Cover */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#111111] text-[#D8FF00] border border-[#111111]">
                    BRAND COVER // 4:5 FEED
                  </div>

                  <div className="absolute top-3 right-3 font-mono text-[10px] font-bold px-2.5 py-1 bg-[#FF4D2E] text-white border border-[#111111]">
                    {vortexProject.mockups?.length || 0} POSTERS
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="font-mono text-xs font-bold text-[#111111] bg-[#D8FF00] px-4 py-2 border border-[#111111] shadow-[3px_3px_0px_#111111]">
                      OPEN CAMPAIGN SUITE
                    </span>
                  </div>
                </div>

                {/* Brand & Campaign Overview */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between border-b border-[#111111] pb-3 font-mono text-xs">
                    <span className="font-bold text-[#FF4D2E]">
                      CAMPAIGN 01 // 05
                    </span>
                    <span className="font-bold text-[#111111] bg-[#D8FF00] px-2 py-0.5 border border-[#111111]">
                      {vortexProject.year} ARCHIVE
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] leading-none m-0">
                      {vortexProject.title}
                    </h3>
                    <p className="font-grotesk text-xs sm:text-sm text-[#FF4D2E] uppercase tracking-wider font-bold mt-2">
                      {vortexProject.client}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#111111] leading-relaxed font-normal">
                    {vortexProject.description}
                  </p>

                  {/* Mini Poster Preview Strip */}
                  {vortexProject.mockups && vortexProject.mockups.length > 0 && (
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#111111]/70 mb-2">
                        <span className="font-bold uppercase text-[#111111]">CAMPAIGN POSTER SUITE:</span>
                        <span>{vortexProject.mockups.length} SHOTS</span>
                      </div>
                      <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                        {vortexProject.mockups.map((shotUrl, sIdx) => (
                          <div
                            key={sIdx}
                            className="w-14 h-16 sm:w-16 sm:h-20 bg-black border border-[#111111] shrink-0 overflow-hidden shadow-[2px_2px_0px_#111111]"
                          >
                            <img
                              src={shotUrl}
                              alt={`${vortexProject.title} Shot ${sIdx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags and Action */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#111111]/20">
                    <div className="flex flex-wrap gap-1.5">
                      {vortexProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-grotesk text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 border border-[#111111] bg-white text-[#111111]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#111111] group-hover:text-[#FF4D2E] transition-colors">
                      <span>VIEW SUITE</span>
                      <div className="w-7 h-7 bg-[#111111] text-[#F5F1EA] group-hover:bg-[#FF4D2E] group-hover:text-white flex items-center justify-center transition-colors border border-[#111111]">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 2. THEN TWO BRANDS (Bloom Beam & Juicy Knot)               */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {middleRowProjects.map((item, index) => {
              const isHovered = hoveredId === item.id;
              const rotation = item.rotation || (index % 2 === 0 ? -1.2 : 1.2);

              return (
                <div
                  key={item.id}
                  id={`social-card-${item.id}`}
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FF4D2E] border border-[#111111] shadow-[2px_2px_0px_#111111]" />

                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#D8D0C5] pb-3 border-b border-[#111111] group-hover:border-[#333333] transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#FF4D2E] group-hover:text-[#D8FF00]">
                          0{index + 2}
                        </span>
                        <span className="uppercase font-bold">{item.client || item.title}</span>
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
                        BRAND LOGO // 4:5
                      </div>
                      <div className="absolute top-2.5 right-2.5 font-mono text-[9px] font-bold px-2 py-0.5 bg-[#FF4D2E] text-white border border-[#111111]">
                        {item.mockups?.length || 0} POSTERS
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-[#111111] bg-[#D8FF00] px-3.5 py-1.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                          EXPAND CAMPAIGN
                        </span>
                      </div>
                    </div>

                    {/* Mini Posters Preview Bar */}
                    {item.mockups && item.mockups.length > 0 && (
                      <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1">
                        {item.mockups.slice(0, 4).map((shotUrl, sIdx) => (
                          <div
                            key={sIdx}
                            className="w-12 h-14 bg-black border border-[#111111] shrink-0 overflow-hidden shadow-[1px_1px_0px_#111111]"
                          >
                            <img
                              src={shotUrl}
                              alt={`${item.title} Poster ${sIdx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                        {item.mockups.length > 4 && (
                          <div className="w-12 h-14 bg-[#111111] text-[#D8FF00] border border-[#111111] shrink-0 flex items-center justify-center font-mono text-[10px] font-bold">
                            +{item.mockups.length - 4}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Title & Description */}
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] group-hover:text-[#F5F1EA]">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-[#111111]/80 group-hover:text-[#D8D0C5] mt-1.5 line-clamp-2">
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

          {/* ========================================================= */}
          {/* 3. BELOW THAT OTHER TWO BRANDS (Good Swan & Edvora)        */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {bottomRowProjects.map((item, index) => {
              const isHovered = hoveredId === item.id;
              const rotation = item.rotation || (index % 2 === 0 ? 1.0 : -1.0);

              return (
                <div
                  key={item.id}
                  id={`social-card-${item.id}`}
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#D8FF00] border border-[#111111] shadow-[2px_2px_0px_#111111]" />

                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#D8D0C5] pb-3 border-b border-[#111111] group-hover:border-[#333333] transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#FF4D2E] group-hover:text-[#D8FF00]">
                          0{index + 4}
                        </span>
                        <span className="uppercase font-bold">{item.client || item.title}</span>
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
                        BRAND LOGO // 4:5
                      </div>
                      <div className="absolute top-2.5 right-2.5 font-mono text-[9px] font-bold px-2 py-0.5 bg-[#FF4D2E] text-white border border-[#111111]">
                        {item.mockups?.length || 0} POSTERS
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-[#111111] bg-[#D8FF00] px-3.5 py-1.5 border border-[#111111] shadow-[2px_2px_0px_#111111]">
                          EXPAND CAMPAIGN
                        </span>
                      </div>
                    </div>

                    {/* Mini Posters Preview Bar */}
                    {item.mockups && item.mockups.length > 0 && (
                      <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1">
                        {item.mockups.slice(0, 4).map((shotUrl, sIdx) => (
                          <div
                            key={sIdx}
                            className="w-12 h-14 bg-black border border-[#111111] shrink-0 overflow-hidden shadow-[1px_1px_0px_#111111]"
                          >
                            <img
                              src={shotUrl}
                              alt={`${item.title} Poster ${sIdx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                        {item.mockups.length > 4 && (
                          <div className="w-12 h-14 bg-[#111111] text-[#D8FF00] border border-[#111111] shrink-0 flex items-center justify-center font-mono text-[10px] font-bold">
                            +{item.mockups.length - 4}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Title & Description */}
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] group-hover:text-[#F5F1EA]">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-[#111111]/80 group-hover:text-[#D8D0C5] mt-1.5 line-clamp-2">
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
      </div>
    </section>
  );
}
