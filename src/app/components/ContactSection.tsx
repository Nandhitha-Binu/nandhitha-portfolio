'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import Icon from '@/components/ui/AppIcon';



export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'nandhithabinu2020@gmail.com', href: 'mailto:nandhithabinu2020@gmail.com' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/nandhitha-binu', href: 'https://www.linkedin.com/in/nandhitha-binu' },
    { icon: GithubIcon, label: 'GitHub', value: 'github.com/Nandhitha-Binu', href: 'https://www.github.com/Nandhitha-Binu' },
    { icon: MapPin, label: 'Location', value: 'Kottayam, Kerala, India', href: null },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-heading mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Open to cloud infrastructure, DevOps, and Linux administration roles. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="glass-card-strong rounded-2xl p-6 border border-border dark:border-white/10 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] h-full">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/15 dark:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">Contact Details</h3>
                <p className="text-sm text-muted-foreground">Reach out through any of these channels.</p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted dark:bg-white/5 dark:border dark:border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-foreground hover:text-primary transition-colors no-underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-foreground">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Availability badge */}
              <div className="mt-6 p-3 rounded-xl bg-success/10 dark:bg-success/10 border border-success/20 dark:border-success/25 dark:shadow-[0_0_16px_rgba(34,197,94,0.08)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-success">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="glass-card-strong rounded-2xl p-6 border border-border dark:border-white/10 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <CheckCircle size={48} className="text-success" />
                  <h3 className="font-display font-bold text-foreground text-xl">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground dark:text-slate-300 mb-1.5 tracking-wide">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 dark:hover:bg-white/8 text-foreground placeholder-muted-foreground dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary/70 dark:focus:shadow-[0_0_16px_rgba(245,158,11,0.12)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground dark:text-slate-300 mb-1.5 tracking-wide">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 dark:hover:bg-white/8 text-foreground placeholder-muted-foreground dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary/70 dark:focus:shadow-[0_0_16px_rgba(245,158,11,0.12)] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground dark:text-slate-300 mb-1.5 tracking-wide">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Job opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 dark:hover:bg-white/8 text-foreground placeholder-muted-foreground dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary/70 dark:focus:shadow-[0_0_16px_rgba(245,158,11,0.12)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground dark:text-slate-300 mb-1.5 tracking-wide">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl border border-border dark:border-white/10 bg-white/60 dark:bg-white/5 dark:hover:bg-white/8 text-foreground placeholder-muted-foreground dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary/70 dark:focus:shadow-[0_0_16px_rgba(245,158,11,0.12)] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}