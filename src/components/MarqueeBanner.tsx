interface MarqueeBannerProps {
  text?: string;
  theme?: 'dark' | 'light' | 'accent' | 'lime';
  speed?: 'normal' | 'fast';
  reverse?: boolean;
}

export function MarqueeBanner({
  text = 'GRAPHIC DESIGNER • BRANDING • ART DIRECTION • VISUAL DESIGN • PACKAGING • PRINT MEDIA • LOGOFOLIO • 2026 ARCHIVE •',
  theme = 'dark',
  speed = 'normal',
  reverse = false,
}: MarqueeBannerProps) {
  const bgClass =
    theme === 'dark'
      ? 'bg-[#111111] text-[#F5F1EA] border-y border-[#111111]'
      : theme === 'accent'
      ? 'bg-[#FF4D2E] text-[#F5F1EA] border-y border-[#111111]'
      : theme === 'lime'
      ? 'bg-[#D8FF00] text-[#111111] border-y border-[#111111]'
      : 'bg-[#F5F1EA] text-[#111111] border-y border-[#111111]';

  const animationClass = reverse
    ? 'animate-marquee-reverse'
    : speed === 'fast'
    ? 'animate-marquee-fast'
    : 'animate-marquee';

  // Repeat text to make it continuous
  const items = Array(6).fill(text);

  return (
    <div className={`relative overflow-hidden py-3 sm:py-4 select-none ${bgClass}`}>
      <div className={`${animationClass} flex items-center gap-6`}>
        {items.map((item, index) => (
          <span
            key={index}
            className="font-display text-lg sm:text-2xl md:text-3xl tracking-widest uppercase italic whitespace-nowrap px-4"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
