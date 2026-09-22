import React, { useState } from 'react';
import { RAGI_JAVA_DATA } from '../data/ragiJava';
import { 
  Sparkles, 
  Sun, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Flame
} from 'lucide-react';

interface RagiJavaSectionProps {
  onSubscribeRagi: () => void;
}

export const RagiJavaSection: React.FC<RagiJavaSectionProps> = ({ onSubscribeRagi }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="ragi-java" 
      className="py-24 sm:py-32 bg-[#FAF3EC] relative overflow-hidden border-y border-[#E3D4C4]"
    >
      {/* Warm earthy terracotta & cream radial glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#E8DACB] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#D7C3AF]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two column layout: Visual on Left, Details & Subscription on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Vessel & Grains (5 Cols) */}
          <div className="lg:col-span-5">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative rounded-[36px] bg-gradient-to-b from-[#F5EBE1] to-[#EFE2D5] p-8 sm:p-12 border border-[#DECDBB] shadow-2xl overflow-hidden text-center group cursor-pointer"
            >
              {/* Traditional Tag Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A3222] text-[#F5EBE1] text-xs font-semibold mb-6 shadow-md">
                <Sun className="w-3.5 h-3.5 text-citrus-yellow" />
                <span>Ancient Indian Superfood</span>
              </div>

              {/* Ragi Traditional Vessel Visual Artwork */}
              <div className="relative h-72 sm:h-80 flex items-center justify-center my-4">
                
                {/* Floating Ragi Grains (Micro-animation) */}
                <div 
                  className="absolute top-6 left-8 text-2xl transition-transform duration-700 select-none"
                  style={{
                    transform: isHovered ? 'translate(-8px, -12px) rotate(-15deg) scale(1.15)' : 'none'
                  }}
                >
                  🌾
                </div>

                <div 
                  className="absolute top-10 right-8 text-2xl transition-transform duration-700 select-none"
                  style={{
                    transform: isHovered ? 'translate(8px, -10px) rotate(20deg) scale(1.15)' : 'none'
                  }}
                >
                  🌾
                </div>

                <div 
                  className="absolute bottom-8 left-10 text-xl transition-transform duration-700 select-none"
                  style={{
                    transform: isHovered ? 'translate(-6px, 8px) rotate(10deg)' : 'none'
                  }}
                >
                  🌾
                </div>

                {/* Artisanal Terracotta Kulhad Real Photography */}
                <div className="relative w-full h-72 sm:h-80 max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#8A6145]/40 bg-[#382315]/10 group-hover:scale-103 transition-transform duration-700">
                  <img 
                    src="/ragi-java.jpg" 
                    alt="Traditional Varahi Ragi Java in Terracotta Kulhad"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-750 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A180E]/80 via-transparent to-black/10 pointer-events-none" />

                  {/* Floating Tradition Seal */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 py-2 px-3.5 rounded-2xl bg-[#2A180E]/85 backdrop-blur-md border border-[#DECDBB]/30 text-[#F5EBE1] text-xs font-serif font-bold text-center shadow-lg">
                    Brewed Fresh at Dawn in Traditional Terracotta
                  </div>
                </div>

              </div>

              {/* Native Name Label */}
              <p className="font-serif text-xl font-bold text-[#3B2618]">
                {RAGI_JAVA_DATA.teluguName}
              </p>
              <p className="text-xs text-[#6B4E38] mt-1 font-medium">
                {RAGI_JAVA_DATA.prepTime}
              </p>

            </div>
          </div>

          {/* Details & Subscription Action (7 Cols) */}
          <div className="lg:col-span-7">
            
            

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2B1B10] leading-tight mb-4">
              Start Your Morning <br />
              <span className="text-[#8D5832] italic font-normal">The Traditional Way.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#553C2A] font-normal leading-relaxed mb-6">
              "{RAGI_JAVA_DATA.subheading}"
            </p>

            <p className="text-sm text-[#664C39] leading-relaxed mb-8">
              {RAGI_JAVA_DATA.description}
            </p>

            {/* 4 Traditional Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {RAGI_JAVA_DATA.benefits.map((b) => (
                <div key={b.title} className="p-4 rounded-2xl bg-white/80 border border-[#E3D3C2] shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8D5832] flex-shrink-0" />
                    <h4 className="font-bold text-sm text-[#2B1B10]">
                      {b.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6B4E38] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Subscription Box Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#4A301E] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#6A4730]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#E3CAA5] font-semibold uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4 text-citrus-yellow" />
                  <span>{RAGI_JAVA_DATA.subscriptionPeriod}</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    ₹{RAGI_JAVA_DATA.priceMonthly}
                  </span>
                  <span className="text-xs text-[#D8C2AC]">/month (25 days)</span>
                </div>

                <span className="text-xs text-[#C4AB94] block mt-1">
                  Only ₹{RAGI_JAVA_DATA.perDayPrice} per fresh warm morning flask
                </span>
              </div>

              <button
                onClick={onSubscribeRagi}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-citrus text-forest-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>{RAGI_JAVA_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
