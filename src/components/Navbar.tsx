import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenContact: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function Navbar({ activeSection, onOpenContact, onCursorChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const workSubSections = [
    { id: 'logofolio', num: '01', label: 'Logofolio' },
    { id: 'branding', num: '02', label: 'Branding' },
    { id: 'social', num: '03', label: 'Social' },
    { id: 'packaging', num: '04', label: 'Packaging' },
    { id: 'print', num: '05', label: 'Print' },
  ];

  const isWorkActive = ['logofolio', 'branding', 'social', 'packaging', 'print'].includes(activeSection);

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-[#111111] ${
          scrolled
            ? 'bg-[#F5F1EA]/95 backdrop-blur-md py-4 shadow-sm'
            : 'bg-[#F5F1EA] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand / Designer Name - Geometric Balance format */}
          <button
            id="nav-brand-logo"
            onClick={() => scrollTo('hero')}
            onMouseEnter={() => onCursorChange?.('link')}
            onMouseLeave={() => onCursorChange?.('default')}
            className="group text-left focus:outline-none flex items-center gap-2"
          >
            <span className="font-display text-xl sm:text-2xl tracking-tighter uppercase text-[#111111] group-hover:text-[#FF4D2E] transition-colors">
              S.ARVIND
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-grotesk text-xs uppercase tracking-[0.2em]">
            {/* Quick Section Jump Pills */}
            <div className="hidden xl:flex items-center gap-2 border-r border-[#111111] pr-6">
              {workSubSections.map((sub) => {
                const isActive = activeSection === sub.id;
                return (
                  <button
                    key={sub.id}
                    id={`nav-pill-${sub.id}`}
                    onClick={() => scrollTo(sub.id)}
                    onMouseEnter={() => onCursorChange?.('link')}
                    onMouseLeave={() => onCursorChange?.('default')}
                    className={`px-2.5 py-1 text-[11px] font-grotesk font-semibold tracking-wider transition-all duration-150 border ${
                      isActive
                        ? 'bg-[#111111] text-[#F5F1EA] border-[#111111]'
                        : 'border-transparent text-[#111111]/70 hover:text-[#111111] hover:border-[#111111] hover:bg-[#D8FF00]'
                    }`}
                  >
                    <span className="text-[#FF4D2E] mr-1 font-mono">{sub.num}</span> {sub.label}
                  </button>
                );
              })}
            </div>

            {/* Work Link */}
            <button
              onClick={() => scrollTo('logofolio')}
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none font-bold"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  isWorkActive ? 'bg-[#FF4D2E] scale-125' : 'bg-[#111111] group-hover:bg-[#FF4D2E]'
                }`}
              />
              <span className="hover:translate-x-1 transition-transform">Work</span>
            </button>

            {/* About Link */}
            <button
              onClick={() => scrollTo('about')}
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className={`hover:translate-x-1 transition-transform cursor-pointer focus:outline-none font-bold ${
                activeSection === 'about' ? 'text-[#FF4D2E]' : 'text-[#111111]'
              }`}
            >
              About
            </button>

            {/* Contact Link */}
            <button
              onClick={onOpenContact}
              onMouseEnter={() => onCursorChange?.('link')}
              onMouseLeave={() => onCursorChange?.('default')}
              className="hover:translate-x-1 transition-transform cursor-pointer focus:outline-none font-bold text-[#111111] hover:text-[#FF4D2E]"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-contact-pill"
              onClick={onOpenContact}
              className="px-3 py-1 bg-[#111111] text-[#F5F1EA] border border-[#111111] text-xs font-grotesk font-bold tracking-widest uppercase hover:bg-[#FF4D2E]"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111111] border border-[#111111] focus:outline-none bg-[#F5F1EA]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#F5F1EA] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden overflow-y-auto border-8 border-[#111111]"
        >
          <div className="space-y-6">
            <div className="border-b border-[#111111] pb-3 flex justify-between items-center">
              <span className="font-grotesk text-xs tracking-[0.2em] text-[#111111] uppercase font-bold">
                SECTION INDEX
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 border border-[#111111]">
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col space-y-3 font-display uppercase">
              <button
                onClick={() => scrollTo('about')}
                className="text-left text-3xl tracking-tighter text-[#111111] hover:text-[#FF4D2E] transition-colors py-1 border-b border-[#111111]/20 flex justify-between items-center"
              >
                <span>About</span>
                <span className="font-grotesk not-italic text-xs text-[#111111]/40">INFO</span>
              </button>

              {workSubSections.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => scrollTo(sub.id)}
                  className="text-left flex items-center justify-between py-2 border-b border-[#111111]/20 group"
                >
                  <span className="text-3xl tracking-tighter text-[#111111] group-hover:text-[#FF4D2E] transition-colors italic">
                    {sub.num} {sub.label}
                  </span>
                  <span className="font-grotesk not-italic text-xs text-[#111111]/40">
                    VIEW
                  </span>
                </button>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-left text-3xl tracking-tighter text-[#FF4D2E] hover:text-[#111111] transition-colors flex items-center justify-between pt-3"
              >
                <span>Contact</span>
                <ArrowUpRight size={28} />
              </button>
            </div>
          </div>

          <div className="border-t border-[#111111] pt-6 flex flex-col space-y-2">
            <div className="font-grotesk text-[10px] uppercase border border-[#111111] py-1.5 px-2.5 inline-block bg-[#D8FF00] font-bold text-center">
              Available for work • 2026
            </div>
            <p className="font-grotesk text-xs text-[#111111]/70 pt-1">
              {DESIGNER_INFO.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
