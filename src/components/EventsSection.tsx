import React from 'react';
import { EVENTS_LIST, EventOccasion } from '../data/events';
import {
  PartyPopper,
  HeartHandshake,
  GraduationCap,
  Gift,
  Sliders,
  ArrowRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { BRAND, createWhatsAppUrl } from '../data/brand';

interface EventsSectionProps {
  onPlanEventOrder: (occasionTitle?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onPlanEventOrder }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'birthday': return <PartyPopper className="w-6 h-6 text-rose-500" />;
      case 'wedding': return <Gift className="w-6 h-6 text-amber-500" />;
      case 'school': return <GraduationCap className="w-6 h-6 text-emerald-500" />;
      case 'trust': return <HeartHandshake className="w-6 h-6 text-sky-500" />;
      default: return <Sliders className="w-6 h-6 text-purple-500" />;
    }
  };

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#F6F3EC] relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-950 leading-tight">
            Freshness For <br />
            <span className="text-emerald-700 italic font-normal">Every Occasion.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-700 font-normal">
            "Make your celebrations healthier and happier with fresh fruit bowls and juices."
          </p>
        </div>

        {/* 5 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENTS_LIST.map((event, idx) => {
            const isWide = idx === 4; // Customized Orders gets full breadth on some viewports

            return (
              <div
                key={event.id}
                className={`rounded-3xl bg-white p-7 sm:p-8 border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${isWide ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(event.iconType)}
                    </div>

                    <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mt-1 mb-3">
                    {event.tagline}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone-600">
                    Min: {event.minServings}
                  </span>

                  <button
                    onClick={() => onPlanEventOrder(event.title)}
                    className="px-4 py-2 rounded-full bg-forest-900 text-white text-xs font-bold hover:bg-emerald-800 transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span>Plan Your Order</span>
                    <ArrowRight className="w-3.5 h-3.5 text-citrus-yellow" />
                  </button>
                </div>

              </div>
            );
          })}

          {/* Quick WhatsApp Assistance Card */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-forest-950 text-white p-7 sm:p-8 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-citrus-yellow" />
              </div>

              <h3 className="font-serif text-2xl font-bold">
                Need Fast Consultation?
              </h3>

              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Connect directly with our Hyderabad events coordinator on WhatsApp for customized sample menus and bulk tier discounts.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href={createWhatsAppUrl("Hello Varahi Fruit Bowl! I want to discuss a bulk / event order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Event Team (7207288868)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
