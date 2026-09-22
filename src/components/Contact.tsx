import React from 'react';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import { 
  Phone, 
  MessageCircle, 
  Sparkles, 
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F6F3EC] relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-[36px] bg-white p-8 sm:p-14 lg:p-16 border border-stone-200 shadow-xl text-center relative overflow-hidden">
          
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-fresh-glow/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-citrus/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Tag */}

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest-950 leading-tight mb-4">
            Let's Make Your Day <br />
            <span className="text-emerald-700 italic font-normal">A Little Fresher.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto font-normal leading-relaxed mb-10">
            Have questions about customized bowls, subscription pause dates, or bulk institutional catering? We are always a phone call or WhatsApp message away.
          </p>


          {/* 3 Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="px-8 py-3.5 rounded-full bg-forest-900 text-white font-bold text-sm hover:bg-forest-800 shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-citrus-yellow" />
              <span>Call Us</span>
            </a>

            <a
              href={createWhatsAppUrl("Hello Varahi Fruit Bowl! I want to start an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 font-bold text-sm hover:bg-stone-50 transition-all active:scale-95 flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-rose-500" />
              <span>Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
