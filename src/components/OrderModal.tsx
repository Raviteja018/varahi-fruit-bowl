import React, { useState, useEffect } from 'react';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import { FRUIT_BOWLS } from '../data/bowls';
import { JUICES_LIST } from '../data/juices';
import { RAGI_JAVA_DATA } from '../data/ragiJava';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  CheckCircle2,
  MapPin,
  Calendar,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Send
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultItemTitle?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultItemTitle 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'bowl' | 'juice' | 'ragi' | 'event'>('bowl');
  const [selectedItem, setSelectedItem] = useState<string>('Large Fruit Bowl (₹2,799/mo)');
  const [orderType, setOrderType] = useState<'subscription' | 'trial'>('subscription');
  const [selectedBranch, setSelectedBranch] = useState<string>('Kukatpally Branch');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (defaultItemTitle) {
      if (defaultItemTitle.toLowerCase().includes('ragi')) {
        setSelectedCategory('ragi');
        setSelectedItem('Traditional Ragi Java (₹899/mo - 25 Days)');
      } else if (defaultItemTitle.toLowerCase().includes('juice')) {
        setSelectedCategory('juice');
        setSelectedItem(defaultItemTitle);
      } else if (defaultItemTitle.toLowerCase().includes('event') || defaultItemTitle.toLowerCase().includes('part') || defaultItemTitle.toLowerCase().includes('wedding')) {
        setSelectedCategory('event');
        setSelectedItem(`Event Order: ${defaultItemTitle}`);
      } else {
        setSelectedCategory('bowl');
        setSelectedItem(defaultItemTitle);
      }
    }
  }, [defaultItemTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory fresh confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B', '#EF4444', '#3B82F6']
      });
    } catch {
      // ignore
    }

    // Build formatted WhatsApp message
    let text = `Hello Varahi Fruit Bowl! 🌿\n\n`;
    text += `I would like to place an order / subscription:\n`;
    text += `• Item: *${selectedItem}*\n`;
    text += `• Plan Type: *${orderType === 'subscription' ? 'Monthly Subscription' : 'Single Trial / Custom'}*\n`;
    text += `• Selected Hub: *${selectedBranch}*\n`;

    if (customerName.trim()) {
      text += `• Customer Name: *${customerName.trim()}*\n`;
    }
    if (customerAddress.trim()) {
      text += `• Delivery Area: *${customerAddress.trim()}*\n`;
    }
    if (notes.trim()) {
      text += `• Note / Preferences: ${notes.trim()}\n`;
    }

    text += `\nPlease confirm the availability and payment details. Thank you!`;

    const url = createWhatsAppUrl(text);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-stone-200 overflow-hidden z-10 my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-citrus-yellow text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant WhatsApp Order Assistant</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Start Your Fresh Habit
          </h3>

          <p className="text-xs text-stone-300 mt-1">
            Zero commitment • Direct kitchen connection to 7207288868
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          
          {/* 1. Category Switcher */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Select Product Category
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'bowl', label: 'Fruit Bowls' },
                { id: 'juice', label: 'Juices' },
                { id: 'ragi', label: 'Ragi Java' },
                { id: 'event', label: 'Events' }
              ].map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id as any);
                    if (cat.id === 'bowl') setSelectedItem('Large Fruit Bowl (₹2,799/mo)');
                    if (cat.id === 'juice') setSelectedItem('ABC Miracle Juice (₹2,499/mo)');
                    if (cat.id === 'ragi') setSelectedItem('Traditional Ragi Java (₹899/mo - 25 Days)');
                    if (cat.id === 'event') setSelectedItem('Event / Bulk Custom Order');
                  }}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-forest-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Specific Item Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
              Select Specific Item / Plan
            </label>
            <div className="relative">
              <select
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl bg-stone-50 border border-stone-300 text-stone-900 text-sm font-semibold truncate focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
              {selectedCategory === 'bowl' && (
                <>
                  <option value="Medium Fruit Bowl (₹2,399/mo)">Medium Fruit Bowl - ₹2,399/mo (7 Varieties)</option>
                  <option value="Large Fruit Bowl (₹2,799/mo) [POPULAR]">Large Fruit Bowl - ₹2,799/mo (POPULAR)</option>
                  <option value="Diabetic Bowl (₹3,799/mo)">Diabetic Bowl - ₹3,799/mo (Mindful Nutrition)</option>
                </>
              )}
              {selectedCategory === 'juice' && (
                <>
                  <option value="ABC Miracle Juice (₹2,499/mo)">ABC Juice (Apple+Beetroot+Carrot) - ₹2,499/mo</option>
                  <option value="Pure Carrot Juice (₹1,999/mo)">Pure Carrot Juice - ₹1,999/mo</option>
                  <option value="Vital Beetroot Juice (₹1,999/mo)">Vital Beetroot Juice - ₹1,999/mo</option>
                  <option value="Moringa Supergreen Juice (₹1,999/mo)">Moringa Supergreen Juice - ₹1,999/mo</option>
                  <option value="Ash Gourd Juice (₹1,599/mo)">Ash Gourd Juice - ₹1,599/mo</option>
                  <option value="Sorakaya Juice (₹1,699/mo)">Sorakaya / Bottle Gourd - ₹1,699/mo</option>
                  <option value="Keera Cucumber Juice (₹1,499/mo)">Keera Cucumber Juice - ₹1,499/mo</option>
                </>
              )}
              {selectedCategory === 'ragi' && (
                <option value="Traditional Ragi Java (₹899/mo - 25 Days)">
                  Traditional Ragi Java - ₹899/month (25 Days Excl. Sun)
                </option>
              )}
              {selectedCategory === 'event' && (
                <>
                  <option value="Birthday Party Order">Birthday Party Fresh Bowls</option>
                  <option value="Wedding / Reception Counter">Wedding Fresh Counter</option>
                  <option value="School Sports Day Order">School / Sports Event Grab-and-Go</option>
                  <option value="Trust / Charitable Donation">Trust / Orphanage Charitable Seva</option>
                  <option value="Custom Corporate Order">Custom Corporate Wellness Order</option>
                </>
              )}
              </select>
              <ChevronDown className="w-4 h-4 text-stone-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 3. Branch Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
              Select Preferred Hyderabad Branch
            </label>
            <div className="grid grid-cols-2 gap-3">
              {BRAND.branches.map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setSelectedBranch(b.name)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                    selectedBranch === b.name
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 font-bold'
                      : 'border-stone-200 bg-stone-50 text-stone-600'
                  }`}
                >
                  <MapPin className={`w-4 h-4 flex-shrink-0 ${selectedBranch === b.name ? 'text-emerald-700' : 'text-stone-400'}`} />
                  <span className="text-xs">{b.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Customer Details (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Reddy"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Gated Community / Area
              </label>
              <input
                type="text"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                placeholder="e.g. My Home Bhooja, Kondapur"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Dietary Notes or Start Date (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Please start tomorrow 7 AM, extra papaya preferred"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Connect on WhatsApp (7207288868)</span>
            </button>
            <p className="text-[11px] text-stone-400 text-center mt-2">
              Opens WhatsApp with your pre-formatted order details.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};
