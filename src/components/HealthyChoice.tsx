import React, { useState } from 'react';
import { 
  Heart, 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Droplet,
  CheckCircle2
} from 'lucide-react';

export const HealthyChoice: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: "Healthy",
      tagline: "Cellular Nutrition & Energy",
      desc: "Packed with active plant polyphenols, bioavailable micronutrients, and dietary fiber that support healthy metabolism.",
      accent: "#10B981",
      bgGradient: "from-emerald-500/10 to-transparent",
      iconType: "heart"
    },
    {
      id: 2,
      title: "Tasty",
      tagline: "Nature's Natural Sweetness",
      desc: "Carefully calibrated fruit profiles matching creamy sweetness with crisp tartness for an irresistible natural taste.",
      accent: "#E11D48",
      bgGradient: "from-rose-500/10 to-transparent",
      iconType: "fruit"
    },
    {
      id: 3,
      title: "Fresh",
      tagline: "Zero Stored or Frozen Cuts",
      desc: "Cut, assembled, and packed within 90 minutes of morning delivery. Crisp textures, vibrant aromas, and intact juices.",
      accent: "#0284C7",
      bgGradient: "from-sky-500/10 to-transparent",
      iconType: "sparkle"
    },
    {
      id: 4,
      title: "Natural",
      tagline: "Pure Earth • Unadulterated",
      desc: "No preservatives, no artificial syrups, no carbide ripening. Just pure, uncompromised whole food straight from orchards.",
      accent: "#15803D",
      bgGradient: "from-green-500/10 to-transparent",
      iconType: "leaf"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Two Pillar Statements: "No Added Sugar" & "A Bowl Full of Goodness" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          <div className="rounded-3xl bg-forest-900 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fresh-bright mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Purity Standard</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              No Added Sugar. <br />
              <span className="text-stone-300 font-light text-2xl sm:text-3xl">Ever.</span>
            </h3>

            <p className="text-sm text-stone-300 mt-4 leading-relaxed font-light">
              We let nature's sun-ripened fructose do the work. Zero high-fructose corn syrups, artificial sweeteners, or synthetic fruit glazes.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-100 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Core Brand Promise</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              A Bowl Full <br />
              <span className="text-amber-100 italic font-normal">Of Goodness.</span>
            </h3>

            <p className="text-sm text-white/90 mt-4 leading-relaxed">
              Every morning delivers a joyful visual celebration of seasonal colors, diverse phytonutrients, and authentic vitality.
            </p>
          </div>

        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-script text-2xl text-emerald-800 block mb-1">
            "Fresh Fruits • Healthy Choice • Happy You"
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            The Four Pillars of Varahi
          </h2>
        </div>

        {/* Four Animated Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="rounded-3xl bg-white p-7 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Subtle colored accent glow on card top */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Bespoke animated micro-icon */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    {item.iconType === 'heart' && (
                      <Heart className="w-6 h-6 animate-pulse" style={{ color: item.accent }} />
                    )}
                    {item.iconType === 'fruit' && (
                      <span className="text-2xl select-none group-hover:rotate-12 transition-transform duration-300">
                        🍎
                      </span>
                    )}
                    {item.iconType === 'sparkle' && (
                      <Sparkles className="w-6 h-6 animate-spin-slow" style={{ color: item.accent }} />
                    )}
                    {item.iconType === 'leaf' && (
                      <Leaf className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" style={{ color: item.accent }} />
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-semibold">
                  <span>Pillar 0{index + 1}</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
