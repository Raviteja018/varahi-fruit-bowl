import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import { FreshnessStory } from './components/FreshnessStory';
import { FruitBowls } from './components/FruitBowls';
import { JuiceSection } from './components/JuiceSection';
import { RagiJavaSection } from './components/RagiJavaSection';
import { HealthyChoice } from './components/HealthyChoice';
import { EventsSection } from './components/EventsSection';
import { WhyVarahi } from './components/WhyVarahi';
import { SubscriptionCTA } from './components/SubscriptionCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FruitBowlPlan } from './data/bowls';
import { JuiceProduct } from './data/juices';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState<string | undefined>();

  const handleOpenOrderModal = (itemTitle?: string) => {
    setSelectedModalItem(itemTitle);
    setIsOrderModalOpen(true);
  };

  const handleSelectBowl = (bowl: FruitBowlPlan) => {
    handleOpenOrderModal(`${bowl.name} (₹${bowl.priceMonthly.toLocaleString('en-IN')}/mo)`);
  };

  const handleSelectJuice = (juice: JuiceProduct) => {
    handleOpenOrderModal(`${juice.name} (₹${juice.priceMonthly.toLocaleString('en-IN')}/mo)`);
  };

  const handleSubscribeRagi = () => {
    handleOpenOrderModal('Traditional Ragi Java (₹899/mo - 25 Days)');
  };

  const handlePlanEventOrder = (occasionTitle?: string) => {
    handleOpenOrderModal(occasionTitle ? `Event: ${occasionTitle}` : 'Custom Event Order');
  };

  const handleStartSubscription = (planName: string) => {
    handleOpenOrderModal(`${planName} Subscription`);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#192E21] flex flex-col selection:bg-emerald-500 selection:text-white pb-16 lg:pb-0">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Fullscreen Hero with Looping Background Video */}
        <Hero
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 2. Freshness Story: Farm to Bowl Visual Journey */}
        <FreshnessStory />

        {/* 3. Fruit Bowls (Core Subscription Product Showcase) */}
        <FruitBowls onSelectBowl={handleSelectBowl} />

        {/* 4. Freshness Pressed: Cold-Pressed Juices (Deep Burgundy Section) */}
        <JuiceSection onSelectJuice={handleSelectJuice} />

        {/* 7. Traditional Ragi Java (Warm Earthy Morning Routine) */}
        <RagiJavaSection onSubscribeRagi={handleSubscribeRagi} />

        {/* 8. Four Pillars of Varahi (Healthy, Tasty, Fresh, Natural + No Added Sugar) */}
        <HealthyChoice />

        {/* 9. Events & Institutional Bulk Orders */}
        <EventsSection onPlanEventOrder={handlePlanEventOrder} />

        {/* 10. Why Choose Varahi Animated Vertical Timeline */}
        <WhyVarahi />

        {/* 11. High Conversion Subscription Pricing CTA */}
        <SubscriptionCTA onStartSubscription={handleStartSubscription} />

        {/* 13. Direct Contact & Operational Support */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive WhatsApp Order Assistant Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultItemTitle={selectedModalItem}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenOrderModal={() => handleOpenOrderModal()} />

    </div>
  );
}

export default App;
