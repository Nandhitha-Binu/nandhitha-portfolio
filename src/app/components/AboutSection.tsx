'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cloud, Cpu, GitBranch, Activity, Network } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const strengths = [
  { icon: Server, title: 'Linux Administration', desc: 'RHEL 8, Systemd, SELinux, Firewalld, LVM', color: 'text-orange-500' },
  { icon: Cloud, title: 'AWS Cloud', desc: 'EC2, IAM, VPC, Lambda, CloudWatch, RDS', color: 'text-blue-500' },
  { icon: Cpu, title: 'Infrastructure Automation', desc: 'Ansible, Terraform, Shell Scripting', color: 'text-purple-500' },
  { icon: GitBranch, title: 'CI/CD Pipelines', desc: 'Jenkins, Docker, GitHub Webhooks', color: 'text-green-500' },
  { icon: Activity, title: 'Monitoring & Alerting', desc: 'Prometheus, Grafana, Node Exporter', color: 'text-red-500' },
  { icon: Network, title: 'Networking', desc: 'TCP/IP, DNS, VPC, NAT Gateway, SSH', color: 'text-cyan-500' },
];

function StrengthCard({ icon: Icon, title, desc, color, index }: {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(245, 158, 11, 0.18)',}}
      className="glass-card rounded-xl p-5 border border-border cursor-default"
    >
      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3`}>
        <Icon size={20} className={color} />
      </div>
      <h3 className="font-display font-semibold text-foreground text-sm mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT */}
          <div className="flex-1 max-w-xl" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
                About Me
              </span>
              <h2 className="section-heading mb-6">
                Building Infrastructure<br />
                <span className="text-shimmer">That Just Works.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a Cloud & Infrastructure Engineer based in <strong className="text-foreground">Kottayam, Kerala</strong>,
                passionate about building reliable, automated, and highly available systems. My work sits at the
                intersection of Linux administration, cloud operations, and DevOps automation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a B.Tech in Computer Science (CGPA: <strong className="text-foreground">8.57</strong>) and
                hands-on experience at IPSR Solutions, I&apos;ve provisioned 10+ AWS EC2 instances, automated
                multi-tier infrastructure with Ansible, and built CI/CD pipelines that eliminate manual deployments.
              </p>

              {/* Education card */}
              <div className="glass-card rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">🎓</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm">
                      B.Tech — Computer Science & Engineering
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      College of Engineering, Kidangoor · APJ Abdul Kalam Technological University
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                        2021 – 2025
                      </span>
                      <span className="text-xs bg-success/10 text-success font-semibold px-2 py-0.5 rounded-full">
                        CGPA: 8.57
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Strength cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <StrengthCard key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}