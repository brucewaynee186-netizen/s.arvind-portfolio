export type PortfolioCategory = 
  | 'logofolio'
  | 'branding'
  | 'social'
  | 'packaging'
  | 'print';

export interface ProjectItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  year: string;
  client?: string;
  image: string;
  fallbackGradient?: string;
  aspectRatio?: '1:1' | '4:5' | '16:9' | '3:4' | '9:16';
  size?: 'small' | 'medium' | 'large' | 'featured' | 'wide';
  description: string;
  role?: string;
  deliverables?: string[];
  tags: string[];
  colorPalette?: string[];
  typographySpec?: {
    primaryFont: string;
    secondaryFont: string;
    sampleText?: string;
  };
  mockups?: string[];
  whiteBgShots?: number[];
  imageFit?: 'cover' | 'contain';
  accentColor?: string;
  rotation?: number; // for social/print media playful tilt
}

export interface SectionMetadata {
  id: PortfolioCategory;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}
