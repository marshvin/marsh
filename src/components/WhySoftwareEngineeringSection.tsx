
import React from 'react';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhySoftwareEngineeringSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Code className="h-16 w-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Software Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The perfect intersection of creativity, logic, and meaningful impact drives my passion for development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧩</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Every challenge is an opportunity to create elegant, scalable solutions. 
                Breaking down complex problems into maintainable code is deeply satisfying.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Real Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Building solutions that people actually use and benefit from provides 
                incredible fulfillment and drives continuous improvement.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <CardTitle className="text-xl text-gray-900">Continuous Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Technology's rapid evolution keeps me intellectually engaged. 
                Every project teaches something new and expands my capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhySoftwareEngineeringSection;
