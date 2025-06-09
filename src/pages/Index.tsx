import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SensorDashboard from '@/components/SensorDashboard';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="dashboard">
          <SensorDashboard />
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
