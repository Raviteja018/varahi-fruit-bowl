import React, { useState } from 'react';
import { 
  Tractor, 
  Sparkles, 
  ShieldCheck, 
  PackageCheck, 
  Bike, 
  Leaf, 
  Droplet, 
  CheckCircle2, 
  ArrowRight,
  Sun
} from 'lucide-react';

export const FreshnessStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "farms",
      title: "Direct Farm Sourcing",
      location: "Local Orchards & Organic Farms",
      time: "4:00 AM Dawn",
      description: "Direct partnerships with verified farm growers across Telangana and neighboring regions. We procure fresh, naturally ripened produce before the morning markets awake.",
      highlights: ["No artificial carbide ripening", "Direct grower compensation", "Peak harvest sweetness"],
      icon: Tractor,
      color: "#15803D",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      id: "handpicked",
      title: "Handpicked Quality Sort",
      location: "Quality Inspection Station",
      time: "4:45 AM",
      description: "Our experienced fruit curators personally inspect every batch for skin purity, firmness, fragrance, and natural blemish-free condition. Only Grade-A fruit enters our prep floor.",
      highlights: ["Grade-A blemish checks", "Optimal hydration level", "Zero bruised fruit"],
      icon: Sun,
      color: "#F59E0B",
      accentBg: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      id: "preparation",
      title: "Careful Preparation",
      location: "Sanitized Cold Kitchen",
      time: "5:15 AM",
      description: "Produce is sanitized with clean ozonated water, carefully peeled, and precision-cut into bite-sized succulent pieces in temperature-controlled sanitized kitchens. Strictly zero added sugar or syrups.",
      highlights: ["Ozonated deep cold-wash", "Strictly zero sugar / preservatives", "Precision fresh-cut"],
      icon: Droplet,
      color: "#0284C7",
      accentBg: "bg-sky-50 text-sky-800 border-sky-200"
    },
    {
      id: "packing",
      title: "Hygienic Packing",
      location: "Airtight Seal Floor",
      time: "6:00 AM",
      description: "Bowls are vacuum-portioned into 100% food-grade, airtight eco-containers that lock in aroma, crispness, and moisture so your morning vitamins remain completely intact.",
      highlights: ["Food-grade airtight bowls", "Tamper-evident seals", "Pre-measured nutrition balance"],
      icon: PackageCheck,
      color: "#E11D48",
      accentBg: "bg-rose-50 text-rose-800 border-rose-200"
    },
    {
      id: "doorstep",
      title: "Your Doorstep",
      location: "Kukatpally & Kondapur",
      time: "7:00 AM – 9:00 AM",
      description: "Delivered promptly right to your home, gated community, or office desk in Kukatpally and Kondapur so you start your day nourished, light, and energized.",
      highlights: ["Contactless morning delivery", "Dedicated subscription routes", "Guaranteed fresh temperature"],
      icon: Bike,
      color: "#10B981",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F5EE] relative overflow-hidden border-y border-forest-900/10">
      {/* Decorative organic leaf ambient background */}
      <div className="absolute -top-12 right-0 w-80 h-80 bg-fresh-glow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 left-0 w-80 h-80 bg-citrus-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-950 leading-tight">
            From Nature <br />
            <span className="text-emerald-700 italic font-normal">To Your Bowl.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
            "We believe healthy food should be fresh, colourful and genuinely enjoyable."
          </p>
        </div>

        {/* Interactive Step Navigator / Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Timeline Navigation (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                    isSelected 
                      ? 'bg-white shadow-lg shadow-forest-900/10 border-emerald-500 scale-[1.02]' 
                      : 'bg-white/60 hover:bg-white/90 border-forest-900/10 hover:border-forest-900/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-forest-900 text-white shadow-md' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        Step 0{idx + 1} • {step.time}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                          Active <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-1">
                      {step.location}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Detail Spotlight (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-900/10 shadow-xl relative overflow-hidden">
              
              {/* Top Accent Gradient Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${steps[activeStep].accentBg}`}>
                  {steps[activeStep].location}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Daily Routine: {steps[activeStep].time}
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              {/* Quality Assurances */}
              <div className="space-y-3 pt-6 border-t border-stone-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                  Standard of Hygiene &amp; Care:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].highlights.map((h) => (
                    <div key={h} className="p-3 rounded-xl bg-stone-50 border border-stone-200/60 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-stone-800 leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav indicators */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
                <span>Journey Phase {activeStep + 1} of 5</span>
                <div className="flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeStep === i ? 'w-8 bg-forest-900' : 'bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
