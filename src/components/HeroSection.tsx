import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - Now first on mobile */}
          <div className="order-first lg:order-last">
            <img 
              src="/hackathon.jpg"
              alt="Professional headshot"
              className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text content - Now second on mobile */}
          <div className="order-last lg:order-first">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate software engineer specializing in modern web technologies. 
              Building scalable applications with React, Node.js, and cutting-edge AI integration.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <ContactModal>
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </ContactModal>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex gap-4">
              <Button 
                size="icon" 
                variant="ghost"
                asChild
              >
                <a 
                  href="https://github.com/marshvin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/vincent-marsh-12b093222/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
