
import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB", 
    "PostgreSQL", "Docker", "AWS", "Git", "Tailwind CSS", "Express.js"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on development and continuous learning
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-6 py-3 text-lg font-semibold bg-gray-50 hover:bg-gray-100 border-gray-300 text-gray-700 transition-colors duration-200 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
