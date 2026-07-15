'use client';
import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-border bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-medium">
            © 2025 Nandhitha Binu. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.github.com/Nandhitha-Binu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/nandhitha-binu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:nandhithabinu2020@gmail.com"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}