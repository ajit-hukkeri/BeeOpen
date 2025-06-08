import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Interested in collaborating or learning more about our hive monitoring project? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-bold text-amber-900 mb-4">Collaboration Opportunities</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-amber-800 text-lg">Project partnerships with beekeeping associations</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-amber-800 text-lg">Technology transfer to commercial apiaries</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-amber-800 text-lg">Educational workshops and demonstrations</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-amber-800 text-lg">Open-source development contributions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 max-w-lg mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-amber-800 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-amber-800 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base font-medium text-amber-800 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-amber-800 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your interest in the project or potential collaboration..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-amber-400 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
