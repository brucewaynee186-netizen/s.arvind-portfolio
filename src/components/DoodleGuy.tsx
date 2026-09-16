import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Zap } from 'lucide-react';

interface DoodleGuyProps {
  onOpenContact?: () => void;
  onCursorChange?: (variant: 'default' | 'view' | 'link', text?: string) => void;
}

export function DoodleGuy({ onOpenContact, onCursorChange }: DoodleGuyProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-end cursor-pointer group select-none h-full"
      onClick={onOpenContact}
      onMouseEnter={() => {
        setIsHovered(true);
        onCursorChange?.('view', 'LET\'S TALK');
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onCursorChange?.('default');
      }}
    >
      {/* Floating Interactive Hype Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -top-7 sm:-top-9 -left-8 sm:-left-16 z-30 bg-[#D8FF00] text-[#111111] border-2 border-[#111111] px-3.5 py-1.5 font-display text-[11px] sm:text-xs tracking-wider uppercase shadow-[3px_3px_0px_#111111] -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-200"
      >
        <span className="flex items-center gap-1.5 font-bold">
          <Zap size={13} className="text-[#FF4D2E] fill-[#FF4D2E]" /> S.ARVIND // GRAPHIC DESIGNER
          <ArrowUpRight size={13} className="text-[#111111]" />
        </span>
        {/* Badge Tail */}
        <div className="absolute -bottom-2 right-6 w-3 h-3 bg-[#D8FF00] border-r-2 border-b-2 border-[#111111] rotate-45" />
      </motion.div>

      {/* Floating Graphic Doodles around head */}
      <div
        className="absolute top-2 -right-4 sm:-right-8 text-[#FF4D2E] animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4D2E" stroke="#111111" strokeWidth="1.5">
          <path d="M12 0L15 8L23 12L15 16L12 24L9 16L1 12L9 8Z" />
        </svg>
      </div>

      <div className="absolute top-24 -left-7 text-[#111111] opacity-70">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
        </svg>
      </div>

      <div className="absolute top-1/2 -right-6 text-[#D8FF00]">
        <svg width="22" height="22" viewBox="0 0 30 30" fill="#D8FF00" stroke="#111111" strokeWidth="2">
          <polygon points="15,3 27,27 3,27" />
        </svg>
      </div>

      {/* Full-Height Ultra-Cool Designer Character Vector */}
      <div className="relative h-[410px] sm:h-[500px] md:h-[560px] lg:h-[640px] xl:h-[680px] w-auto aspect-[270/550] flex items-end justify-center">
        <svg
          viewBox="0 0 270 550"
          className="w-full h-full object-contain drop-shadow-[10px_10px_0px_#111111] transition-transform duration-300 group-hover:scale-[1.015]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floor Contact Ground Shadow */}
          <ellipse
            cx="135"
            cy="536"
            rx="95"
            ry="11"
            fill="#111111"
            opacity="0.3"
          />

          {/* CHARACTER BASE GROUP */}
          <g className="origin-bottom">

            {/* LOWER BODY: BAGGY STREETWEAR CARGO PANTS */}
            <g id="cargo-pants">
              {/* Left Leg (Baggy Parachute Fit with hanging tactical strap) */}
              <path
                d="M 92 280 C 88 340, 72 410, 78 472 L 118 474 C 122 410, 126 340, 128 285 Z"
                fill="#161616"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Cargo 3D Box Pocket Left */}
              <rect x="74" y="340" width="30" height="38" fill="#222222" stroke="#111111" strokeWidth="2.5" rx="3" />
              <rect x="72" y="336" width="34" height="10" fill="#111111" stroke="#111111" strokeWidth="2" rx="2" />
              <rect x="84" y="356" width="10" height="6" fill="#D8FF00" stroke="#111111" strokeWidth="1" />
              {/* Hanging Nylon Utility Strap */}
              <path
                d="M 76 360 C 60 400, 68 440, 84 450"
                stroke="#FF4D2E"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="80" y="446" width="7" height="9" fill="#111111" rx="1" />
              {/* Pant Leg Cuff with cinched elastic */}
              <rect x="76" y="466" width="44" height="10" fill="#111111" stroke="#111111" strokeWidth="2.5" rx="2" />

              {/* Right Leg (Relaxed Swagger Stance) */}
              <path
                d="M 134 285 C 138 340, 142 410, 148 468 L 188 466 C 182 410, 172 340, 168 280 Z"
                fill="#1E1E1E"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Cargo 3D Box Pocket Right */}
              <rect x="150" y="330" width="32" height="42" fill="#282828" stroke="#111111" strokeWidth="2.5" rx="3" />
              <rect x="148" y="326" width="36" height="10" fill="#111111" stroke="#111111" strokeWidth="2" rx="2" />
              {/* Warning Tape Decal on Pocket */}
              <line x1="152" y1="352" x2="178" y2="352" stroke="#D8FF00" strokeWidth="3" strokeDasharray="4 2" />
              {/* Fold Creases */}
              <path d="M 148 400 Q 164 406 178 398" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 146 430 Q 162 436 182 426" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
              {/* Cinched Leg Cuff */}
              <rect x="144" y="462" width="46" height="10" fill="#111111" stroke="#111111" strokeWidth="2.5" rx="2" />
            </g>

            {/* CHUNKY HYPE SNEAKERS (Neo-Brutalist Architectural Soles) */}
            <g id="sneakers">
              {/* Left Sneaker */}
              <g id="left-kicks">
                <path
                  d="M 60 472 L 120 472 L 128 506 L 128 526 L 44 526 L 40 510 L 48 482 Z"
                  fill="#FFFFFF"
                  stroke="#111111"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Electric Lime geometric midfoot cage */}
                <path d="M 54 496 L 76 476 L 118 498 L 114 516 L 56 516 Z" fill="#D8FF00" stroke="#111111" strokeWidth="2.5" />
                {/* Hot Coral heel wedge */}
                <path d="M 104 476 L 124 488 L 126 516 L 108 516 Z" fill="#FF4D2E" stroke="#111111" strokeWidth="2" />
                {/* Black rubber toe bumper */}
                <path d="M 40 510 L 62 510 L 58 526 L 44 526 Z" fill="#111111" />
                {/* Mega Platform Lug Sole with tread notches */}
                <rect x="38" y="526" width="92" height="13" fill="#111111" stroke="#111111" strokeWidth="2.5" rx="2" />
                <line x1="46" y1="532" x2="124" y2="532" stroke="#FF4D2E" strokeWidth="2.5" />
                {/* Chunky Ropes / Tech Laces */}
                <line x1="68" y1="480" x2="88" y2="480" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                <line x1="66" y1="488" x2="92" y2="488" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Right Sneaker */}
              <g id="right-kicks">
                <path
                  d="M 142 468 L 188 466 L 214 488 L 212 526 L 136 526 L 132 500 Z"
                  fill="#FFFFFF"
                  stroke="#111111"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Hot Coral dynamic swoosh cage */}
                <path d="M 146 488 C 166 474, 188 480, 204 500 L 198 516 L 142 516 Z" fill="#FF4D2E" stroke="#111111" strokeWidth="2.5" />
                {/* Lime Heel Tab */}
                <path d="M 134 472 L 148 472 L 144 502 L 132 502 Z" fill="#D8FF00" stroke="#111111" strokeWidth="2" />
                {/* Black toe shield */}
                <path d="M 192 496 L 214 488 L 212 526 L 190 526 Z" fill="#111111" />
                {/* Mega Sole */}
                <rect x="130" y="526" width="86" height="13" fill="#111111" stroke="#111111" strokeWidth="2.5" rx="2" />
                <line x1="138" y1="532" x2="210" y2="532" stroke="#D8FF00" strokeWidth="2.5" />
                {/* Tech Lacing */}
                <line x1="156" y1="476" x2="180" y2="476" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                <line x1="154" y1="486" x2="184" y2="486" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
              </g>
            </g>

            {/* UPPER BODY: OVERSIZED TECHWEAR HOODIE & CYBER BOMBER JACKET */}
            <g id="jacket-and-torso">
              {/* Inner Heavyweight Oversized Tee (Clean Off-White) */}
              <path
                d="M 110 135 L 160 135 L 156 260 L 114 260 Z"
                fill="#FFFDF9"
                stroke="#111111"
                strokeWidth="3"
              />
              {/* Bold Graphic Print on Tee: "2026 // VECTOR" */}
              <rect x="122" y="180" width="28" height="8" fill="#111111" rx="1" />
              <rect x="124" y="192" width="24" height="4" fill="#FF4D2E" />

              {/* Oversized Technical Bomber Jacket in Obsidian Black */}
              <path
                d="M 68 138 L 198 138 L 192 292 L 72 292 Z"
                fill="#111111"
                stroke="#111111"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* High Stand Collar (Cyber/Streetwear Style) */}
              <path
                d="M 102 125 L 168 125 L 164 148 L 106 148 Z"
                fill="#1C1C1C"
                stroke="#111111"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <line x1="135" y1="125" x2="135" y2="148" stroke="#D8FF00" strokeWidth="3" />

              {/* Heavy duty metal center zipper with neon pull-cord */}
              <line x1="135" y1="148" x2="135" y2="292" stroke="#FFFDF9" strokeWidth="3.5" strokeDasharray="8 4" />
              <rect x="132" y="160" width="6" height="14" fill="#D8FF00" stroke="#111111" strokeWidth="1.5" rx="1" />

              {/* Tactical Crossbody Webbing Harness */}
              <path
                d="M 82 140 L 186 280"
                stroke="#D8FF00"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 82 140 L 186 280"
                stroke="#111111"
                strokeWidth="2.5"
              />
              {/* Metal Carabiner / Quick Release Buckle */}
              <rect x="128" y="202" width="16" height="18" fill="#333333" stroke="#111111" strokeWidth="2" rx="3" />
              <circle cx="136" cy="211" r="3" fill="#FF4D2E" />

              {/* High-Vis Sleeve Patch Right */}
              <rect x="162" y="170" width="28" height="24" fill="#FF4D2E" stroke="#111111" strokeWidth="2" rx="2" />
              <rect x="166" y="174" width="20" height="6" fill="#FFFDF9" stroke="#111111" strokeWidth="1" />
              <text x="168" y="190" fill="#FFFDF9" fontSize="6" fontWeight="bold" fontFamily="monospace">LAB</text>

              {/* Bottom Ribbed Hem */}
              <rect x="72" y="286" width="120" height="14" fill="#181818" stroke="#111111" strokeWidth="2.5" rx="2" />
              <line x1="76" y1="293" x2="188" y2="293" stroke="#333333" strokeWidth="2" />
            </g>

            {/* LEFT ARM: HOLDING SLEEK PRO STYLUS & TABLET */}
            <g id="left-arm">
              {/* Baggy Bomber Sleeve */}
              <path
                d="M 68 138 L 36 210 L 66 226 L 90 162 Z"
                fill="#111111"
                stroke="#111111"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Sleeve Shirring / Gathering details */}
              <path d="M 50 170 Q 64 176 78 168" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 44 195 Q 58 202 72 192" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
              {/* Sleeve Cuff */}
              <rect x="34" y="206" width="34" height="10" fill="#222222" stroke="#111111" strokeWidth="2" rx="2" />

              {/* Forearm */}
              <path
                d="M 44 214 L 68 266 L 92 254"
                fill="#F5EFE6"
                stroke="#111111"
                strokeWidth="3.5"
              />
              {/* Sleek Matte Cyber Tablet / Portfolio Slate */}
              <rect
                x="30"
                y="222"
                width="44"
                height="62"
                fill="#1C1C1C"
                stroke="#111111"
                strokeWidth="3.5"
                rx="4"
                transform="rotate(18 30 222)"
              />
              {/* Ultra-Bright Neon OLED Display glowing lime */}
              <rect
                x="36"
                y="230"
                width="32"
                height="48"
                fill="#D8FF00"
                stroke="#111111"
                strokeWidth="1.5"
                rx="2"
                transform="rotate(18 36 230)"
              />
              {/* Vector Bezier Pen Art on screen */}
              <path
                d="M 44 250 Q 52 235 62 264"
                stroke="#111111"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="52" cy="245" r="3" fill="#FF4D2E" stroke="#111111" strokeWidth="1" />
              <line x1="44" y1="240" x2="60" y2="240" stroke="#111111" strokeWidth="2" />

              {/* Hand with relaxed grip */}
              <circle cx="70" cy="270" r="9.5" fill="#F5EFE6" stroke="#111111" strokeWidth="3" />
              {/* Chunky Silver Signet Ring on index */}
              <rect x="68" y="266" width="5" height="4" fill="#D8FF00" stroke="#111111" strokeWidth="1" rx="1" />
            </g>

            {/* RIGHT ARM: RELAXED COOL POCKET STANCE WITH SMARTWATCH */}
            <g
              id="right-arm"
              className={isHovered ? 'animate-pulse origin-top-left' : ''}
            >
              {/* Baggy Bomber Sleeve */}
              <path
                d="M 198 138 L 230 208 L 202 224 L 176 162 Z"
                fill="#111111"
                stroke="#111111"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Sleeve Shirring */}
              <path d="M 188 170 Q 202 176 216 168" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 194 195 Q 208 202 222 192" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
              {/* Sleeve Cuff */}
              <rect x="198" y="206" width="34" height="10" fill="#222222" stroke="#111111" strokeWidth="2" rx="2" />

              {/* Forearm entering jacket pocket */}
              <path
                d="M 224 208 L 194 268 L 180 258"
                fill="#F5EFE6"
                stroke="#111111"
                strokeWidth="3.5"
              />
              {/* Tactical Pocket Welded Seam with Coral Rivet */}
              <rect x="174" y="256" width="32" height="9" fill="#282828" stroke="#111111" strokeWidth="2.5" rx="1" />
              <circle cx="178" cy="260" r="2.5" fill="#FF4D2E" stroke="#111111" strokeWidth="1" />

              {/* Chunky Cyber Wristwatch (G-Shock / Smartwatch) */}
              <rect x="202" y="238" width="10" height="14" fill="#111111" stroke="#111111" strokeWidth="1.5" rx="3" transform="rotate(-15 202 238)" />
              <circle cx="207" cy="245" r="3" fill="#D8FF00" />
            </g>

            {/* STUDIO OVER-EAR HEADPHONES RESTING ON NECK */}
            <g id="dj-headphones">
              {/* Headphone Padded Band (Curving around back of neck) */}
              <path
                d="M 108 122 Q 135 136 162 122"
                stroke="#111111"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 108 122 Q 135 136 162 122"
                stroke="#D8FF00"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Left Large Cushioned Ear Cup */}
              <rect x="100" y="108" width="16" height="26" fill="#222222" stroke="#111111" strokeWidth="2.5" rx="8" />
              <circle cx="108" cy="121" r="4" fill="#FF4D2E" stroke="#111111" strokeWidth="1" />
              {/* Right Large Cushioned Ear Cup */}
              <rect x="154" y="108" width="16" height="26" fill="#222222" stroke="#111111" strokeWidth="2.5" rx="8" />
              <circle cx="162" cy="121" r="4" fill="#FF4D2E" stroke="#111111" strokeWidth="1" />
            </g>

            {/* HEAD & FACE (Sharp, handsome, effortlessly cool aesthetic) */}
            <g id="head" className="group-hover:-translate-y-1 transition-transform duration-200">
              {/* Defined Neck */}
              <rect x="124" y="110" width="22" height="24" fill="#F5EFE6" stroke="#111111" strokeWidth="3" />
              {/* Jaw Shadow */}
              <path d="M 124 124 L 146 124 L 140 132 L 124 132 Z" fill="#E2D7C7" />

              {/* Angular Defined Jaw & Chin */}
              <path
                d="M 114 74 C 114 52, 156 52, 156 74 L 156 100 C 156 118, 144 126, 135 126 C 126 126, 114 118, 114 100 Z"
                fill="#F5EFE6"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              {/* Ears */}
              <circle cx="111" cy="92" r="7" fill="#F5EFE6" stroke="#111111" strokeWidth="2.5" />
              <circle cx="159" cy="92" r="7" fill="#F5EFE6" stroke="#111111" strokeWidth="2.5" />
              {/* Black Dangle Earring Left */}
              <circle cx="109" cy="96" r="3.5" fill="none" stroke="#111111" strokeWidth="2" />
              <line x1="109" y1="100" x2="109" y2="106" stroke="#D8FF00" strokeWidth="2" strokeLinecap="round" />

              {/* COOL MESSY TEXTURED STREETWEAR HAIR (Voluminous layers with neon streaks) */}
              <g id="hair">
                {/* Main Hair Silhouette */}
                <path
                  d="M 108 76 C 104 38, 164 36, 162 76 L 166 84 C 158 72, 148 68, 135 68 C 122 68, 112 72, 106 84 Z"
                  fill="#111111"
                  stroke="#111111"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Spiky Textured Bangs falling forward */}
                <path
                  d="M 106 72 L 120 86 L 124 74 L 138 90 L 144 74 L 156 86 L 162 72 C 156 42, 112 42, 106 72 Z"
                  fill="#111111"
                />
                {/* Electric Lime Neon Hair Highlights */}
                <path
                  d="M 126 48 Q 140 50 150 62"
                  stroke="#D8FF00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 112 58 Q 120 62 124 72"
                  stroke="#FF4D2E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>

              {/* FUTURISTIC CYBERPUNK / HIGH-FASHION SHADES */}
              <g id="sunglasses">
                {/* Left Lens (Sharp Octagonal Frame) */}
                <polygon
                  points="114,84 130,84 132,98 126,102 114,100 112,90"
                  fill="#111111"
                  stroke="#111111"
                  strokeWidth="2.5"
                />
                {/* Right Lens */}
                <polygon
                  points="138,84 154,84 156,90 154,100 142,102 136,98"
                  fill="#111111"
                  stroke="#111111"
                  strokeWidth="2.5"
                />
                {/* Futuristic Bridge bar across */}
                <line x1="130" y1="88" x2="138" y2="88" stroke="#111111" strokeWidth="3" />
                <line x1="112" y1="86" x2="156" y2="86" stroke="#D8FF00" strokeWidth="1.5" />

                {/* Iridescent Mirror Glare Reflection (Coral & Lime gradient lines) */}
                <line x1="116" y1="88" x2="124" y2="98" stroke="#FF4D2E" strokeWidth="2" strokeLinecap="round" />
                <line x1="120" y1="88" x2="128" y2="98" stroke="#FFFDF9" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="140" y1="88" x2="148" y2="98" stroke="#FF4D2E" strokeWidth="2" strokeLinecap="round" />
                <line x1="144" y1="88" x2="152" y2="98" stroke="#FFFDF9" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Strong Bold Eyebrows */}
              <line x1="114" y1="80" x2="130" y2="82" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
              <line x1="138" y1="82" x2="154" y2="80" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

              {/* Sharp Sculpted Nose */}
              <path d="M 133 94 L 136 104 L 130 106" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Charismatic Confident Smirk */}
              <path
                d="M 126 114 Q 134 120 144 113"
                stroke="#111111"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <line x1="144" y1="113" x2="148" y2="110" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Status Pill */}
      <div className="absolute bottom-2 right-0 sm:right-2 bg-[#111111] text-[#F5F1EA] px-3 py-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#111111] shadow-[3px_3px_0px_#FF4D2E] rotate-1 group-hover:rotate-0 transition-transform">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#D8FF00] animate-pulse" />
          AVAILABLE FOR 2026 PROJECTS
        </span>
      </div>
    </div>
  );
}
