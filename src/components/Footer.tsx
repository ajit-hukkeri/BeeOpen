import React from 'react';
import { Wifi, Github, Mail, University } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Bee<span className="text-orange-300">Open</span>
              </span>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Real-time hive monitoring through advanced IoT sensors and machine learning. 
              Supporting sustainable beekeeping practices with cutting-edge technology.
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Project</h4>
            <div className="space-y-3">
              <a href="#dashboard" className="block text-amber-200 hover:text-white transition-colors">
                Live Dashboard
              </a>
              <a href="#how-it-works" className="block text-amber-200 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#about" className="block text-amber-200 hover:text-white transition-colors">
                Project Goals
              </a>
              <a href="#contact" className="block text-amber-200 hover:text-white transition-colors">
                Collaboration
              </a>
            </div>
          </div>

          {/* Contact and Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-amber-200">
                <University className="w-4 h-4" />
                <span className="text-sm">Ramaiah Institute of Technology</span>
              </div>
              <div className="flex items-center gap-3 text-amber-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">apiculture2026@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-amber-200">
                <Github className="w-4 h-4" />
                <span className="text-sm">Open Source Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-300 text-sm">
            © {new Date().getFullYear()} BeeOpen. A university project exploring IoT applications in apiculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
