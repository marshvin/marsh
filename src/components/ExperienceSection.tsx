
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-12 w-12 text-gray-700 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2+ Years in Software Development</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specialized in full-stack web development with experience working with innovative startups 
                  including ColMusk and Codefremica. Focused on building scalable architectures and 
                  user-centric design solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Proven track record of delivering high-quality solutions under tight deadlines, 
                  with expertise in modern web technologies and startup environment best practices.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-gray-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">3</div>
                    <div className="text-gray-600 text-sm">Hackathon Wins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional software development workspace" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
