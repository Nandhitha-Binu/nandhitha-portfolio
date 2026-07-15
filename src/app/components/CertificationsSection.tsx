'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const certifications = [
  {
    title: 'Outstanding RHEL Troubleshooting Performance',
    issuer: 'IPSR Solutions Limited',
    score: '94/100',
    scoreValue: 94,
    description: 'Earned Outstanding Performance recognition for diagnosing CPU, Apache, network, and permission-related issues in the RHEL Troubleshooting Lab Assessment.',
    icon: Trophy,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-200 dark:border-amber-500/30',
    badge: 'Outstanding',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  },
  {
    title: 'Root Access Challenge — Perfect Score',
    issuer: 'IPSR Solutions Limited',
    score: '10/10',
    scoreValue: 100,
    description: 'Demonstrated proficiency in package management, user and group administration, permissions, security configurations, and shell scripting.',
    icon: Star,
    color: 'text-yellow-500 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-500/10',
    border: 'border-yellow-200 dark:border-yellow-500/30',
    badge: 'Perfect Score',
    badgeColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
  },
  {
    title: 'Container Lab Assessment',
    issuer: 'IPSR Solutions Limited',
    score: '9.5/10',
    scoreValue: 95,
    description: 'Deployed AlmaLinux environments using Podman under resource-constrained conditions in the Container-Driven Virtual Lab Assessment.',
    icon: Award,
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/30',
    badge: 'High Distinction',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  },
  {
    title: 'Artificial Intelligence Internship Certification',
    issuer: 'Pace Lab, Kochi',
    score: null,
    scoreValue: null,
    description: 'Completed AI internship program covering machine learning fundamentals and practical AI applications.',
    icon: Award,
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    border: 'border-purple-200 dark:border-purple-500/30',
    badge: 'Certified',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Recognition
          </span>
          <h2 className="section-heading">Certifications & Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications?.map((cert, i) => {
            const Icon = cert?.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  {/* Score ring / Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${cert?.bg} ${cert?.border} border flex items-center justify-center flex-shrink-0`}>
                    {cert?.score ? (
                      <div className="text-center">
                        <div className={`text-base font-display font-bold ${cert?.color}`}>{cert?.score}</div>
                      </div>
                    ) : (
                      <Icon size={24} className={cert?.color} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug">{cert?.title}</h3>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{cert?.issuer}</div>
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${cert?.badgeColor}`}>
                      {cert?.badge}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cert?.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}