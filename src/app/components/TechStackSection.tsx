'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Container, Boxes, Settings, Workflow, Code2, ChartNoAxesCombined, Activity, Database, Feather, Zap } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

const technologies = [
  { name: 'AWS', icon: Cloud },
  { name: 'Linux', icon: Server },
  { name: 'Docker', icon: Container },
  { name: 'Terraform', icon: Boxes },
  { name: 'Ansible', icon: Settings },
  { name: 'Jenkins', icon: Workflow },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'Python', icon: Code2 },
  { name: 'Grafana', icon: ChartNoAxesCombined },
  { name: 'Prometheus', icon: Activity },
  { name: 'MariaDB', icon: Database },
  { name: 'Apache', icon: Feather },
  { name: 'Nginx', icon: Zap },
];

export default function TechStackSection() {
  return (
    <section className="relative py-16 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Tools & Technologies
          </span>
          <h2 className="section-heading">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech?.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="glass-card rounded-xl p-3 border border-border text-center cursor-default transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
            >
              <tech.icon className="w-7 h-7 mx-auto mb-1.5 text-primary" />
              <div className="text-xs font-semibold text-foreground leading-tight">{tech?.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}