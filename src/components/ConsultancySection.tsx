
import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ConsultancySection = () => {
  const consultingProjects = [
    {
      client: "TechStart Inc.",
      type: "Full-Stack Development",
      duration: "6 months",
      impact: "40% increase in user engagement",
      description: "Rebuilt their entire web platform using modern React architecture"
    },
    {
      client: "Local Business Group",
      type: "Digital Transformation",
      duration: "3 months",
      impact: "60% faster processing",
      description: "Automated manual processes and built custom CRM solution"
    },
    {
      client: "E-learning Platform",
      type: "Performance Optimization",
      duration: "2 months",
      impact: "50% faster load times",
      description: "Optimized database queries and implemented caching strategies"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="h-16 w-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Consultancy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helping businesses transform their digital presence through strategic development and optimization
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration and development" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Delivering Measurable Results</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a technical consultant, I help diverse clients achieve their digital transformation goals. 
              From startups building their first product to established companies modernizing their tech stack, 
              I deliver solutions that drive real business impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {consultingProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-gray-700" />
                  <Badge className="bg-gray-900 text-white font-bold">
                    {project.impact}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">{project.client}</CardTitle>
                <p className="text-gray-600">{project.type} • {project.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
