import React, { useState, useEffect, useRef } from 'react';
import { BRAND } from '../data/brand';
import {
  Menu,
  X,
  MapPin,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (defaultItem?: string) => void;
  isHidden?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, isHidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHidden) {
      setMobileMenuOpen(false);
    }
  }, [isHidden]);

  const navLinks = [
    { label: 'Fruit Bowls', href: '#bowls' },
    { label: 'Juices', href: '#juices' },
    { label: 'Ragi Java', href: '#ragi-java' },
    { label: 'Subscriptions', href: '#subscriptions' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Not fixed, so it scrolls with the page; toggles isScrolled once it leaves the viewport at 30px */}
      <div ref={scrollSentinelRef} className="absolute top-[30px] left-0 w-px h-px pointer-events-none" aria-hidden="true" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isHidden 
            ? '-translate-y-full opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100 pointer-events-auto'
        } ${
          isScrolled 
            ? 'py-2.5 glass-nav-scrolled border-b border-forest-900/10' 
            : 'py-4 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              {/* Brand logo mark */}
              <img
                src="/logo.png"
                alt="Varahi Fruit Bowl logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shadow-md shadow-forest-900/20 group-hover:scale-105 transition-transform duration-300"
              />

              <div className="flex flex-col text-left">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors leading-tight ${
                  isScrolled ? 'text-forest-950 group-hover:text-forest-700' : 'text-white group-hover:text-emerald-200'
                }`}>
                  VARAHI
                </span>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-colors ${
                    isScrolled ? 'text-emerald-800' : 'text-emerald-200'
                  }`}>
                    FRUIT BOWL
                  </span>

                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 lg:gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-forest-900/10 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-forest-950/85 hover:text-forest-950 hover:bg-forest-900/5 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Order Now CTA */}
              <button
                onClick={() => onOpenOrderModal()}
                className="hidden lg:flex relative group overflow-hidden px-4 sm:px-6 py-2 sm:py-2.5 rounded-organic-card bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-premium active:scale-95 transition-all duration-200 items-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-citrus-yellow relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-forest-800 via-emerald-700 to-forest-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full focus:outline-none transition-colors ${
                  isScrolled ? 'text-forest-950 hover:bg-stone-200/60' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-forest-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-forest-900/10">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-forest-900/10">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.png" alt="Varahi Fruit Bowl logo" className="w-8 h-8 rounded-full object-cover" />
                  <span className="font-serif font-bold text-forest-950 text-base">
                    VARAHI FRUIT BOWL
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-forest-900 hover:bg-stone-200/70"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="font-script text-forest-700 text-lg mt-3 mb-5">
                "{BRAND.tagline}"
              </p>

              {/* Links */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-forest-950 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-forest-900/40" />
                  </button>
                ))}
              </nav>

              {/* Branches quick note */}
              <div className="mt-6 p-3.5 rounded-2xl bg-stone-100/80 border border-stone-200/80 text-xs text-forest-900">
                <div className="flex items-center gap-1.5 font-bold text-forest-950 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-citrus" />
                  Two Hyderabad Branches:
                </div>
                <p className="text-forest-800/80">1. Kukatpally &nbsp;•&nbsp; 2. Kondapur</p>
                <p className="text-[11px] text-stone-700 mt-1">Fresh morning doorstep delivery available</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
