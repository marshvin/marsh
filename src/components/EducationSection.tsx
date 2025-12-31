
import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-12 w-12 text-gray-700 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Academic Foundation
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Graduated with honors, specializing in software engineering and data structures. 
                  Strong foundation in algorithms, system design, and software development principles.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Academic excellence combined with practical application through multiple projects 
                  and research initiatives in modern software development practices.
                </p>
               
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Engineering Certification</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>ALX Africa</strong> - Comprehensive software engineering program focusing on 
                  full-stack development, system design, and industry best practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Intensive hands-on training in modern web technologies, collaborative development, 
                  and real-world project implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Computer programming and education" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
