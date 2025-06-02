
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Candidly",
      description: "Intelligent testing platform with automated assessment generation, real-time analytics, and adaptive learning capabilities.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      github: "#",
      demo: "#",
      image: "🤖"
    },
    {
      title: "Shoeplace E-commerce Website",
      description: "Full-featured e-commerce platform for footwear with product catalog, shopping cart, payment integration, and order management.",
      tech: ["React", "Express.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "👟"
    },
    {
      title: "O & M Consultancy Website",
      description: "Professional consulting firm website with service showcase, client testimonials, and integrated contact management system.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "🏢"
    },
    {
      title: "Mental Bridges Website",
      description: "Mental health support platform connecting individuals with professional counselors and peer support groups.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "#",
      demo: "#",
      image: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of full-stack applications demonstrating technical expertise and problem-solving capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <CardHeader className="bg-gray-900 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
