import React, { useState } from 'react';
import { JUICES_LIST, JuiceProduct } from '../data/juices';
import {
  Sparkles,
  Droplets,
  ArrowRight,
  Check,
  Flame,
  Heart,
  ShieldCheck,
  CalendarCheck,
  Leaf
} from 'lucide-react';

interface JuiceSectionProps {
  onSelectJuice: (juice: JuiceProduct) => void;
}

export const JuiceSection: React.FC<JuiceSectionProps> = ({ onSelectJuice }) => {
  const [hoveredJuice, setHoveredJuice] = useState<string | null>(null);

  const wellnessSignatures = JUICES_LIST.filter(j => j.category === 'wellness-signature');
  const therapeuticGreens = JUICES_LIST.filter(j => j.category === 'therapeutic-greens');

  return (
    <section 
      id="juices" 
      className="py-24 sm:py-32 bg-gradient-to-b from-[#1C050C] via-[#2B0914] to-[#1C050C] text-white relative overflow-hidden"
    >
      {/* Ambient Beetroot / Ruby Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-orange-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Freshness, <span className="text-gradient-juice italic font-normal">Pressed.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-rose-200/80 font-normal max-w-xl mx-auto">
            "Premium fruit and wellness juices prepared for your daily routine."
          </p>

          <p className="mt-2 text-xs text-rose-300/60">
            Slow cold-pressed each morning without heating, pasteurizing, or adding water/sugar.
          </p>
        </div>

        {/* 1. WELLNESS SIGNATURE JUICES (ABC, Carrot, Beetroot, Moringa) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Signature Daily Cold-Pressed Juices
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessSignatures.map((juice) => {
              const isHovered = hoveredJuice === juice.id;

              return (
                <div
                  key={juice.id}
                  onMouseEnter={() => setHoveredJuice(juice.id)}
                  onMouseLeave={() => setHoveredJuice(null)}
                  className="rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between hover:bg-white/[0.1] transition-all duration-500 group relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-950/50"
                >
                  <div>
                    {/* Realistic Cold-Pressed Juice Photography */}
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden my-2 border border-white/10 shadow-lg bg-black/40 group/img">
                      <img 
                        src={`/juices/${juice.id}.jpg`}
                        alt={juice.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Floating ingredient note */}
                      <div className="absolute bottom-2 right-2 text-[10px] font-bold text-rose-200 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15 shadow-sm">
                        Cold-Extracted
                      </div>
                    </div>

                    {/* Juice Title & Subtitle */}
                    <h4 className="font-serif text-xl font-bold text-white mt-4 group-hover:text-rose-200 transition-colors">
                      {juice.name}
                    </h4>

                    {juice.subtitle && (
                      <p className="text-xs font-semibold text-rose-300 mt-0.5">
                        {juice.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-rose-100/70 mt-3 line-clamp-2 leading-relaxed">
                      {juice.description}
                    </p>

                    {/* Benefits pills */}
                    <div className="space-y-1.5 mt-4 pt-3 border-t border-white/10">
                      {juice.benefits.slice(0, 2).map((b) => (
                        <div key={b} className="flex items-center gap-1.5 text-[11px] text-rose-200/90">
                          <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span className="line-clamp-1">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-serif font-bold text-white">
                        ₹{juice.priceMonthly.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-rose-300/70 block">/month plan</span>
                    </div>

                    <button
                      onClick={() => onSelectJuice(juice)}
                      className="px-3.5 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-3 h-3 text-citrus-yellow" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 2. THERAPEUTIC GREENS & AYURVEDIC CLEANSES (Ash Gourd, Sorakaya, Keera) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Traditional Greens &amp; Gut-Cooling Elixirs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {therapeuticGreens.map((juice) => {
              const isHovered = hoveredJuice === juice.id;

              return (
                <div
                  key={juice.id}
                  onMouseEnter={() => setHoveredJuice(juice.id)}
                  onMouseLeave={() => setHoveredJuice(null)}
                  className="rounded-3xl bg-white/[0.05] backdrop-blur-xl border border-emerald-500/20 p-6 flex flex-col justify-between hover:bg-white/[0.09] transition-all duration-500 group relative hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        Ayurvedic Routine
                      </span>
                      <span className="text-xs text-rose-300/80 font-medium">
                        Pure Veg &amp; Organic
                      </span>
                    </div>

                    {/* Realistic Cold-Pressed Juice Photography */}
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 border border-emerald-500/25 shadow-lg bg-black/40 group/img">
                      <img 
                        src={`/juices/${juice.id}.jpg`}
                        alt={juice.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Ayurvedic Tag */}
                      <div className="absolute bottom-2.5 right-2.5 text-[10px] font-bold text-emerald-200 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-emerald-500/30 shadow-sm">
                        Ayurvedic Cleanse
                      </div>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {juice.name}
                    </h4>

                    <p className="text-xs font-medium text-emerald-400 mt-0.5">
                      {juice.subtitle}
                    </p>

                    <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                      {juice.description}
                    </p>

                    <div className="space-y-1.5 mt-4 pt-3 border-t border-white/10">
                      {juice.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-stone-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif font-bold text-white">
                          ₹{juice.priceMonthly.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-400">/month</span>
                      </div>
                      <span className="text-[10px] text-emerald-300">
                        Delivered 7:00 AM daily
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectJuice(juice)}
                      className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Choose</span>
                      <ArrowRight className="w-3.5 h-3.5 text-citrus-yellow" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Cold-Pressed Promise */}
        <div className="mt-16 p-6 rounded-3xl bg-white/[0.04] border border-white/10 text-center max-w-2xl mx-auto text-xs text-rose-200/80">
          <p className="font-semibold text-white mb-1 flex items-center justify-center gap-1.5">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Zero Sugar • Zero Water • Zero Additives</span>
          </p>
          <p>
            Bottled immediately after cold extraction in sterile containers. Delivered cold right across Kukatpally and Kondapur.
          </p>
        </div>

      </div>
    </section>
  );
};
