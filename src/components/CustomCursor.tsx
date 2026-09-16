import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface CustomCursorProps {
  cursorText?: string;
  cursorVariant?: 'default' | 'view' | 'link' | 'hidden';
}

export function CustomCursor({ cursorText, cursorVariant = 'default' }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  const isView = cursorVariant === 'view' || !!cursorText;
  const isLink = cursorVariant === 'link';

  return (
    <motion.div
      id="custom-cursor"
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        width: isView ? 88 : isLink ? 48 : 14,
        height: isView ? 88 : isLink ? 48 : 14,
        backgroundColor: isView ? '#FF4D2E' : isLink ? 'rgba(17, 17, 17, 0.15)' : '#FF4D2E',
        mixBlendMode: isView ? 'normal' : isLink ? 'difference' : 'normal',
        border: isLink ? '1px solid #111111' : 'none',
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {isView && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-grotesk text-xs uppercase font-bold tracking-widest text-[#F5F1EA] select-none"
        >
          {cursorText || 'VIEW'}
        </motion.span>
      )}
    </motion.div>
  );
}
