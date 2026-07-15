'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    role: 'Server Administrator Trainee',
    company: 'IPSR Solutions Limited',
    period: 'Jun 2026 – Present',
    location: 'Kerala, India',
    type: 'Full-time',
    color: 'bg-primary',
    achievements: [
      'Administered AWS infrastructure using IAM, AWS Lambda, and Amazon EventBridge, implementing scheduled EC2 lifecycle management and enforcing least-privilege access controls.',
      'Deployed and managed WordPress on AWS EC2 with Amazon RDS, integrating custom domains and configuring Apache virtual hosting for production-ready web hosting.',
      'Orchestrated a secure AWS VPC architecture with public/private subnets and NAT Gateway, enabling controlled communication between application and database tiers.',
      'Configured and maintained 5+ Linux web services using Ansible, including Nginx, PHP, MariaDB, SSL, SFTP, phpMyAdmin, and WordPress through Infrastructure as Code (IaC).',
    ],
    badges: ['IAM', 'Lambda', 'EventBridge', 'EC2', 'RDS', 'WordPress', 'Apache', 'VPC', 'NAT Gateway', 'Ansible', 'Nginx', 'MariaDB', 'SSL'],
  },
  {
    role: 'Cloud & DevOps Intern',
    company: 'IPSR Solutions Limited',
    period: 'Jan 2026 – Jun 2026',
    location: 'Kerala, India',
    type: 'Internship',
    color: 'bg-blue-500',
    achievements: [
      'Provisioned and secured 10+ AWS EC2 instances, implementing IAM policies, security groups, and SSH access controls across Linux environments.',
      'Automated Linux server configuration using Ansible, Terraform, and Shell scripting to improve infrastructure consistency.',
      'Containerized 3+ applications and engineered CI/CD pipelines using Docker, Jenkins, GitHub Webhooks, Maven, and Tomcat for automated application delivery.',
      'Completed 200+ hours of hands-on training in RHEL Linux, AWS, Ansible, Jenkins, Docker, and Terraform across automation, CI/CD, and AWS deployment projects.',
    ],
    badges: ['EC2', 'IAM', 'Ansible', 'Terraform', 'Shell Scripting', 'Docker', 'Jenkins', 'GitHub Webhooks', 'Maven', 'Tomcat'],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${exp.color} ring-4 ring-background shadow-amber-sm`} />
        {index < experiences.length - 1 && (
          <div className="timeline-line w-0.5 flex-1 mt-2" style={{ height: '100%', minHeight: '120px' }} />
        )}
      </div>

      <div className="glass-card rounded-2xl p-6 border border-border experience-card mb-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">{exp.role}</h3>
            <div className="text-primary font-semibold text-sm mt-0.5">{exp.company}</div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={12} />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={12} />
              {exp.location}
            </span>
            <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
              {exp.type}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className={`space-y-2 mb-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[500px]' : 'max-h-[80px]'}`}>
          {exp.achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1 flex-shrink-0">▸</span>
              {ach}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-primary font-semibold mb-4 hover:opacity-70 transition-opacity"
        >
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Show more</>}
        </button>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.badges.map((badge) => (
            <span
              key={badge}
              className="skill-badge text-xs bg-muted text-muted-foreground font-medium px-2.5 py-1 rounded-full border border-border"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Work History
          </span>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}