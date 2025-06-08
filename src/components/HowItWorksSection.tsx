import React from 'react';
import { Cpu, Wifi, BarChart3, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Zap,
      title: "SHT41 Sensors Collect Data",
      description: "High-precision sensors measure temperature and humidity inside and outside the hive every minute",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Raspberry Pi Processing",
      description: "Raspberry Pi reads sensor data and processes environmental measurements in real-time",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Wifi,
      title: "Data Transmission",
      description: "Processed data is securely transmitted to ThingSpeak cloud platform via internet connection",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Real-Time Visualization",
      description: "Live data appears on BeeOpen dashboard with charts, graphs, and historical trends",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            From sensors to insights: A seamless IoT pipeline for hive monitoring
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-amber-100 group-hover:border-amber-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-base font-bold text-amber-600 mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-amber-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-orange-400 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-orange-400 border-y-2 border-y-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Continuous Monitoring for Optimal Hive Health
            </h3>
            <p className="text-amber-800 text-lg">
              Our system provides 24/7 environmental monitoring to help beekeepers maintain ideal conditions 
              for colony growth, honey production, and overall bee welfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
