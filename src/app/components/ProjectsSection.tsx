'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Network, Scale, Globe, Workflow } from 'lucide-react';

import { GithubIcon } from '@/components/ui/SocialIcons';

type Project = { title: string, icon: React.ElementType, description: string, highlights: string[], badges: string[], accent: string, borderHover: string, links?: { github?: string, demo?: string } };


const projects: Project[] = [
  {
    title: 'Enterprise Infrastructure Automation using Ansible on AWS',
    icon: Network,
    links: {
      github: 'https://github.com/Nandhitha-Binu/enterprise-infrastructure-automation-rhce-captone-project-',
    },
    description: 'Automated a 7-node AWS infrastructure using 7+ Ansible roles and 5+ playbooks, implementing Infrastructure as Code. Engineered a highly available architecture with 2 Apache servers, HAProxy, NFS, and MariaDB.',
    highlights: [
      '7-node AWS infrastructure, fully automated via IaC',
      '2 Apache servers + HAProxy for high availability',
      'Prometheus & Grafana monitoring across all nodes',
      'NFS + MariaDB for centralized application hosting',
    ],
    badges: ['AWS EC2', 'RHEL 9', 'Ansible', 'Apache', 'HAProxy', 'MariaDB', 'NFS', 'Prometheus', 'Grafana'],
    accent: 'from-orange-500/10 to-amber-500/5',
    borderHover: 'hover:border-orange-300',
  },
  {
    title: 'AWS Auto Scaling & Application Load Balancer',
    icon: Scale,
    description: 'Deployed a scalable AWS architecture using Application Load Balancer and Auto Scaling Groups across 2 EC2 instances. Configured 50% CPU target tracking to automatically scale between 1–2 instances.',
    highlights: [
      '50% CPU target tracking with auto scale-out/in',
      'ALB routing traffic across 2 EC2 instances',
      'PHP deployment via EC2 User Data automation',
      'Validated both scale-out and scale-in operations',
    ],
    badges: ['AWS EC2', 'Auto Scaling', 'ALB', 'Launch Templates', 'Target Groups', 'Apache', 'PHP'],
    accent: 'from-blue-500/10 to-cyan-500/5',
    borderHover: 'hover:border-blue-300',
  },
  {
    title: 'WordPress Infrastructure Automation using Ansible & AWS',
    icon: Globe,
    links: {
      github: 'https://github.com/Nandhitha-Binu/wordpress-ansible-aws',
    },
    description: 'Provisioned a LEMP-based WordPress platform using 8 reusable Ansible roles. Streamlined 10+ infrastructure tasks including WordPress, MariaDB, phpMyAdmin, SSL, SFTP, and permission management.',
    highlights: [
      '8 reusable Ansible roles for LEMP stack',
      'Let\'s Encrypt SSL with DuckDNS automation',
      'phpMyAdmin, SFTP, and permissions managed via IaC',
      'Production-ready with Nginx PHP-FPM + MariaDB',
    ],
    badges: ['AWS EC2', 'Ansible', 'Nginx', 'PHP-FPM', 'MariaDB', 'WordPress', 'phpMyAdmin', "Let\'s Encrypt"],
    accent: 'from-green-500/10 to-emerald-500/5',
    borderHover: 'hover:border-green-300',
  },
  {
    title: 'CI/CD Pipeline Automation with Jenkins',
    icon: Workflow,
    description: 'Developed 2 Jenkins CI/CD pipelines for Java (Tomcat) and Python (Docker) applications. Automated 100% of the Java build and deployment process from Maven packaging to Tomcat deployment.',
    highlights: [
      '2 pipelines: Java/Tomcat + Python/Docker',
      '100% automated Maven → Tomcat deployment',
      'GitHub Webhooks for zero-touch deployments',
      'Jenkinsfile-driven pipeline as code',
    ],
    badges: ['Jenkins', 'Docker', 'AWS EC2', 'GitHub Webhooks', 'Maven', 'Tomcat', 'Django'],
    accent: 'from-purple-500/10 to-violet-500/5',
    borderHover: 'hover:border-purple-300',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`project-card-hover glass-card-strong rounded-2xl border border-border ${project.borderHover} overflow-hidden group`}
    >
      {/* Gradient top strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent.replace('/10', '').replace('/5', '')}`}
        style={{ background: `linear-gradient(90deg, ${index === 0 ? '#F59E0B, #FDBA74' : index === 1 ? '#3B82F6, #06B6D4' : index === 2 ? '#22C55E, #10B981' : '#A855F7, #8B5CF6'})` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0 border border-border`}>
            <project.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-foreground text-base leading-snug">{project.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        {/* Expanded Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-1.5 text-sm py-2 px-3 no-underline"
                >
                  <GithubIcon size={14} />
                  View on GitHub
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-xs bg-muted text-muted-foreground font-medium px-2 py-0.5 rounded-full border border-border skill-badge"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn-primary flex items-center gap-1.5 text-sm py-2 px-3"
          >
            {expanded ? 'Show Less' : 'View Details'}
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            What I&apos;ve Built
          </span>
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Real infrastructure projects demonstrating AWS architecture, automation, and DevOps practices.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}