import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCover } from './components/HeroCover';
import { AboutSection } from './components/AboutSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { LogofolioSection } from './components/LogofolioSection';
import { BrandingSection } from './components/BrandingSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { PackagingSection } from './components/PackagingSection';
import { PrintMediaSection } from './components/PrintMediaSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cursorState, setCursorState] = useState<{
    variant: 'default' | 'view' | 'link' | 'hidden';
    text?: string;
  }>({
    variant: 'default',
  });

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'logofolio', 'branding', 'social', 'packaging', 'print', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.35 && rect.bottom >= windowHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCursorChange = (variant: 'default' | 'view' | 'link' | 'hidden', text?: string) => {
    setCursorState({ variant, text });
  };

  const handleExploreClick = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F1EA] bg-dots text-[#111111] overflow-x-hidden font-body selection:bg-[#FF4D2E] selection:text-[#F5F1EA]">
      {/* Custom Desktop Cursor */}
      <CustomCursor cursorText={cursorState.text} cursorVariant={cursorState.variant} />

      {/* Minimal Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => setContactModalOpen(true)}
        onCursorChange={handleCursorChange}
      />

      <main>
        {/* Cover / Hero Area */}
        <HeroCover
          onExploreClick={handleExploreClick}
          onOpenContact={() => setContactModalOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 1 */}
        <MarqueeBanner
          theme="dark"
          text="GRAPHIC DESIGNER • BRANDING • ART DIRECTION • VISUAL DESIGN • PACKAGING • PRINT • LOGOFOLIO • 2026 •"
        />

        {/* About Me Section */}
        <AboutSection
          onOpenContact={() => setContactModalOpen(true)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 2 */}
        <MarqueeBanner
          theme="accent"
          speed="fast"
          reverse={true}
          text="01 LOGOFOLIO • 02 BRANDING • 03 SOCIAL MEDIA • 04 PACKAGING • 05 PRINT MEDIA •"
        />

        {/* SECTION 01: LOGOFOLIO */}
        <LogofolioSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 3 */}
        <MarqueeBanner
          theme="light"
          text="BRAND IDENTITY SYSTEMS • STRATEGY • TYPOGRAPHY • LOGO DESIGN • COLOR SYSTEM •"
        />

        {/* SECTION 02: BRANDING */}
        <BrandingSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 4 */}
        <MarqueeBanner
          theme="dark"
          reverse={true}
          text="STOP THE SCROLL • SOCIAL CAMPAIGNS • INSTAGRAM CAROUSELS • TYPOGRAPHY • DIGITAL POSTERS •"
        />

        {/* SECTION 03: SOCIAL MEDIA DESIGN */}
        <SocialMediaSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 5 */}
        <MarqueeBanner
          theme="light"
          text="PRODUCT PACKAGING • BRAND APPLICATIONS • PRODUCT VISUALS • PACKAGING COLLECTIONS •"
        />

        {/* SECTION 04: PACKAGING DESIGN */}
        <PackagingSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCursorChange={handleCursorChange}
        />

        {/* Marquee Divider 6 */}
        <MarqueeBanner
          theme="accent"
          speed="fast"
          text="PRINT MEDIA • SILKSCREEN POSTERS • EDITORIAL ZINES • HARDCOVER CATALOGUES • LETTERPRESS •"
        />

        {/* SECTION 05: PRINT MEDIA */}
        <PrintMediaSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onCursorChange={handleCursorChange}
        />
      </main>

      {/* Footer / Contact */}
      <Footer
        onOpenContact={() => setContactModalOpen(true)}
        onCursorChange={handleCursorChange}
      />

      {/* Interactive Project Case Study Lightbox / Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Quick Commission Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
