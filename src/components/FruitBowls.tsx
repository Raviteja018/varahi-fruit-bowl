import React, { useState } from 'react';
import { FRUIT_BOWLS, FruitBowlPlan } from '../data/bowls';
import {
  Check,
  ArrowRight,
  Info,
  CalendarDays,
} from 'lucide-react';

interface FruitBowlsProps {
  onSelectBowl: (bowl: FruitBowlPlan) => void;
}

export const FruitBowls: React.FC<FruitBowlsProps> = ({ onSelectBowl }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="bowls" className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-950 leading-tight">
            Choose Your <span className="text-emerald-700 italic font-normal">Bowl.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-700 font-normal">
            Fresh fruit goodness, prepared for your everyday health.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {FRUIT_BOWLS.map((bowl) => {
            const isHovered = hoveredCard === bowl.id;
            const isFeatured = bowl.featured;

            return (
              <div
                key={bowl.id}
                onMouseEnter={() => setHoveredCard(bowl.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-organic-card transition-all duration-500 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-white via-[#FFFBFB] to-[#FFF5F5] border-2 border-rose-400 shadow-berry lg:-translate-y-3'
                    : 'bg-white border border-stone-200/80 shadow-premium'
                } ${isHovered ? 'shadow-float -translate-y-2' : ''}`}
              >
                {/* Popular / Mindful Badge */}
                {bowl.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                      isFeatured 
                        ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white' 
                        : 'bg-forest-900 text-citrus-yellow'
                    }`}>
                      {bowl.badge}
                    </span>
                  </div>
                )}

                {/* Top Content Area */}
                <div className="p-7 sm:p-9 pb-4">
                  
                  {/* Category & Tagline */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-stone-600">
                      Daily Healthy Habit
                    </span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span className="text-xs font-bold text-emerald-800">
                      {bowl.varietiesCount} Varieties
                    </span>
                  </div>

                  {/* Bowl Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                    {bowl.name}
                  </h3>
                  
                  <p className="text-xs font-medium text-stone-600 mt-1">
                    {bowl.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-stone-700 mt-4 leading-relaxed font-normal">
                    "{bowl.description}"
                  </p>

                  {bowl.subDescription && (
                    <p className="text-xs text-stone-600 mt-2 italic">
                      {bowl.subDescription}
                    </p>
                  )}

                  {/* Real Bowl Photography */}
                  <div
                    className={`relative my-6 h-48 w-full rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm transition-all duration-500 ${
                      isHovered ? 'shadow-float -translate-y-1.5' : ''
                    }`}
                  >
                    <img
                      src={`/bowls/${bowl.id}.jpg`}
                      alt={bowl.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
                      {bowl.varietiesCount} Fresh Cuts Daily
                    </div>
                  </div>

                  {/* Varieties Count Breakdown */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-2.5">
                      Daily Portion Breakdown
                    </p>
                    <div className="grid grid-cols-3 divide-x divide-stone-200 rounded-xl border border-stone-200/80 text-center text-xs overflow-hidden">
                      <div className="py-2.5">
                        <span className="font-bold text-rose-700 block text-sm">
                          {bowl.breakdown.fruits}
                        </span>
                        <span className="text-[10px] text-stone-700 font-medium">Fruits</span>
                      </div>
                      <div className="py-2.5">
                        <span className="font-bold text-emerald-700 block text-sm">
                          {bowl.breakdown.veggies}
                        </span>
                        <span className="text-[10px] text-stone-700 font-medium">Veggie</span>
                      </div>
                      <div className="py-2.5">
                        <span className="font-bold text-amber-700 block text-sm">
                          {bowl.breakdown.sproutsAndMore}
                        </span>
                        <span className="text-[10px] text-stone-700 font-medium">Sprouts+</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5">
                    {bowl.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs text-stone-800">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-tight font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Non-Medical Notice for Diabetic Bowl */}
                  {bowl.id === 'diabetic-bowl' && (
                    <div className="mt-4 p-3 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2 leading-relaxed">
                      <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Mindful Eating Notice:</strong> Curated with low-glycemic, high-fiber natural ingredients. Not intended to treat or diagnose medical conditions.
                      </span>
                    </div>
                  )}

                </div>

                {/* Bottom Pricing & CTA Area */}
                <div className="p-7 sm:p-9 pt-4 border-t border-stone-100 bg-stone-50/50 rounded-bl-[20px] rounded-br-[32px]">
                  
                  {/* Pricing Display */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
                          ₹{bowl.priceMonthly.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-600 font-semibold">/month</span>
                      </div>
                      <span className="text-[11px] text-emerald-800 font-medium block">
                        ≈ ₹{bowl.perDayPrice} per fresh daily delivery
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-stone-600 block">Delivery</span>
                      <span className="text-xs font-bold text-forest-900">Doorstep</span>
                    </div>
                  </div>

                  {/* CTA Button with subtle magnetic hover style */}
                  <button
                    onClick={() => onSelectBowl(bowl)}
                    className={`w-full py-3.5 rounded-organic-card font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-berry'
                        : 'bg-forest-900 hover:bg-forest-800 text-white shadow-premium'
                    } active:scale-95`}
                  >
                    <span>{bowl.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-citrus-yellow transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

        {/* Reassuring note */}
        <div className="mt-12 text-center text-xs text-stone-600 max-w-xl mx-auto flex items-center justify-center gap-2">
          <CalendarDays className="w-4 h-4 text-emerald-700" />
          <span>Flexible pause &amp; resume anytime via WhatsApp • 7207288868</span>
        </div>

      </div>
    </section>
  );
};
