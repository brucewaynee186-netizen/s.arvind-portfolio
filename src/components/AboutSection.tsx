import { ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface SoftwareTool {
  name: string;
  fullName: string;
  category: string;
  color: string;
  bgColor: string;
  path: string;
}

const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    name: 'Photoshop',
    fullName: 'Adobe Photoshop',
    category: 'Raster & Retouching',
    color: '#31A8FF',
    bgColor: '#001E36',
    path: 'M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z',
  },
  {
    name: 'Illustrator',
    fullName: 'Adobe Illustrator',
    category: 'Vector & Identity',
    color: '#FF9A00',
    bgColor: '#330000',
    path: 'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z',
  },
  {
    name: 'CorelDRAW',
    fullName: 'CorelDRAW Graphics Suite',
    category: 'Vector & Signage',
    color: '#00C853',
    bgColor: '#062E14',
    path: 'M10.651 0C10.265.019 9.4.272 8.584.657c-.816.39-3.696 2.161-3.752 6.536.072 4.145 3.847 11.191 6.397 13.455 0 0-4.141-6.952-4.439-13.013C6.488 1.575 10.651 0 10.651 0Zm2.679 0s4.159 1.575 3.861 7.635c-.299 6.061-4.439 13.013-4.439 13.013 2.547-2.264 6.324-9.31 6.396-13.455-.057-4.375-2.936-6.146-3.752-6.536C14.58.272 13.715.019 13.33 0Zm-1.38.019a1.088 1.088 0 0 0-.555.144C9.864.99 8.909 3.982 9.177 8.66c.185 3.242 1.009 7.291 2.422 11.988h.7c1.413-4.697 2.24-8.742 2.425-11.984.268-4.677-.688-7.674-2.219-8.501a1.088 1.088 0 0 0-.555-.144ZM7.017 1.066S2.543 2.909 3.431 8.225c.884 5.32 5.588 10.995 6.986 12.2.503.457-5.777-6.548-6.386-12.699-.291-2.323.39-4.9 2.986-6.66Zm9.966 0c2.595 1.76 3.276 4.337 2.985 6.66-.608 6.151-6.888 13.156-6.386 12.699 1.398-1.205 6.103-6.88 6.987-12.2.888-5.316-3.586-7.159-3.586-7.159Zm-6.815 20.78L10.647 24h2.599l.488-2.154h-3.566Z',
  },
  {
    name: 'InDesign',
    fullName: 'Adobe InDesign',
    category: 'Editorial & Print',
    color: '#FF3366',
    bgColor: '#49021F',
    path: 'M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z',
  },
  {
    name: 'Premiere Pro',
    fullName: 'Adobe Premiere Pro',
    category: 'Video Editing',
    color: '#9999FF',
    bgColor: '#00005B',
    path: 'M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z',
  },
  {
    name: 'After Effects',
    fullName: 'Adobe After Effects',
    category: 'Motion & VFX',
    color: '#D291FF',
    bgColor: '#1F0038',
    path: 'M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z',
  },
];

const CAPABILITY_TARGET_MAP: Record<string, { sectionId: string; label: string }> = {
  'LOGOFOLIO': { sectionId: 'logofolio', label: 'Jump to Logofolio Section' },
  'BRANDING': { sectionId: 'branding', label: 'Jump to Branding Section' },
  'SOCIAL MEDIA DESIGN': { sectionId: 'social', label: 'Jump to Social Media Section' },
  'PACKAGING DESIGN': { sectionId: 'packaging', label: 'Jump to Packaging Section' },
  'PRINT MEDIA': { sectionId: 'print', label: 'Jump to Print Media Section' },
};

interface AboutSectionProps {
  onOpenContact: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function AboutSection({ onOpenContact, onCursorChange }: AboutSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-6 md:px-10 bg-[#F5F1EA] bg-dots border-b border-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Numbering */}
        <div className="flex items-center justify-between border-b border-[#111111] pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm font-bold text-[#FF4D2E]">
              [INFO / 00]
            </span>
            <span className="font-grotesk text-xs md:text-sm font-semibold tracking-widest text-[#111111] uppercase">
              ABOUT THE DESIGNER
            </span>
          </div>

          {/* Glowing Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] text-[#F5F1EA] border border-[#111111] text-xs font-grotesk font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D8FF00] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#D8FF00] -ml-4" />
            <span>AVAILABLE FOR WORK • 2026</span>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Large Headline Typography + Studio Portrait + Have a Project in Mind */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-[65px] sm:text-[80px] md:text-[95px] text-[#111111] leading-[0.85] uppercase tracking-tighter m-0">
              ABOUT<br />
              <span className="text-[#FF4D2E]">ME.</span>
            </h2>

            {/* Editorial Studio Image / Concept block */}
            <div className="relative group overflow-hidden bg-[#F5F1EA] border border-[#111111] p-3 shadow-[6px_6px_0px_#111111]">
              <div className="aspect-square overflow-hidden bg-[#111111] border border-[#111111]">
                <img
                  src="https://i.ibb.co/PsK6LphD/Chat-GPT-Image-Sep-16-2026-04-31-00-PM.png"
                  alt="S. Arvind Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-grotesk text-xs text-[#111111]">
                <span className="font-bold uppercase tracking-wider">STUDIO PROCESS & CRAFT</span>
                <span className="font-mono text-[10px] bg-[#D8FF00] px-1.5 py-0.5 border border-[#111111] font-bold">EST. 2020</span>
              </div>
            </div>

            {/* Direct Work Inquiries Prompt (Moved to Left Side) */}
            <div className="p-5 sm:p-6 bg-[#111111] text-[#F5F1EA] border border-[#111111] shadow-[6px_6px_0px_#111111] space-y-4">
              <div>
                <p className="font-display text-lg sm:text-xl uppercase text-[#F5F1EA] tracking-wide m-0">
                  HAVE A PROJECT IN MIND?
                </p>
                <p className="font-grotesk text-xs text-[#D8D0C5] mt-1.5 leading-relaxed">
                  Currently accepting identity & packaging commissions for 2026.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                onMouseEnter={() => onCursorChange?.('link')}
                onMouseLeave={() => onCursorChange?.('default')}
                className="w-full px-5 py-3 bg-[#FF4D2E] hover:bg-[#D8FF00] hover:text-[#111111] text-[#F5F1EA] font-grotesk text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-[#111111] shadow-[2px_2px_0px_#111111]"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="space-y-1 font-grotesk text-xs text-[#111111]/80 font-medium pt-1">
              <p>Specialization: Identity Systems & Physical Artifacts</p>
              <p>Approach: Concept-first, Typographic Rigor, Anti-Trend</p>
            </div>
          </div>

          {/* Right Column: Statement Paragraph + Core Capabilities + Software I Use */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            {/* Primary Designer Paragraph */}
            <p className="font-body text-xl md:text-2xl font-medium text-[#111111] leading-relaxed tracking-tight border-l-2 border-[#111111] pl-6">
              “{DESIGNER_INFO.bio}”
            </p>

            {/* Capabilities Breakdown */}
            <div className="space-y-4 pt-4 border-t border-[#111111]">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF4D2E]" />
                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide text-[#111111] m-0">
                    CORE CAPABILITIES
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#FF4D2E] font-bold">05 DISCIPLINES</span>
              </div>

              {/* Clean Editorial Capabilities List with No Background Box Clutter */}
              <div className="divide-y divide-[#111111] border-t border-b border-[#111111]">
                {DESIGNER_INFO.capabilities.map((cap, idx) => {
                  const target = CAPABILITY_TARGET_MAP[cap] || {
                    sectionId: cap.toLowerCase().replace(/\s+/g, '-'),
                    label: `Jump to ${cap} Section`,
                  };

                  return (
                    <button
                      key={cap}
                      id={`capability-link-${target.sectionId}`}
                      onClick={() => scrollToSection(target.sectionId)}
                      onMouseEnter={() => onCursorChange?.('link')}
                      onMouseLeave={() => onCursorChange?.('default')}
                      aria-label={target.label}
                      className="w-full text-left flex items-center justify-between py-3.5 px-2 hover:bg-[#111111] hover:text-[#F5F1EA] transition-colors duration-150 group cursor-pointer focus:outline-none focus-visible:bg-[#111111] focus-visible:text-[#F5F1EA]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-[#FF4D2E] group-hover:text-[#D8FF00] transition-colors">
                          {idx + 1}.
                        </span>
                        <span className="font-grotesk text-sm sm:text-base font-bold uppercase tracking-wider">
                          {cap}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 text-[#D8FF00] transition-opacity hidden sm:inline-block">
                          VIEW SECTION
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-[#111111] group-hover:text-[#D8FF00] transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Software I Use - Toolstack (Equal size to Core Capabilities) */}
            <div className="space-y-4 pt-6 border-t border-[#111111]">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF4D2E]" />
                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide text-[#111111] m-0">
                    SOFTWARE I USE
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#FF4D2E] font-bold">06 PLATFORMS</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SOFTWARE_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 bg-[#F5F1EA] hover:bg-[#111111] border border-[#111111] shadow-[3px_3px_0px_#111111] transition-colors duration-150 group flex items-center gap-3 cursor-default select-none"
                    title={tool.fullName}
                  >
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 border border-[#111111]/20 p-1"
                      style={{ backgroundColor: tool.bgColor }}
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 transition-transform group-hover:scale-105"
                        fill={tool.color}
                      >
                        <title>{tool.fullName}</title>
                        <path d={tool.path} />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-grotesk text-xs font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#F5F1EA] truncate">
                        {tool.name}
                      </div>
                      <div className="font-mono text-[9px] text-[#111111]/60 group-hover:text-[#D8FF00] truncate">
                        {tool.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
