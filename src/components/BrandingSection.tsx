import { ArrowUpRight, MoveRight } from 'lucide-react';
import { BRANDING_PROJECTS, SECTIONS_METADATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface BrandingSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function BrandingSection({ onSelectProject, onCursorChange }: BrandingSectionProps) {
  const meta = SECTIONS_METADATA.branding;

  return (
    <section
      id="branding"
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
              BRAND<br />
              <span className="text-[#111111]">ING</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed font-medium">
              “{meta.description}”
            </p>
            <div className="flex items-center gap-3 font-grotesk text-xs uppercase tracking-widest text-[#111111]/70">
              <span>HOLISTIC VISUAL SYSTEMS</span>
              <span className="w-12 h-[1px] bg-[#111111]" />
              <span className="font-mono text-[#FF4D2E] font-bold bg-[#D8FF00] px-2 py-0.5 border border-[#111111]">
                {BRANDING_PROJECTS.length} SYSTEMS
              </span>
            </div>
          </div>
        </div>

        {/* Large Horizontal Case Study Cards with Geometric Balance styling */}
        <div className="space-y-12 md:space-y-16">
          {BRANDING_PROJECTS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                id={`brand-case-${item.id}`}
                onClick={() => onSelectProject(item)}
                onMouseEnter={() => onCursorChange?.('view', 'EXPLORE')}
                onMouseLeave={() => onCursorChange?.('default')}
                className="group cursor-pointer bg-[#F5F1EA] border border-[#111111] p-6 sm:p-8 md:p-10 hover:bg-[#F0EBE0] transition-all duration-200 shadow-[6px_6px_0px_#111111] hover:shadow-[10px_10px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column (or Right on alternate): Hero Editorial Mockup */}
                  <div
                    className={`lg:col-span-7 overflow-hidden ${
                      item.imageFit === 'contain' ? 'bg-white p-6 sm:p-10 flex items-center justify-center' : 'bg-[#111111]'
                    } relative aspect-[16/10] sm:aspect-[16/9] border border-[#111111] ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} Case Study`}
                      className={`w-full h-full ${
                        item.imageFit === 'contain'
                          ? 'object-contain max-h-[90%]'
                          : 'object-cover'
                      } group-hover:scale-105 transition-transform duration-500 ease-out`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Floating VIEW PROJECT badge */}
                    <div className="absolute bottom-4 right-4 bg-[#111111] text-[#F5F1EA] px-4 py-2 flex items-center gap-2 font-grotesk text-xs uppercase font-bold tracking-widest border border-[#111111] group-hover:bg-[#FF4D2E] transition-colors duration-200">
                      <span>VIEW PROJECT</span>
                      <MoveRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Top Tag */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#111111] text-[#F5F1EA] border border-[#111111]">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Right Column: Brand Anatomy (Logo, Typography, Palette, Description) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Index & Year */}
                    <div className="flex items-center justify-between border-b border-[#111111] pb-3">
                      <span className="font-mono text-xs font-bold text-[#FF4D2E]">
                        CASE STUDY // 0{index + 1}
                      </span>
                      <span className="font-mono text-xs text-[#111111] font-bold bg-[#D8FF00] px-1.5 py-0.5 border border-[#111111]">{item.year}</span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111111] group-hover:text-[#FF4D2E] transition-colors leading-none">
                        {item.title}
                      </h3>
                      <p className="font-grotesk text-xs text-[#111111]/70 uppercase tracking-widest mt-1.5 font-bold">
                        CLIENT: {item.client}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base text-[#111111] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Brand System Anatomy Grid */}
                    <div className="space-y-3 pt-2 border-t border-[#111111]">
                      {/* Typography spec */}
                      {item.typographySpec && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-grotesk font-bold text-[#111111] uppercase">
                            <span>TYPOGRAPHY SYSTEM</span>
                            <span className="font-mono text-[10px] text-[#FF4D2E]">
                              {item.typographySpec.primaryFont}
                            </span>
                          </div>
                          <div className="p-2 bg-[#F5F1EA] border border-[#111111] text-xs font-display tracking-wider uppercase text-[#111111] truncate shadow-[2px_2px_0px_#111111]">
                            {item.typographySpec.sampleText || 'ABCDEFGHIJKLM 0123456789'}
                          </div>
                        </div>
                      )}

                      {/* Color Palette Swatches */}
                      {item.colorPalette && (
                        <div className="space-y-1 pt-2">
                          <span className="text-[11px] font-grotesk font-bold text-[#111111] uppercase block">
                            COLOR PALETTE
                          </span>
                          <div className="flex items-center gap-2">
                            {item.colorPalette.map((color, cIdx) => (
                              <div
                                key={cIdx}
                                className="flex-1 h-7 border border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center group/swatch relative"
                                style={{ backgroundColor: color }}
                                title={color}
                              >
                                <span className="opacity-0 group-hover/swatch:opacity-100 font-mono text-[8px] px-1 bg-black text-white border border-white transition-opacity">
                                  {color}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button className="inline-flex items-center gap-2 font-grotesk text-xs uppercase font-bold tracking-widest text-[#111111] group-hover:text-[#FF4D2E] transition-colors">
                        <span>OPEN FULL IDENTITY ARCHIVE</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
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
