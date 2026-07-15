'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Network, Settings, Container, GitBranch, ChartNoAxesCombined, MonitorCog, Database, Terminal } from 'lucide-react';


const skillCategories = [
  {
    category: 'Linux & System Administration',
    icon: Server,
    skills: ['RHEL 8', 'User & Group Management', 'Linux Permissions', 'YUM/DNF/RPM', 'LVM', 'Troubleshooting', 'Systemd', 'SELinux', 'Firewalld', 'SCP'],
  },
  {
    category: 'AWS Cloud',
    icon: Cloud,
    skills: ['EC2', 'IAM', 'VPC', 'Elastic IP', 'CloudWatch', 'Lambda', 'Auto Scaling', 'Launch Templates', 'ALB', 'AWS CLI', 'EventBridge', 'RDS'],
  },
  {
    category: 'Networking',
    icon: Network,
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'VPC', 'NAT Gateway', 'Security Groups', 'SSH'],
  },
  {
    category: 'Automation & IaC',
    icon: Settings,
    skills: ['Ansible Playbooks', 'Ansible Roles', 'Jinja2 Templates', 'Terraform'],
  },
  {
    category: 'Containers',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'Containerization', 'Podman'],
  },
  {
    category: 'CI/CD & DevOps',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Jenkins', 'GitHub Webhooks', 'CI/CD Pipelines', 'Maven'],
  },
  {
    category: 'Monitoring & Alerting',
    icon: ChartNoAxesCombined,
    skills: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'Node Exporter'],
  },
  {
    category: 'Web & App Servers',
    icon: MonitorCog,
    skills: ['Apache HTTP Server', 'Nginx', 'PHP-FPM', 'SSL/TLS', 'Apache Tomcat'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MariaDB', 'phpMyAdmin'],
  },
  {
    category: 'Programming & Scripting',
    icon: Terminal,
    skills: ['Python', 'Shell Scripting (Bash)', 'YAML'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Technical Expertise
          </span>
          <h2 className="section-heading">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories?.map((cat, catIndex) => (
            <motion.div
              key={cat?.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-5 border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground text-sm">{cat?.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat?.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs bg-muted text-muted-foreground font-medium px-2.5 py-1 rounded-full border border-border cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}