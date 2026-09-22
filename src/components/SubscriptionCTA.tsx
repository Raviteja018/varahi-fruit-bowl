import React, { useState } from 'react';
import { FRUIT_BOWLS } from '../data/bowls';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Calendar
} from 'lucide-react';

interface SubscriptionCTAProps {
  onStartSubscription: (planName: string) => void;
}

export const SubscriptionCTA: React.FC<SubscriptionCTAProps> = ({ onStartSubscription }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('large-bowl');

  const selectedPlan = FRUIT_BOWLS.find(b => b.id === selectedPlanId) || FRUIT_BOWLS[1];

  return (
    <section id="subscriptions" className="py-24 sm:py-32 bg-forest-950 text-white relative overflow-hidden">
      {/* Dynamic Emerald & Gold Glows */}
      <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-citrus/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Conversion Box */}
        <div className="rounded-[40px] bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-2xl border border-white/15 p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Make Healthy Eating <br />
                <span className="text-gradient-fresh italic font-normal">A Daily Habit.</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-xl">
                "Fresh fruit goodness delivered to you throughout the month." Delivered fresh to your home or desk in Kukatpally and Kondapur every morning.
              </p>

              {/* Three Plan Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                {FRUIT_BOWLS.map((bowl) => {
                  const isSelected = selectedPlanId === bowl.id;

                  return (
                    <button
                      key={bowl.id}
                      onClick={() => setSelectedPlanId(bowl.id)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-emerald-600/25 border-emerald-400 text-white shadow-lg shadow-emerald-950/50 scale-[1.03]' 
                          : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {bowl.name.replace(' Fruit Bowl', '')}
                        </span>
                        {bowl.featured && (
                          <span className="w-2 h-2 rounded-full bg-rose-500" />
                        )}
                      </div>

                      <div className="text-2xl font-serif font-bold text-white mt-1">
                        ₹{bowl.priceMonthly.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-stone-400 block">
                        per month
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Guarantees Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pause or cancel anytime via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Doorstep delivery across Kukatpally &amp; Kondapur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strictly zero added sugar or preservatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Insulated hygienic airtight packaging</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card & CTAs (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/[0.08] backdrop-blur-md border border-white/20 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-citrus-yellow">
                        Selected Subscription
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-1">
                        {selectedPlan.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-white">
                        ₹{selectedPlan.priceMonthly.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-stone-400 block">/month</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 mt-4 leading-relaxed">
                    "{selectedPlan.description}"
                  </p>

                  <div className="my-6 p-4 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Portion Varieties:</span>
                      <span className="font-bold text-white">{selectedPlan.varietiesCount} daily items</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Delivery Window:</span>
                      <span className="font-bold text-emerald-400">7:00 AM – 9:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Estimated daily cost:</span>
                      <span className="font-bold text-citrus-yellow">≈ ₹{selectedPlan.perDayPrice} / day</span>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary Conversion Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => onStartSubscription(selectedPlan.name)}
                    className="w-full py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Start My Subscription</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={createWhatsAppUrl(`Hello Varahi Fruit Bowl! I want to start a monthly subscription for the ${selectedPlan.name} (₹${selectedPlan.priceMonthly}/mo).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp 7207288868</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
