import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import heroVideoAsset from '../../assets/Ceramic_bowl_overflowing_with_fruit_.mp4';

export interface ScrollHeroProps {
  headingLine1?: string;
  subheading?: string;
  onOpenOrderModal: (defaultItem?: string) => void;
}

export const Hero: React.FC<ScrollHeroProps> = ({
  headingLine1 = "Good Health",
  subheading = "Freshly prepared fruit bowls, healthy juices and nourishing goodness, delivered to your doorstep.",
  onOpenOrderModal,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Simple on-load entrance (not tied to scroll) for the text and CTAs
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (textRef.current) {
      tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 });
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-[100svh] min-h-[640px] overflow-hidden flex items-center justify-center bg-forest-950">
      {/* Full-bleed looping background video (plays continuously, not tied to scroll) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoAsset} type="video/mp4" />
      </video>

      {/* Legibility overlay so text reads cleanly over the footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/20 to-forest-950/65" />

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={textRef} className="will-change-transform">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-lg mb-4 sm:mb-6">
            {headingLine1} <br />
            Starts With <span className="text-emerald-300">Good Food.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            {subheading}
          </p>
        </div>

        {/* Primary & Secondary Hero CTAs */}
        <div
          ref={ctaRef}
          className="flex items-center justify-center gap-3 lg:gap-4 mt-6 sm:mt-8 lg:mt-10"
        >
          <button
            onClick={() => scrollToSection('bowls')}
            className="inline-flex w-auto px-6 py-3 lg:px-8 lg:py-4 rounded-organic-card bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm lg:text-base shadow-premium active:scale-95 transition-all duration-200 items-center justify-center gap-2"
          >
            <span>Explore Fruit Bowls</span>
            <ArrowRight className="w-4 h-4 text-citrus-yellow" />
          </button>

          {/* Hidden below lg: the mobile sticky bar already offers subscription as a persistent action, so repeating it as a second full-size hero button would be redundant */}
          <button
            onClick={() => onOpenOrderModal("Medium Fruit Bowl - Monthly Subscription")}
            className="hidden lg:inline-flex w-auto px-8 py-4 rounded-organic-card bg-white text-forest-950 font-semibold text-base border-2 border-white/80 shadow-float hover:bg-emerald-50 active:scale-95 transition-all duration-200 items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Start Monthly Subscription</span>
          </button>
        </div>
      </div>

      {/* Scroll Cue */}
      <button
        onClick={() => scrollToSection('bowls')}
        aria-label="Scroll to explore"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors animate-float-slow"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md" />
      </button>
    </section>
  );
};
