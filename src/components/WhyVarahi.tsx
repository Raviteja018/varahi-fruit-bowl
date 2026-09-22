import React from 'react';
import { 
  Sprout, 
  CheckCircle2, 
  ShieldCheck, 
  Package, 
  HeartHandshake, 
  Layers, 
  Truck,
  Sparkles
} from 'lucide-react';

export const WhyVarahi: React.FC = () => {
  const points = [
    {
      step: "01",
      title: "Directly Sourced From Farms",
      subtitle: "Zero Middlemen • Orchard Freshness",
      desc: "We procure peak seasonal harvests directly from verified regional orchards and farms across Telangana, ensuring that fruits are picked at natural peak maturity without chemical carbide gas chambers.",
      icon: Sprout,
      color: "#15803D"
    },
    {
      step: "02",
      title: "Carefully Handpicked For Best Quality",
      subtitle: "Rigorous 3-Tier Sortation",
      desc: "Every single fruit undergoes inspection for skin firmness, sweetness index, and natural hydration. Bruised or under-ripe items are rejected on the spot before entering kitchen prep.",
      icon: CheckCircle2,
      color: "#F59E0B"
    },
    {
      step: "03",
      title: "Hygienically Packed & Safely Delivered",
      subtitle: "Sanitized Cold Prep • Sealed Airtight",
      desc: "Washed in ozonated water, prepped in clean, hairnet-grade cold prep stations, and sealed in airtight food-grade bowls. Delivered every morning directly to your doorstep in Kukatpally & Kondapur.",
      icon: ShieldCheck,
      color: "#0284C7"
    },
    {
      step: "04",
      title: "Custom Bulk Orders Available",
      subtitle: "Tailored Sizing & Mixes",
      desc: "Whether you need high-protein bowls with sprouted pulses, exotic fruit platters for an office meeting, or pure cold-pressed detox juices, we personalize portion sizes and ingredients to your preferences.",
      icon: Layers,
      color: "#8B5CF6"
    },
    {
      step: "05",
      title: "Support For Events, Celebrations & Donations",
      subtitle: "Community & Mindful Celebrations",
      desc: "Full institutional catering capabilities for weddings, birthday parties, school sports days, and direct, respectful deliveries for charitable trusts and elderly care organizations at compassionate rates.",
      icon: HeartHandshake,
      color: "#E11D48"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">


          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-950 leading-tight">
            Why Choose <br />
            <span className="text-emerald-700 italic font-normal">Varahi?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-700 font-normal">
            A transparent commitment to wholesome living, hygiene, and authentic Indian wellness.
          </p>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Center Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-400 to-forest-900" />

          <div className="space-y-12 sm:space-y-16">
            {points.map((pt, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = pt.icon;

              return (
                <div 
                  key={pt.step} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 group`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-forest-900 shadow-md flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  {/* Empty Spacer on alternate side for desktop alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2">
                    <div className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold font-serif text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          Phase {pt.step}
                        </span>

                        <div 
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: pt.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        {pt.title}
                      </h3>

                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mt-0.5 mb-3">
                        {pt.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                        {pt.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
