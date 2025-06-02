
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ConsultancySection from '@/components/ConsultancySection';
import HackathonsSection from '@/components/HackathonsSection';
import EducationSection from '@/components/EducationSection';
import WhySoftwareEngineeringSection from '@/components/WhySoftwareEngineeringSection';
import SkillsSection from '@/components/SkillsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <div id="hero">
          <HeroSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="why-software">
          <WhySoftwareEngineeringSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="consultancy">
          <ConsultancySection />
        </div>
        <div id="competitions">
          <HackathonsSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default Index;
