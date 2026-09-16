import { PRINT_PROJECTS, SECTIONS_METADATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface PrintMediaSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function PrintMediaSection({}: PrintMediaSectionProps) {
  const meta = SECTIONS_METADATA.print;

  return (
    <section
      id="print"
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
              PRINT<br />
              <span className="text-[#111111]">MEDIA</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-body text-lg md:text-xl text-[#111111] leading-relaxed font-medium">
              “{meta.description}”
            </p>
            <div className="flex items-center gap-3 font-grotesk text-xs uppercase tracking-widest text-[#111111]/70">
              <span>PHYSICAL SURFACES & TACTILE PRINT</span>
              <span className="w-12 h-[1px] bg-[#111111]" />
              <span className="font-mono text-[#FF4D2E] font-bold bg-[#D8FF00] px-2 py-0.5 border border-[#111111]">
                {PRINT_PROJECTS.length} ARTIFACTS
              </span>
            </div>
          </div>
        </div>

        {/* Orderly Editorial Gallery */}
        <div className="columns-1 md:columns-2 gap-8 lg:gap-10">
          {PRINT_PROJECTS.map((item, index) => (
            <div
              key={item.id}
              id={`print-card-${item.id}`}
              className="break-inside-avoid mb-8 lg:mb-10 bg-[#F5F1EA] border border-[#111111] p-3 sm:p-4 shadow-[6px_6px_0px_#111111] select-none"
            >
              <div className="relative w-full overflow-hidden bg-[#EAE5DC] border border-[#111111]">
                <img
                  src={item.image}
                  alt={`Print Media Artifact ${String(index + 1).padStart(2, '0')}`}
                  className="w-full h-auto block object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

