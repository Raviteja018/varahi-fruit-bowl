import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface MobileStickyBarProps {
  onOpenOrderModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* WhatsApp Direct */}
        <a
          href={createWhatsAppUrl("Hello Varahi Fruit Bowl! I want to enquire about fresh bowls and subscriptions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Subscribe Button */}
        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-3 px-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-citrus-yellow" />
          <span>Start Subscription</span>
        </button>
      </div>
    </div>
  );
};
