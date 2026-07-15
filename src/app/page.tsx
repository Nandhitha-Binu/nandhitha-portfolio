import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import CertificationsSection from '@/app/components/CertificationsSection';
import TechStackSection from '@/app/components/TechStackSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/app/components/BackgroundBlobs';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}