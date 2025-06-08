import React from 'react';
import { GraduationCap, Brain, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              About the Project
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Exploring the intersection of IoT, Machine Learning, and Apiculture through innovative project
            </p>
          </div>

          <div className="grid lg:grid-cols-1 mb-16">
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-amber-900 mb-6">Project Objectives</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-amber-800 text-lg">Develop real-time IoT monitoring systems for beehives</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-amber-800 text-lg">Create predictive models for colony health assessment</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-amber-800 text-lg">Integrate machine learning for environmental forecasting</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-amber-800 text-lg">Support sustainable beekeeping practices</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">XGBoost Models</h4>
              <p className="text-lg text-amber-700">
                Advanced gradient boosting algorithms for analyzing environmental patterns and colony behavior prediction.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">TFT Forecasting</h4>
              <p className="text-lg text-amber-700">
                Temporal Fusion Transformers for time-series forecasting of hive conditions and colony growth patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Community Impact</h4>
              <p className="text-lg text-amber-700">
                Supporting local beekeepers and projecters with accessible technology for better hive management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
