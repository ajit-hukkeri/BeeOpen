import React from 'react';
import { Thermometer, Droplets, Wifi } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center">
      <img src="/logo_left.png" alt="Left Logo" className="absolute left-0 top-1/2 -translate-y-1/2 h-32 w-auto z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-orange-100/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Wifi className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-amber-900 mb-6">
            Bee<span className="text-orange-600">Open</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-amber-800 font-medium mb-8">
            Real-Time Hive Health at a Glance
          </p>
          
          <p className="text-lg md:text-xl text-amber-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Monitor hive temperature and humidity in real-time to ensure optimal colony conditions. 
            Advanced IoT sensors provide continuous insights into your bees' environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Thermometer className="w-6 h-6 text-red-500" />
              <span className="text-amber-900 font-medium">Live Temperature</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Droplets className="w-6 h-6 text-blue-500" />
              <span className="text-amber-900 font-medium">Live Humidity</span>
            </div>
          </div>
        </div>
      </div>
      <img src="/logo_right.png" alt="Right Logo" className="absolute right-0 top-1/2 -translate-y-1/2 h-32 w-auto z-10" />
    </section>
  );
};

export default HeroSection;
