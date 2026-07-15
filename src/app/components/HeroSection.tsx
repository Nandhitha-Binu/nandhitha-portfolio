'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import AppImage from '@/components/ui/AppImage';

const titles = [
'Linux System Administrator',
'Cloud Operations Engineer',
'Infrastructure Automation Enthusiast',
'AWS & DevOps Learner'];


function TypingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 30);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <span className="text-gradient-amber font-display font-bold">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>);

}

const particles = [
{ size: 6, top: '15%', left: '10%', delay: 0 },
{ size: 4, top: '25%', right: '8%', delay: 0.8 },
{ size: 8, top: '65%', left: '5%', delay: 1.6 },
{ size: 5, bottom: '20%', right: '12%', delay: 0.4 },
{ size: 3, top: '45%', right: '3%', delay: 1.2 },
{ size: 6, bottom: '35%', left: '8%', delay: 2 }];


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border mb-6">
              
              <Terminal size={14} className="text-primary" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Available for Opportunities
              </span>
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-medium text-lg mb-2">
              
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hero-name mb-4">
              
              Nandhitha Binu
            </motion.h1>

            {/* Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl font-display font-semibold mb-6 min-h-[2em]">
              
              <TypingTitle />
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-muted-foreground leading-relaxed text-base mb-8 max-w-xl mx-auto lg:mx-0">
              
              Server Administrator Trainee with <strong className="text-foreground">6+ months</strong> of
              hands-on experience in Linux administration, AWS cloud services, infrastructure automation,
              and system monitoring. Skilled in RHEL 8, EC2, IAM, VPC, Ansible, Terraform, and Prometheus/Grafana.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start">
              
              <a
              href="/assets/resume/Nandhitha-Binu-Resume.pdf"
              download="Nandhitha-Binu-Resume.pdf"
              className="btn-primary flex items-center gap-2 no-underline"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="https://www.github.com/Nandhitha-Binu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 no-underline">
                
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nandhitha-binu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 no-underline">
                
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              
              {[
              { value: '6+', label: 'Months Experience' },
              { value: '10+', label: 'EC2 Instances' },
              { value: '100+', label: 'Training Hours' }].
              map((stat) =>
              <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</div>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT SIDE — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 flex items-center justify-center">
            
            {/* Outer glow */}
            <div
              className="absolute rounded-full amber-glow"
              style={{ width: '340px', height: '340px' }} />
            

            {/* Animated rings */}
            <div
              className="photo-ring-outer absolute rounded-full"
              style={{ width: '320px', height: '320px' }} />
            
            <div
              className="photo-ring-inner absolute rounded-full"
              style={{ width: '350px', height: '350px' }} />
            

            {/* Photo container */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-white shadow-glass-lg amber-glow-sm"
              style={{ width: '280px', height: '280px' }}>
              
              <AppImage
                src="/images/me.png"
                alt="Nandhitha Binu"
                fill
                sizes="280px"
                className="object-cover"
                priority />
              
            </div>

            {/* Floating particles */}
            {particles.map((p, i) =>
            <div
              key={i}
              className="particle absolute rounded-full bg-primary opacity-60"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                top: p.top,
                left: (p as {left?: string;}).left,
                right: (p as {right?: string;}).right,
                bottom: (p as {bottom?: string;}).bottom,
                animationDelay: `${p.delay}s`
              }} />

            )}

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass-card rounded-xl px-3 py-2 border border-border">
              
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs font-bold text-foreground">AWS Cloud</div>
                  <div className="text-xs text-muted-foreground">Cloud Ops</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-2 -left-6 glass-card rounded-xl px-3 py-2 border border-border">
              
              <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs font-bold text-foreground">RHEL 8</div>
                  <div className="text-xs text-muted-foreground">Linux Admin</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}