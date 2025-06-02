import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HackathonsSection = () => {
  const hackathons = [
    {
      name: "HackTheNorth 2023",
      position: "1st Place",
      project: "EcoTrack - Carbon Footprint Tracker",
      prize: "$10,000",
      participants: "1000+",
      description: "Built an AI-powered app to track and reduce carbon emissions",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      name: "MLH Prime 2023",
      position: "Winner",
      project: "MindSpace - Mental Health Platform",
      prize: "$5,000",
      participants: "800+",
      description: "Created a comprehensive mental health support platform",
      icon: Award,
      color: "text-blue-600"
    },
    {
      name: "TechCrunch Disrupt",
      position: "Top 10",
      project: "CodeMentor - AI Learning Assistant",
      prize: "Recognition",
      participants: "1200+",
      description: "Developed an AI tutor for programming education",
      icon: Medal,
      color: "text-orange-600"
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image and title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Competition Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proven track record of innovation and excellence in high-pressure competitive environments
            </p>
            
            {/* Competition image */}
            <div className="w-full">
              <img 
                src="/hackathon.jpg"
                alt="Hackathon competition"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Competition list */}
          <div className="space-y-6">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${hackathon.color}`}>
                    <hackathon.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{hackathon.name}</h3>
                      <Badge className="bg-gray-900 text-white font-bold">
                        {hackathon.position}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{hackathon.project}</h4>
                    <p className="text-gray-600 mb-3 leading-relaxed">{hackathon.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{hackathon.participants} participants</span>
                      <span className="font-bold text-gray-900">{hackathon.prize}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Summary stats */}
            <div className="bg-gray-900 text-white p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4">Competition Highlights</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-gray-300 text-sm">Major Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$15K+</div>
                  <div className="text-gray-300 text-sm">Prize Money</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3000+</div>
                  <div className="text-gray-300 text-sm">Competitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
