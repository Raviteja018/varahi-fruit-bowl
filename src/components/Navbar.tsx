import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { BRAND, createWhatsAppUrl } from '../data/brand';
import {
  X,
  MapPin,
  ChevronRight,
  ShoppingBag,
  Phone
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenOrderModal: (defaultItem?: string) => void;
  isHidden?: boolean;
}

interface NavLink {
  label: string;
  id: string;
  // SubscriptionCTA is hidden below lg, so this link has nowhere to scroll to from the mobile drawer
  desktopOnly?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Fruit Bowls', id: 'bowls' },
  { label: 'Juices', id: 'juices' },
  { label: 'Ragi Java', id: 'ragi-java' },
  { label: 'Events', id: 'events' },
  { label: 'Subscriptions', id: 'subscriptions', desktopOnly: true },
  { label: 'Contact', id: 'contact' },
];

const MOBILE_LINKS = NAV_LINKS.filter((link) => !link.desktopOnly);

// A section becomes active once its top edge scrolls above this fraction of the viewport height
const ACTIVE_SECTION_LINE = 0.35;

const WHATSAPP_URL = createWhatsAppUrl("Hello Varahi Fruit Bowl! I want to enquire about fresh bowls and subscriptions.");

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400';

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, isHidden = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false });

  const scrollSentinelRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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

  // Scroll progress and active section, batched to one read per frame. Progress is written straight to the DOM
  // and activeId only updates when it changes, so scrolling doesn't re-render the navbar every frame.
  useEffect(() => {
    let frame = 0;
    let lastActive: string | null = null;

    const update = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      // At the very bottom the last section may never reach the line, so the last visible one wins
      const atBottom = window.scrollY >= maxScroll - 2;
      const line = window.innerHeight * ACTIVE_SECTION_LINE;
      let current: string | null = null;
      for (const { id } of NAV_LINKS) {
        const section = document.getElementById(id);
        // display:none sections (Subscriptions below lg) have no client rects and report top 0
        if (!section || section.getClientRects().length === 0) continue;
        if (atBottom || section.getBoundingClientRect().top <= line) current = id;
      }
      if (current !== lastActive) {
        lastActive = current;
        setActiveId(current);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  // Slide the desktop pill indicator under the active link
  useLayoutEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const link = activeId ? linkRefs.current.get(activeId) : undefined;
      if (link && link.offsetWidth > 0) {
        setIndicator({ x: link.offsetLeft, width: link.offsetWidth, visible: true });
      } else {
        // Keep the last position so the pill fades out in place instead of sliding away
        setIndicator((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      }
    };
    measure();
    // Web fonts swap in after first paint and change link widths
    document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', measure);
    };
  }, [activeId]);

  useEffect(() => {
    if (isHidden) {
      setMobileMenuOpen(false);
    }
  }, [isHidden]);

  // Drawer behaves as a modal: lock page scroll, trap focus, close on Escape, restore focus to the toggle
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollbarWidth}px`;
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // The drawer is lg:hidden, so close it if the viewport grows past that breakpoint while open
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const handleBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };

    const menuButton = menuButtonRef.current;
    window.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleBreakpoint);
    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleBreakpoint);
      menuButton?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    // Wait a frame so the drawer's scroll lock is released before scrolling starts
    requestAnimationFrame(() => target.scrollIntoView({ behavior }));
  };

  const openOrderFromDrawer = () => {
    setMobileMenuOpen(false);
    onOpenOrderModal();
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
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a
              href="#home"
              className={`flex items-center gap-3 group rounded-2xl ${focusRing}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              {/* Brand logo mark, tucks in slightly once the bar condenses */}
              <img
                src="/logo.png"
                alt="Varahi Fruit Bowl logo"
                className={`rounded-full object-cover shadow-md shadow-forest-900/20 group-hover:scale-105 group-hover:-rotate-6 transition-all duration-500 ${
                  isScrolled ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-11 sm:h-11'
                }`}
              />

              <div className="flex flex-col text-left">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors leading-tight ${
                  isScrolled ? 'text-forest-950 group-hover:text-forest-700' : 'text-white group-hover:text-emerald-200'
                }`}>
                  VARAHI
                </span>
                <span className={`text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-emerald-800' : 'text-emerald-200'
                }`}>
                  FRUIT BOWL
                </span>
              </div>
            </a>

            {/* Desktop Navigation: segmented pill with a sliding active indicator */}
            <nav
              aria-label="Primary"
              className={`relative hidden lg:flex items-center p-1 rounded-full border backdrop-blur-md transition-colors duration-500 ${
                isScrolled
                  ? 'bg-cream-200/80 border-forest-900/[0.08]'
                  : 'bg-white/10 border-white/20'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 left-0 rounded-full transition-[transform,width,opacity,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isScrolled ? 'bg-forest-900 shadow-md shadow-forest-900/20' : 'bg-white/20'
                } ${indicator.visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ width: indicator.width, transform: `translateX(${indicator.x}px)` }}
              />
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    ref={(el) => {
                      if (el) linkRefs.current.set(link.id, el);
                      else linkRefs.current.delete(link.id);
                    }}
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`relative z-10 px-3.5 xl:px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors duration-300 ${focusRing} ${
                      isActive
                        ? 'text-white'
                        : isScrolled
                          ? 'text-forest-900/70 hover:text-forest-950 hover:bg-forest-900/5'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Quick WhatsApp chat */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                title={`WhatsApp ${BRAND.formattedPhone}`}
                className={`hidden lg:flex w-10 h-10 items-center justify-center rounded-full border transition-colors duration-300 ${focusRing} ${
                  isScrolled
                    ? 'border-forest-900/10 bg-white text-emerald-700 hover:bg-emerald-50 hover:border-emerald-600/30'
                    : 'border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
                }`}
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>

              {/* Order Now CTA */}
              <button
                onClick={() => onOpenOrderModal()}
                className={`hidden lg:flex relative group overflow-hidden px-6 py-2.5 rounded-organic-card bg-forest-900 text-white font-semibold text-sm shadow-premium active:scale-95 transition-all duration-200 items-center gap-2 ${focusRing} ${
                  isScrolled ? '' : 'ring-1 ring-white/20'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-citrus-yellow relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-forest-800 via-emerald-700 to-forest-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                ref={menuButtonRef}
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden group w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${focusRing} ${
                  isScrolled
                    ? 'text-forest-950 border-forest-900/10 bg-white hover:bg-cream-200'
                    : 'text-white border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20'
                }`}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="flex flex-col items-end gap-[5px] w-[18px]" aria-hidden="true">
                  <span className="h-[2px] w-full rounded-full bg-current" />
                  <span className="h-[2px] w-3/5 rounded-full bg-current transition-[width] duration-300 group-hover:w-full" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress, drawn along the bottom edge once the bar condenses */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 -bottom-px h-[2px] transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-gradient-to-r from-emerald-600 via-emerald-400 to-citrus-yellow"
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation: stays mounted so it can animate in and out. Visibility flips on immediately
          (so the close button can take focus) and only waits for the slide-out when closing. */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileMenuOpen ? 'visible' : 'invisible transition-[visibility] duration-0 delay-500'
        }`}
        inert={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-forest-950/40 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Menu */}
        <div
          ref={drawerRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream-100 shadow-2xl p-6 flex flex-col overflow-y-auto border-l border-forest-900/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-forest-900/10">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Varahi Fruit Bowl logo" className="w-9 h-9 rounded-full object-cover shadow-sm" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-forest-950 text-base">VARAHI</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-800">FRUIT BOWL</span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              onClick={() => setMobileMenuOpen(false)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-forest-900 border border-forest-900/10 hover:bg-stone-200/70 transition-colors ${focusRing}`}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tagline */}
          <p className="font-script text-forest-700 text-lg mt-3 mb-2">
            "{BRAND.tagline}"
          </p>

          {/* Links, staggered in as the drawer opens */}
          <nav aria-label="Mobile" className="flex flex-col">
            {MOBILE_LINKS.map((link, index) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  style={{ transitionDelay: mobileMenuOpen ? `${150 + index * 60}ms` : '0ms' }}
                  className={`group flex items-center justify-between py-3.5 border-b border-forest-900/[0.07] rounded-sm transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${focusRing} ${
                    mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                >
                  <span className={`font-serif text-2xl tracking-tight transition-colors ${
                    isActive ? 'text-emerald-700' : 'text-forest-950 group-hover:text-emerald-800'
                  }`}>
                    {link.label}
                  </span>
                  {isActive ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      You're here
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-forest-900/30 transition-transform group-hover:translate-x-0.5" />
                  )}
                </a>
              );
            })}
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

          {/* Drawer actions */}
          <div className="mt-auto pt-6 space-y-2.5">
            <button
              onClick={openOrderFromDrawer}
              className={`w-full py-3.5 rounded-organic-card bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-premium active:scale-[0.98] transition-all ${focusRing}`}
            >
              <ShoppingBag className="w-4 h-4 text-citrus-yellow" />
              Order Now
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BRAND.phone}`}
                className={`py-3 rounded-full border border-forest-900/15 bg-white text-forest-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-cream-200 active:scale-95 transition-all ${focusRing}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                Call Us
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all ${focusRing}`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
