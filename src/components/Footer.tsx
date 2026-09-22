import React from 'react';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowUp
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Fruit Bowls', href: '#bowls' },
    { label: 'Juices', href: '#juices' },
    { label: 'Ragi Java', href: '#ragi-java' },
    { label: 'Subscriptions', href: '#subscriptions' },
    { label: 'Events & Bulk', href: '#events' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-forest-950 text-white pt-20 pb-12 relative overflow-hidden border-t border-forest-900/60">
      
      {/* Decorative ambient subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-fresh-glow/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-900 border border-emerald-500/40 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-citrus-yellow" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VARAHI FRUIT BOWL
              </span>
            </div>

            <p className="font-script text-emerald-400 text-2xl mb-4">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs text-stone-300 max-w-md leading-relaxed font-light mb-6">
              Hyderabad's dedicated fresh wellness brand delivering handpicked seasonal fruit bowls, slow cold-pressed juices, and traditional Ragi Java. Prepared daily in sanitized kitchens with zero added sugar.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={createWhatsAppUrl("Hello Varahi Fruit Bowl! I'm reaching out from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose-600 flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-citrus-yellow mb-5">
              Explore Menu &amp; Plans
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-stone-300 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hubs & Direct Contact (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-citrus-yellow mb-5">
              Hyderabad Operating Hubs
            </h4>
            
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-citrus" />
                  <span>1. Kukatpally Hub</span>
                </div>
                <p className="text-[11px] text-stone-400">
                  Kukatpally, Hyderabad (Address coming soon)
                </p>
                <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                  Serving KPHB, JNTU &amp; Miyapur
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-citrus" />
                  <span>2. Kondapur Hub</span>
                </div>
                <p className="text-[11px] text-stone-400">
                  Kondapur, Hyderabad (Address coming soon)
                </p>
                <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                  Serving Hitec City, Gachibowli &amp; Madhapur
                </span>
              </div>
            </div>

            <div className="mt-5 text-xs text-stone-300">
              <span>Phone / WhatsApp: </span>
              <strong className="text-white font-mono">{BRAND.phone}</strong>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} VARAHI FRUIT BOWL. All rights reserved. Hyderabad, Telangana.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">
              "A Bowl Full of Goodness"
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
