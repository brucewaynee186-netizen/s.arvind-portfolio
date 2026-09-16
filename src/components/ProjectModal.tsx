import { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Check, Copy } from 'lucide-react';
import { ProjectItem } from '../types';
import { ALL_PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export function ProjectModal({
  project,
  onClose,
  onSelectProject,
  onOpenContact,
}: ProjectModalProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? ALL_PROJECTS[currentIndex - 1] : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject =
    currentIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[currentIndex + 1] : ALL_PROJECTS[0];

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const imagesToShow = project.mockups && project.mockups.length > 0 ? project.mockups : [project.image];

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-sm flex justify-end overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-content"
        className="w-full max-w-4xl bg-[#F5F1EA] bg-dots min-h-screen border-l-2 border-[#111111] p-6 sm:p-10 md:p-14 flex flex-col justify-between shadow-[0px_0px_0px_#000] relative animate-in slide-in-from-right duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#111111]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#111111] text-[#F5F1EA] border border-[#111111] uppercase">
              {project.categoryLabel}
            </span>
            <span className="font-mono text-xs text-[#111111] font-bold bg-[#D8FF00] px-2 py-0.5 border border-[#111111]">{project.year} ARCHIVE</span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="w-10 h-10 border border-[#111111] bg-[#F5F1EA] hover:bg-[#FF4D2E] hover:text-[#F5F1EA] text-[#111111] shadow-[3px_3px_0px_#111111] transition-all flex items-center justify-center focus:outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="py-8 space-y-10">
          {/* Main Title & Client */}
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#111111] leading-[0.9] m-0">
              {project.title}
            </h2>
            {project.client && (
              <p className="font-grotesk text-sm md:text-base font-bold text-[#FF4D2E] uppercase tracking-wider mt-2">
                CLIENT: {project.client}
              </p>
            )}
          </div>

          {/* Editorial Case Description (Branding / Other Categories) */}
          {project.category !== 'social' && project.description && (
            <div className="bg-[#EAE4D8] p-6 border-l-4 border-[#FF4D2E] border-y border-r border-[#111111] shadow-[3px_3px_0px_#111111]">
              <p className="font-body text-base md:text-lg text-[#111111] leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* Deliverables / Tags */}
          <div className="space-y-2">
            <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-[#111111]">
              SCOPE & DISCIPLINES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-grotesk text-xs uppercase font-bold tracking-wider px-3 py-1 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] text-[#111111]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette Specification */}
          {project.category !== 'social' && project.colorPalette && project.colorPalette.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-[#111111]">
              <div className="flex items-center justify-between">
                <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-[#111111]">
                  COLOR ARCHITECTURE (CLICK TO COPY HEX)
                </span>
                {copiedColor && (
                  <span className="font-mono text-xs text-[#FF4D2E] flex items-center gap-1 font-bold">
                    <Check size={14} /> COPIED {copiedColor}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.colorPalette.map((hex) => (
                  <button
                    key={hex}
                    onClick={() => copyHex(hex)}
                    className="group/c flex flex-col border border-[#111111] shadow-[3px_3px_0px_#111111] overflow-hidden text-left hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="h-16 w-full" style={{ backgroundColor: hex }} />
                    <div className="p-2 bg-[#F5F1EA] border-t border-[#111111] flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#111111]">{hex}</span>
                      <Copy size={12} className="text-[#111111]/60 group-hover/c:text-[#FF4D2E]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Typography Specification */}
          {project.category !== 'social' && project.typographySpec && (
            <div className="space-y-3 pt-4 border-t border-[#111111]">
              <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-[#111111]">
                TYPE SPECIMEN
              </span>
              <div className="bg-[#F5F1EA] border border-[#111111] shadow-[3px_3px_0px_#111111] p-5 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#111111] border-b border-[#111111] pb-2 font-bold">
                  <span>PRIMARY: {project.typographySpec.primaryFont}</span>
                  <span>SECONDARY: {project.typographySpec.secondaryFont}</span>
                </div>
                <p className="font-display text-xl sm:text-2xl text-[#111111] tracking-tight uppercase">
                  {project.typographySpec.sampleText || 'THE QUICK BROWN FOX JUMPS OVER 1234567890'}
                </p>
              </div>
            </div>
          )}

          {/* Imagery Showcase Gallery */}
          <div className="space-y-6 pt-4 border-t border-[#111111]">
            <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-[#111111]">
              HIGH RESOLUTION SHOWCASE
            </span>
            <div className="space-y-6">
              {imagesToShow.map((imgUrl, i) => {
                const isWhiteBg =
                  project.whiteBgShots?.includes(i) ||
                  (project.category === 'logofolio' && i === 0);

                return (
                  <div
                    key={i}
                    className={`${
                      isWhiteBg ? 'bg-white' : 'bg-[#111111]'
                    } border border-[#111111] shadow-[4px_4px_0px_#111111] overflow-hidden`}
                  >
                    <div className={isWhiteBg ? 'p-6 sm:p-10 flex items-center justify-center min-h-[260px] bg-white' : 'w-full bg-[#111111] flex items-center justify-center'}>
                      <img
                        src={imgUrl}
                        alt={`${project.title} Asset ${i + 1}`}
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div
                      className={`p-3 ${
                        isWhiteBg
                          ? 'bg-[#F5F1EA] text-[#111111] border-t border-[#111111]'
                          : 'bg-[#111111] text-[#F5F1EA] border-t border-[#333333]'
                      } flex justify-between items-center text-[10px] font-mono`}
                    >
                      <span className="font-bold">
                        {project.title} // {project.category === 'social' ? `POSTER / CAMPAIGN SHOT 0${i + 1}` : `SHOT 0${i + 1}`}
                      </span>
                      <span className={isWhiteBg ? 'text-[#FF4D2E] font-bold' : 'text-[#D8FF00] font-bold'}>
                        2026 ARCHIVE
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Navigation & CTA */}
        <div className="pt-8 border-t border-[#111111] space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Prev Project */}
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#F5F1EA] border border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#111111] hover:text-[#F5F1EA] transition-all flex items-center justify-center gap-2 font-grotesk text-xs font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              <span>PREV: {prevProject.title}</span>
            </button>

            {/* Inquire CTA */}
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#FF4D2E] text-[#F5F1EA] border border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#D8FF00] hover:text-[#111111] transition-all font-grotesk text-xs font-bold uppercase tracking-widest"
            >
              COMMISSION SIMILAR PROJECT
            </button>

            {/* Next Project */}
            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#F5F1EA] border border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#111111] hover:text-[#F5F1EA] transition-all flex items-center justify-center gap-2 font-grotesk text-xs font-bold uppercase tracking-wider"
            >
              <span>NEXT: {nextProject.title}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
