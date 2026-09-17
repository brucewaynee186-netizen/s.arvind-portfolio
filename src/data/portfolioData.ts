import { ProjectItem, SectionMetadata } from '../types';

export const DESIGNER_INFO = {
  name: "S.ARVIND",
  role: "Graphic Designer & Art Director",
  tagline: "BRANDING / DIGITAL / PRINT — 2026",
  location: "Berlin & Worldwide",
  availability: "Available for Q3/Q4 2026 Commissions",
  email: "arvindsuresh70@gmail.com",
  socials: {
    behance: "https://behance.net/sarvind",
    instagram: "https://instagram.com/sarvind.design",
    linkedin: "https://linkedin.com/in/sarvind",
    dribbble: "https://dribbble.com/sarvind"
  },
  bio: "My name is Arvind, and I’m a graphic designer who turns ideas into visual experiences with clarity, character and purpose. I work across branding, digital, social, packaging and print, combining typography, imagery, composition and concept to create work that feels intentional and distinctive. I approach every project as an opportunity to find a visual language that communicates the idea and leaves a lasting impression.",
  capabilities: [
    "LOGOFOLIO",
    "BRANDING",
    "SOCIAL MEDIA DESIGN",
    "PACKAGING DESIGN",
    "PRINT MEDIA"
  ]
};

export const SECTIONS_METADATA: Record<string, SectionMetadata> = {
  logofolio: {
    id: 'logofolio',
    number: '01',
    title: 'LOGOFOLIO',
    subtitle: 'Marks & Signatures',
    description: 'Marks, symbols and visual signatures designed to create memorable identities.'
  },
  branding: {
    id: 'branding',
    number: '02',
    title: 'BRANDING',
    subtitle: 'Identity Systems',
    description: 'Complete visual identities built from strategy, typography, colour and visual systems.'
  },
  social: {
    id: 'social',
    number: '03',
    title: 'SOCIAL MEDIA',
    subtitle: 'Digital Campaigns',
    description: 'Digital campaigns and social content designed to stop the scroll.'
  },
  packaging: {
    id: 'packaging',
    number: '04',
    title: 'PACKAGING',
    subtitle: 'Tactile Systems',
    description: 'Packaging systems that turn products into visual experiences.'
  },
  print: {
    id: 'print',
    number: '05',
    title: 'PRINT MEDIA',
    subtitle: 'Physical Artifacts',
    description: 'Posters, brochures, editorial layouts and printed communication designed for physical spaces.'
  }
};

export const LOGOFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'logo-bloom-beam',
    title: 'Bloom Beam',
    category: 'logofolio',
    categoryLabel: 'Logofolio',
    year: '2026',
    client: 'Urban Farming & Home Gardening',
    image: 'https://i.ibb.co/HLDpvzST/BB.png',
    size: 'large',
    aspectRatio: '1:1',
    description: 'A modern, vibrant brand mark and visual identity crafted for Bloom Beam, focused on urban farming, home gardening, and sustainable botanical systems.',
    tags: ['Urban Farming', 'Home Gardening', 'Brand Mark'],
    colorPalette: ['#0F8442', '#FFFFFF', '#000000'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'BLOOM BEAM // URBAN FARMING & HOME GARDENING'
    },
    mockups: [
      'https://i.ibb.co/HLDpvzST/BB.png',
      'https://i.ibb.co/Z6qqfBvv/BB-variants.png'
    ],
    whiteBgShots: [0]
  },
  {
    id: 'logo-juicy-knot',
    title: 'JUICY KNOT',
    category: 'logofolio',
    categoryLabel: 'Logofolio',
    year: '2026',
    client: 'Café',
    image: 'https://i.ibb.co/1JpGWR3h/pooo.png',
    size: 'medium',
    aspectRatio: '1:1',
    description: 'A playful heart-shaped knot symbol representing love, connection, and togetherness, paired with elegant typography. The vibrant pink color adds a fresh, warm, and inviting café feel.',
    tags: ['Café', 'Heart Knot', 'Handcrafted Lettering'],
    colorPalette: ['#EB225E', '#F285A0', '#FFFFFF'],
    typographySpec: {
      primaryFont: 'Calligraphic / Handwritten Script',
      secondaryFont: 'Syne Extra Bold',
      sampleText: 'JUICY KNOT CAFÉ & ARTISANAL BEVERAGES'
    },
    mockups: [
      'https://i.ibb.co/1JpGWR3h/pooo.png',
      'https://i.ibb.co/KjJnCjPg/jk-variants.png'
    ],
    whiteBgShots: [0]
  },
  {
    id: 'logo-vortex',
    title: 'VORTEX',
    category: 'logofolio',
    categoryLabel: 'Logofolio',
    year: '2026',
    client: 'Sports Brand / Performance Tennis',
    image: 'https://i.ibb.co/wF0NDCwK/vortex.png',
    size: 'small',
    aspectRatio: '1:1',
    description: 'The Vortex logo combines a stylized tennis ball with a bold, aerodynamic wordmark, creating a sense of speed, movement, and precision. Its sharp, dynamic lettering reflects the competitive nature of tennis, while the lime-green ball adds a fresh, energetic sporting identity.',
    tags: ['Sports Brand', 'Tennis', 'Dynamic Wordmark'],
    colorPalette: ['#000000', '#FFFFFF', '#C0D02F'],
    typographySpec: {
      primaryFont: 'Aerodynamic Bold',
      secondaryFont: 'Space Grotesk',
      sampleText: 'VORTEX HIGH PERFORMANCE TENNIS'
    },
    mockups: [
      'https://i.ibb.co/wF0NDCwK/vortex.png',
      'https://i.ibb.co/C5HcF5rN/Untitled-3.png'
    ],
    whiteBgShots: [0]
  },
  {
    id: 'logo-good-swan',
    title: 'GOOD SWAN',
    category: 'logofolio',
    categoryLabel: 'Logofolio',
    year: '2026',
    client: 'Airline Company',
    image: 'https://i.ibb.co/ynWL0h8r/GS.png',
    size: 'small',
    aspectRatio: '1:1',
    description: 'A distinguished airline mark combining the graceful, soaring silhouette of a swan with geometric aerodynamics, evoking safety, precision navigation, and premium commercial aviation for Good Swan Airlines.',
    tags: ['Airline Company', 'Aviation Mark', 'Aerodynamic'],
    colorPalette: ['#005BAC', '#FFB600', '#F7F7F2'],
    typographySpec: {
      primaryFont: 'Cinzel Bold',
      secondaryFont: 'Inter',
      sampleText: 'GOOD SWAN AIRLINES // GLOBAL ROUTES'
    },
    mockups: [
      'https://i.ibb.co/ynWL0h8r/GS.png',
      'https://i.ibb.co/Z6x0cnCm/gs-variants.png'
    ],
    whiteBgShots: [0]
  },
  {
    id: 'logo-edvora',
    title: 'EDVORA',
    category: 'logofolio',
    categoryLabel: 'Logofolio',
    year: '2026',
    client: 'Educational University',
    image: 'https://i.ibb.co/tMDPHz4M/edd-logo.png',
    size: 'small',
    aspectRatio: '1:1',
    description: 'An avant-garde academic identity mark for Edvora Educational University, harmonizing geometric precision with dimensional flow to create a bold, future-forward symbol for modern education and research.',
    tags: ['Educational University', 'Academic Identity', 'Geometric Monogram'],
    colorPalette: ['#032F46', '#FCB514', '#FFFFFF'],
    typographySpec: {
      primaryFont: 'Space Grotesk Bold',
      secondaryFont: 'Inter',
      sampleText: 'EDVORA UNIVERSITY // HIGHER EDUCATION & RESEARCH'
    },
    mockups: [
      'https://i.ibb.co/tMDPHz4M/edd-logo.png',
      'https://i.ibb.co/DHmBZvGd/edd-variants.png'
    ],
    whiteBgShots: [0]
  }
];

export const BRANDING_PROJECTS: ProjectItem[] = [
  {
    id: 'brand-vortex',
    title: 'VORTEX',
    category: 'branding',
    categoryLabel: 'High-Performance Sports Brand Identity',
    year: '2026',
    client: 'Vortex Tennis & Performance Sports',
    image: 'https://i.ibb.co/HDn9rBy7/vortex.png',
    imageFit: 'contain',
    description: 'VORTEX is a high-performance tennis brand built for athletes who push their limits. Its bold identity represents speed, energy, precision, and competitive spirit, while the tennis ball integrated into the “O” connects the logo directly to the sport. The dynamic wordmark and black-and-neon-lime palette create a strong, modern, and athletic visual identity.',
    tags: ['Tennis Brand', 'Sports Identity', 'Athletic Gear', 'Packaging System'],
    colorPalette: ['#000000', '#C0D02F', '#FFFFFF'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'VORTEX // HIGH-PERFORMANCE TENNIS & ATHLETICS'
    },
    mockups: [
      'https://i.ibb.co/n2Kv7Ws/Chat-GPT-Image-Aug-22-2026-05-35-20-AM.png',
      'https://i.ibb.co/JRT1DydR/Chat-GPT-Image-Aug-22-2026-05-06-53-AM.png',
      'https://i.ibb.co/G4sWp8SX/q1q.png',
      'https://i.ibb.co/c0c10RB/Chat-GPT-Image-Aug-22-2026-05-38-38-AM.png',
      'https://i.ibb.co/9mTZScsP/Chat-GPT-Image-Aug-22-2026-05-38-09-AM.png'
    ]
  },
  {
    id: 'brand-bloom-beam',
    title: 'BLOOM BEAM',
    category: 'branding',
    categoryLabel: 'Urban Farming & Home Gardening Brand',
    year: '2026',
    client: 'Bloom Beam – Urban Farming & Home Gardening',
    image: 'https://i.ibb.co/m5kwsXVG/BB.png',
    imageFit: 'contain',
    description: 'A modern, vibrant brand identity system and packaging ecosystem crafted for Bloom Beam. Designed for urban farming and sustainable home gardening, merging fresh botanical energy with contemporary structural design.',
    tags: ['Urban Farming', 'Home Gardening', 'Brand Identity', 'Packaging System'],
    colorPalette: ['#0F8442', '#FFFFFF', '#000000'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'BLOOM BEAM // URBAN FARMING & HOME GARDENING'
    },
    mockups: [
      'https://i.ibb.co/FksBMCcF/Chat-GPT-Image-Aug-22-2026-03-57-57-AM.png',
      'https://i.ibb.co/rjPrzGY/Chat-GPT-Image-Aug-22-2026-03-48-25-AM.png',
      'https://i.ibb.co/xKfp2S3T/Chat-GPT-Image-Aug-22-2026-03-59-57-AM.png',
      'https://i.ibb.co/nNzG62s3/Chat-GPT-Image-Aug-22-2026-04-02-26-AM.png'
    ]
  },
  {
    id: 'brand-good-swan',
    title: 'GOOD SWAN',
    category: 'branding',
    categoryLabel: 'Modern Airline Brand Identity',
    year: '2026',
    client: 'Good Swan Airlines',
    image: 'https://i.ibb.co/fzLZLt9g/GS.png',
    imageFit: 'contain',
    description: 'Good Swan is a modern airline brand focused on safe, comfortable, and reliable travel. Its logo combines a stylized swan with a dynamic shape, representing elegance, smooth journeys, and forward movement, while the blue and golden-yellow colors convey trust, optimism, and energy.',
    tags: ['Airline Brand', 'Aviation Identity', 'Travel & Mobility', 'Visual System'],
    colorPalette: ['#005BAC', '#FFB600', '#F7F7F2'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'GOOD SWAN // SAFE, COMFORTABLE & RELIABLE TRAVEL'
    },
    mockups: [
      'https://i.ibb.co/GfwR3t4Y/Chat-GPT-Image-Aug-24-2026-06-52-30-PM.png',
      'https://i.ibb.co/JwDwxMfv/Chat-GPT-Image-Aug-24-2026-07-11-02-PM.png',
      'https://i.ibb.co/4gCHh9CB/Chat-GPT-Image-Aug-24-2026-05-18-13-PM.png',
      'https://i.ibb.co/0p2qPfjZ/Chat-GPT-Image-Aug-24-2026-06-39-56-PM.png',
      'https://i.ibb.co/SDQmJf3m/Chat-GPT-Image-Aug-24-2026-06-33-03-PM.png'
    ]
  },
  {
    id: 'brand-juicy-knot',
    title: 'JUICY KNOT',
    category: 'branding',
    categoryLabel: 'Brand Identity System',
    year: '2026',
    client: 'Juicy Knot Café',
    image: 'https://i.ibb.co/1JpGWR3h/pooo.png',
    imageFit: 'contain',
    description: 'The Juicy Knot logo features a flowing script-style wordmark paired with a small heart-shaped symbol. The rounded, handwritten lettering gives the logo a warm, friendly, playful, and handcrafted personality, reflecting the cozy atmosphere of a café. The heart element adds a sense of love, care, and connection, suggesting that the café is a welcoming place where food and beverages are made with care.',
    tags: ['Café Brand', 'Handcrafted Identity', 'Script Typography', 'Packaging System'],
    colorPalette: ['#EB225E', '#F285A0', '#FFFFFF'],
    typographySpec: {
      primaryFont: 'Calligraphic / Handwritten Display Script',
      secondaryFont: 'Syne Extra Bold',
      sampleText: 'THE JUICY KNOT CAFÉ & BEVERAGE CO. HANDCRAFTED WITH LOVE'
    },
    mockups: [
      'https://i.ibb.co/CKhY3Wr7/Chat-GPT-Image-Sep-16-2026-01-51-34-PM.png',
      'https://i.ibb.co/4Rt8nbYT/Chat-GPT-Image-Sep-16-2026-02-08-11-PM.png',
      'https://i.ibb.co/LXgMPV2s/Chat-GPT-Image-Aug-22-2026-02-39-06-AM.png',
      'https://i.ibb.co/3YyPfkfT/Chat-GPT-Image-Aug-22-2026-03-04-21-AM.png',
      'https://i.ibb.co/xSyXX1vv/Chat-GPT-Image-Aug-26-2026-11-34-11-PM.png'
    ]
  },
  {
    id: 'brand-edvora',
    title: 'EDVORA',
    category: 'branding',
    categoryLabel: 'Educational University & Academic Brand',
    year: '2026',
    client: 'Edvora Educational University',
    image: 'https://i.ibb.co/tMDPHz4M/edd-logo.png',
    imageFit: 'contain',
    description: 'An avant-garde academic brand identity system designed for Edvora Educational University. Harmonizing geometric precision with dimensional flow to create a bold, future-forward symbol and comprehensive visual system for modern education and research.',
    tags: ['Educational University', 'Academic Identity', 'Visual System', 'Higher Education'],
    colorPalette: ['#032F46', '#FCB514', '#FFFFFF'],
    typographySpec: {
      primaryFont: 'Space Grotesk Bold',
      secondaryFont: 'Space Grotesk',
      sampleText: 'EDVORA UNIVERSITY // HIGHER EDUCATION & RESEARCH'
    },
    mockups: [
      'https://i.ibb.co/nqMMt5h0/1111.png',
      'https://i.ibb.co/cSPm7ycK/22.png',
      'https://i.ibb.co/shsL6pp/Chat-GPT-Image-Aug-25-2026-12-00-05-AM.png',
      'https://i.ibb.co/9mFkC6VH/Chat-GPT-Image-Aug-25-2026-12-51-05-AM.png'
    ]
  }
];

export const SOCIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'social-vortex',
    title: 'VORTEX',
    category: 'social',
    categoryLabel: 'Athletic Campaign & Tournament Posters',
    year: '2026',
    client: 'Vortex Tennis & Performance Sports',
    image: 'https://i.ibb.co/wF0NDCwK/vortex.png',
    imageFit: 'contain',
    aspectRatio: '4:5',
    rotation: -1.8,
    description: 'High-octane sports campaign and dynamic social media poster series for Vortex Tennis. Combining neon-lime aerodynamic graphics, high-impact motion typography, tournament countdown graphics, and athlete spotlight promotional posters.',
    tags: ['Sports Posters', 'Tennis Campaign', 'Motion Typography', 'Reel Graphics', 'Dynamic Feed'],
    colorPalette: ['#000000', '#C0D02F', '#FFFFFF', '#333333'],
    typographySpec: {
      primaryFont: 'Aerodynamic Bold',
      secondaryFont: 'Space Grotesk',
      sampleText: 'VORTEX HIGH PERFORMANCE TENNIS POSTERS 2026'
    },
    mockups: [
      'https://i.ibb.co/ccZpn1b8/creative-04.png',
      'https://i.ibb.co/LX423H74/creative-05.png',
      'https://i.ibb.co/9mhdJvnT/creative03.png',
      'https://i.ibb.co/PGBVfGvg/creative-06-1.png',
      'https://i.ibb.co/ZpMkh1wV/creative-01.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'social-bloom-beam',
    title: 'BLOOM BEAM',
    category: 'social',
    categoryLabel: 'Social Media & Botanical Campaign Posters',
    year: '2026',
    client: 'Urban Farming & Home Gardening',
    image: 'https://i.ibb.co/HLDpvzST/BB.png',
    imageFit: 'contain',
    aspectRatio: '4:5',
    rotation: -1.2,
    description: 'A comprehensive social media campaign rollout and promotional poster series created for Bloom Beam. Features organic botanical compositions, seasonal seed drops, indoor gardening care carousels, and high-contrast typography designed for standout social feed engagement.',
    tags: ['Urban Farming', 'Campaign Posters', 'Botanical Grid', 'Feed Carousels', 'Story Templates'],
    colorPalette: ['#0F8442', '#FFFFFF', '#000000', '#2E7D32'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'BLOOM BEAM // URBAN FARMING & BOTANICAL POSTERS'
    },
    mockups: [
      'https://i.ibb.co/HpYb4Nzm/Chat-GPT-Image-Sep-6-2026-12-14-56-AM.png',
      'https://i.ibb.co/hG4KQNw/Chat-GPT-Image-Sep-6-2026-12-15-01-AM.png',
      'https://i.ibb.co/b5tp6LqH/bb-c-3.png',
      'https://i.ibb.co/fGyzWSx5/bb-c4.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'social-juicy-knot',
    title: 'JUICY KNOT',
    category: 'social',
    categoryLabel: 'Café Social Media & Promotional Posters',
    year: '2026',
    client: 'Juicy Knot Café',
    image: 'https://i.ibb.co/1JpGWR3h/pooo.png',
    imageFit: 'contain',
    aspectRatio: '4:5',
    rotation: 1.5,
    description: 'Vibrant, warm, and playful social media design suite crafted for Juicy Knot Café. Includes limited-edition artisanal beverage launch posters, weekly special menu cards, animated calligraphic story layouts, and mouthwatering feed carousels.',
    tags: ['Café Marketing', 'Poster Design', 'Social Media Kit', 'Menu Stories', 'Handcrafted Script'],
    colorPalette: ['#EB225E', '#F285A0', '#FFFFFF', '#111111'],
    typographySpec: {
      primaryFont: 'Calligraphic Display Script',
      secondaryFont: 'Syne Extra Bold',
      sampleText: 'THE JUICY KNOT // FRESH CAFÉ POSTERS & SOCIAL DROPS'
    },
    mockups: [
      'https://i.ibb.co/mVqrjHZC/wqwq.png',
      'https://i.ibb.co/Dfgcf9zL/Chat-GPT-Image-Sep-1-2026-02-31-15-AM.png',
      'https://i.ibb.co/nqJVbp71/111.png',
      'https://i.ibb.co/yL81wSf/qwqw.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'social-good-swan',
    title: 'GOOD SWAN',
    category: 'social',
    categoryLabel: 'Aviation Travel Posters & Social Ads',
    year: '2026',
    client: 'Good Swan Airlines',
    image: 'https://i.ibb.co/ynWL0h8r/GS.png',
    imageFit: 'contain',
    aspectRatio: '4:5',
    rotation: 1.2,
    description: 'Prestigious aviation social media suite and travel destination poster collection for Good Swan Airlines. Featuring route launch announcements, luxury cabin features, inflight service stories, and seasonal destination guide posters.',
    tags: ['Airline Posters', 'Aviation Social', 'Destination Guides', 'Flight Deals', 'Luxury Travel'],
    colorPalette: ['#005BAC', '#FFB600', '#F7F7F2', '#111111'],
    typographySpec: {
      primaryFont: 'Cinzel Bold',
      secondaryFont: 'Inter',
      sampleText: 'GOOD SWAN AIRLINES // GLOBAL DESTINATION POSTERS'
    },
    mockups: [
      'https://i.ibb.co/xtrcvKcw/c-1.png',
      'https://i.ibb.co/KcqSQyZw/c-4-1.png',
      'https://i.ibb.co/tTznxQcs/c-3-1.png',
      'https://i.ibb.co/nqCSTffQ/gs-c-2-1.png',
      'https://i.ibb.co/MyzxrdfJ/gsc-4.png',
      'https://i.ibb.co/VY00ynJM/gs-c-5.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'social-edvora',
    title: 'EDVORA',
    category: 'social',
    categoryLabel: 'University Campaign & Academic Posters',
    year: '2026',
    client: 'Edvora Educational University',
    image: 'https://i.ibb.co/tMDPHz4M/edd-logo.png',
    imageFit: 'contain',
    aspectRatio: '4:5',
    rotation: -1.0,
    description: 'Academic campaign posters and digital social kit designed for Edvora Educational University. Highlights global research symposiums, student admissions 2026, campus innovation labs, and modern intellectual storytelling.',
    tags: ['University Posters', 'Academic Social Kit', 'Admissions Campaign', 'Event Posters', 'Research Showcase'],
    colorPalette: ['#032F46', '#FCB514', '#FFFFFF', '#0A1C28'],
    typographySpec: {
      primaryFont: 'Space Grotesk Bold',
      secondaryFont: 'Inter',
      sampleText: 'EDVORA UNIVERSITY // ACADEMIC & RESEARCH POSTERS'
    },
    mockups: [
      'https://i.ibb.co/twzJZ01q/Chat-GPT-Image-Sep-6-2026-01-03-27-AM.png',
      'https://i.ibb.co/4ZmsbSwc/Chat-GPT-Image-Sep-6-2026-01-01-43-AM.png',
      'https://i.ibb.co/cXSSP24v/Chat-GPT-Image-Sep-6-2026-01-05-12-AM.png',
      'https://i.ibb.co/cPVWVLk/Chat-GPT-Image-Sep-7-2026-06-49-12-PM.png',
      'https://i.ibb.co/39myvzdr/Chat-GPT-Image-Sep-7-2026-07-22-05-PM.png'
    ],
    whiteBgShots: []
  }
];

export const PACKAGING_PROJECTS: ProjectItem[] = [
  {
    id: 'pack-vortex',
    title: 'VORTEX',
    category: 'packaging',
    categoryLabel: 'Athletic Equipment & Tennis Canister Packaging',
    year: '2026',
    client: 'Vortex Tennis & Performance Sports',
    image: 'https://i.ibb.co/wF0NDCwK/vortex.png',
    imageFit: 'contain',
    aspectRatio: '16:9',
    description: 'Pressurized neon-accented tennis ball canisters, rigid magnetic racket display cartons, and athletic grip tape blister packs engineered for high-performance sports retail.',
    tags: ['Tennis Canisters', 'Racket Box', 'Sports Packaging', 'Matte UV', 'Dieline 1:1'],
    colorPalette: ['#000000', '#C0D02F', '#FFFFFF', '#333333'],
    typographySpec: {
      primaryFont: 'Aerodynamic Bold',
      secondaryFont: 'Space Grotesk',
      sampleText: 'VORTEX // HIGH PERFORMANCE EQUIPMENT PACKAGING'
    },
    mockups: [
      'https://i.ibb.co/ZpD127Qy/vxcc.png',
      'https://i.ibb.co/39qwnY6c/vx1.png',
      'https://i.ibb.co/4ZVSkJFd/vx3.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'pack-bloom-beam',
    title: 'BLOOM BEAM',
    category: 'packaging',
    categoryLabel: 'Botanical Seed & Home Gardening Packaging System',
    year: '2026',
    client: 'Bloom Beam – Urban Farming & Home Gardening',
    image: 'https://i.ibb.co/HLDpvzST/BB.png',
    imageFit: 'contain',
    aspectRatio: '16:9',
    description: 'Eco-friendly seed packet envelopes, organic soil blend cartons, and biodegradable seedling packaging tubes merging botanical green aesthetics with functional gardening dielines.',
    tags: ['Seed Packets', 'Eco Kraft Box', 'Botanical Print', 'Biodegradable Tubes', 'Soy Inks'],
    colorPalette: ['#0F8442', '#FFFFFF', '#000000', '#2E7D32'],
    typographySpec: {
      primaryFont: 'Archivo Black',
      secondaryFont: 'Space Grotesk',
      sampleText: 'BLOOM BEAM // BOTANICAL SEED & CARTON PACKS'
    },
    mockups: [
      'https://i.ibb.co/SX86S5Hr/bb-p2.png',
      'https://i.ibb.co/rKVLDnbF/bb-p1.png',
      'https://i.ibb.co/Pvv0cD0P/Whats-App-Image-2026-09-08-at-7-38-15-PM.jpg'
    ],
    whiteBgShots: []
  },
  {
    id: 'pack-juicy-knot',
    title: 'JUICY KNOT',
    category: 'packaging',
    categoryLabel: 'Artisanal Café & Beverage Packaging Suite',
    year: '2026',
    client: 'Juicy Knot Café',
    image: 'https://i.ibb.co/1JpGWR3h/pooo.png',
    imageFit: 'contain',
    aspectRatio: '16:9',
    description: 'Custom coffee cups, takeaway pastry boxes, kraft carry bags, and embossed beverage sleeves designed for Juicy Knot Café with warm playful lettering and heart motifs.',
    tags: ['Café Packaging', 'Beverage Sleeves', 'Takeaway Box', 'Die-Cut Kraft', 'Cup Sleeves'],
    colorPalette: ['#EB225E', '#F285A0', '#FFFFFF', '#111111'],
    typographySpec: {
      primaryFont: 'Calligraphic Display Script',
      secondaryFont: 'Syne Extra Bold',
      sampleText: 'THE JUICY KNOT // FRESH CAFÉ PACKAGING & CUPS'
    },
    mockups: [
      'https://i.ibb.co/Q3q9zgcR/Chat-GPT-Image-Sep-13-2026-12-07-22-PM.png',
      'https://i.ibb.co/mCJPDTdy/Chat-GPT-Image-Sep-13-2026-12-07-46-PM.png',
      'https://i.ibb.co/pjDW580G/Chat-GPT-Image-Sep-13-2026-12-45-59-PM.png',
      'https://i.ibb.co/7tKJxDL6/www.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'pack-good-swan',
    title: 'GOOD SWAN',
    category: 'packaging',
    categoryLabel: 'Inflight Hospitality & Aviation Travel Packaging Suite',
    year: '2026',
    client: 'Good Swan Airlines',
    image: 'https://i.ibb.co/ynWL0h8r/GS.png',
    imageFit: 'contain',
    aspectRatio: '16:9',
    description: 'Premium inflight meal packaging cartons, luxury travel amenity kits, boarding ticket sleeves, and embossed luggage tag packaging celebrating elegant aviation hospitality.',
    tags: ['Inflight Packs', 'Amenity Kits', 'Aviation Packaging', 'Gold Foil', 'Travel Sleeves'],
    colorPalette: ['#005BAC', '#FFB600', '#F7F7F2', '#111111'],
    typographySpec: {
      primaryFont: 'Cinzel Bold',
      secondaryFont: 'Inter',
      sampleText: 'GOOD SWAN // INFLIGHT LUXURY PACKAGING & KITS'
    },
    mockups: [
      'https://i.ibb.co/r2jj9Thf/gs-p1.png',
      'https://i.ibb.co/wrrKChLk/gs-p.png',
      'https://i.ibb.co/0yyhzmKh/gs-p2.png'
    ],
    whiteBgShots: []
  },
  {
    id: 'pack-edvora',
    title: 'EDVORA',
    category: 'packaging',
    categoryLabel: 'Student Admissions Kit & Academic Packaging System',
    year: '2026',
    client: 'Edvora Educational University',
    image: 'https://i.ibb.co/tMDPHz4M/edd-logo.png',
    imageFit: 'contain',
    aspectRatio: '16:9',
    description: 'Rigid magnetic student orientation welcome boxes, certificate cylinder packaging, academic symposium publication slipcases, and campus merchandise packaging.',
    tags: ['Admissions Kit', 'Rigid Box', 'Certificate Cylinder', 'Velvet Laminate', 'Slipcase'],
    colorPalette: ['#032F46', '#FCB514', '#FFFFFF', '#0A1C28'],
    typographySpec: {
      primaryFont: 'Space Grotesk Bold',
      secondaryFont: 'Inter',
      sampleText: 'EDVORA UNIVERSITY // STUDENT ADMISSION PACKAGING'
    },
    mockups: [
      'https://i.ibb.co/23h5Q0hs/Chat-GPT-Image-Sep-14-2026-06-35-59-PM.png',
      'https://i.ibb.co/G31VTx1c/Chat-GPT-Image-Sep-14-2026-07-11-13-PM.png',
      'https://i.ibb.co/nNg8F0M2/Chat-GPT-Image-Sep-15-2026-12-18-38-AM.png'
    ],
    whiteBgShots: []
  }
];

export const PRINT_PROJECTS: ProjectItem[] = [
  {
    id: 'print-01',
    title: 'EDITORIAL SPREAD // ISSUE 01',
    category: 'print',
    categoryLabel: 'Editorial Layout',
    year: '2026',
    image: '/images/print/print_1.png',
    description: 'Modular typographic spread with strict baseline alignment, contrasting editorial headlines, and rhythmic negative space.',
    tags: ['Editorial', 'Typography', 'Grid System']
  },
  {
    id: 'print-02',
    title: 'PANORAMIC GATEFOLD BROCHURE',
    category: 'print',
    categoryLabel: 'Gatefold Print',
    year: '2026',
    image: '/images/print/print_2.png',
    description: 'Panoramic horizontal gatefold layout printed on heavy uncoated stock with tactile spot UV and blind deboss detailing.',
    tags: ['Brochure', 'Gatefold', 'Spot UV']
  },
  {
    id: 'print-03',
    title: 'EXHIBITION LOOKBOOK SPREAD',
    category: 'print',
    categoryLabel: 'Exhibition Catalogue',
    year: '2026',
    image: '/images/print/print_3.png',
    description: 'Double-page horizontal catalogue spread highlighting minimal geometric composition, Swiss typography, and high-contrast imagery.',
    tags: ['Lookbook', 'Offset Litho', 'Swiss Grid']
  },
  {
    id: 'print-04',
    title: 'CONTEMPORARY ZINE SERIES',
    category: 'print',
    categoryLabel: 'Independent Publication',
    year: '2026',
    image: '/images/print/print_4.png',
    description: 'Hand-bound publication exploring brutalist graphic forms, experimental page breaks, and vivid fluorescent spot inks.',
    tags: ['Publication', 'Zine', 'Experimental']
  },
  {
    id: 'print-05',
    title: 'IDENTITY COLLATERAL SUITE',
    category: 'print',
    categoryLabel: 'Corporate Stationery',
    year: '2026',
    image: '/images/print/print_5.png',
    description: 'Comprehensive printed stationery system featuring letterheads, tri-fold brochures, and textured cotton stock envelopes.',
    tags: ['Stationery', 'Letterpress', 'Brand Collateral']
  },
  {
    id: 'print-06',
    title: 'SILKSCREEN POSTER // B1 FORMAT',
    category: 'print',
    categoryLabel: 'Silkscreen Exhibition Poster',
    year: '2026',
    image: '/images/print/print_6.png',
    description: 'Monumental vertical exhibition poster screen-printed on 300gsm recycled Munken paper with ultra-dense carbon black and vivid accent pigment.',
    tags: ['Silkscreen', 'B1 Poster', 'Munken 300gsm']
  },
  {
    id: 'print-07',
    title: 'TYPOGRAPHIC CULTURE POSTER',
    category: 'print',
    categoryLabel: 'Typographic Poster Print',
    year: '2026',
    image: '/images/print/print_7.png',
    description: 'Vertical typographic print balancing disciplined column structures with fluid kinetic type distortion.',
    tags: ['Typo Poster', 'Screenprint', 'Archive Print']
  },
  {
    id: 'print-08',
    title: 'RECORD SLEEVE & PACKAGING',
    category: 'print',
    categoryLabel: 'Vinyl Jacket & Sleeve',
    year: '2026',
    image: '/images/print/print_8.png',
    description: 'Heavyweight matte cardboard LP packaging with custom inner dust sleeve, embossed titles, and metallic ink detailing.',
    tags: ['Vinyl Sleeve', 'Art Direction', 'Custom Die-Cut']
  },
  {
    id: 'print-09',
    title: 'BRAND MONOGRAPH PUBLICATION',
    category: 'print',
    categoryLabel: 'Hardcover Monograph',
    year: '2026',
    image: '/images/print/print_9.png',
    description: 'Clothbound hardcover monograph with foil-blocked spine typography and high-definition duotone printed interior folios.',
    tags: ['Monograph', 'Clothbound', 'Foil Stamping']
  },
  {
    id: 'print-10',
    title: 'PANORAMIC BRAND MANUAL',
    category: 'print',
    categoryLabel: 'Brand Guidelines Document',
    year: '2026',
    image: '/images/print/print_10.png',
    description: 'Landscape brand architecture manual bound with matte black wire-O comb, featuring color-calibrated Pantone chip samples.',
    tags: ['Brand Manual', 'Wire-O Bound', 'Pantone System']
  },
  {
    id: 'print-11',
    title: 'COMMUNICATION SUITE & FOLDERS',
    category: 'print',
    categoryLabel: 'Die-Cut Pocket Folders',
    year: '2026',
    image: '/images/print/print_11.png',
    description: 'Custom die-cut pocket presentation folders with business card slits, blind embossed seal, and matching saddle-stitched pamphlets.',
    tags: ['Die-Cut Folders', 'Embossed', 'Print Suite']
  }
];

export const ALL_PROJECTS: ProjectItem[] = [
  ...LOGOFOLIO_PROJECTS,
  ...BRANDING_PROJECTS,
  ...SOCIAL_PROJECTS,
  ...PACKAGING_PROJECTS,
  ...PRINT_PROJECTS
];
