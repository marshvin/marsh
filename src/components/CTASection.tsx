
import React from 'react';
import { Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Let's Build Something Exceptional
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Ready to transform your ideas into powerful digital solutions? 
          Let's discuss how we can work together to create something extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <ContactModal>
            <Button size="lg" className="bg-gray-700 hover:bg-gray-600 font-semibold px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </ContactModal>
          <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-8 py-4">
            <Github className="mr-2 h-5 w-5" />
            Explore My Work
          </Button>
        </div>
        
        <div className="text-gray-400">
          <p>📧 vincent.marsh@example.com</p>
          <p>🌐 Available for freelance and full-time opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
