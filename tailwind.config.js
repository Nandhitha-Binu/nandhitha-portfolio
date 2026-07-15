/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
      container: {
        center: true,
        padding: '1rem',
      },
      extend: {
        colors: {
          background: { DEFAULT: 'var(--background)' },
          foreground: { DEFAULT: 'var(--foreground)' },
          primary: {
            DEFAULT: 'var(--primary)',
            foreground: 'var(--primary-foreground)',
          },
          secondary: {
            DEFAULT: 'var(--secondary)',
            foreground: 'var(--secondary-foreground)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)',
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)',
          },
          card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)',
          },
          border: { DEFAULT: 'var(--border)' },
          input: { DEFAULT: 'var(--input)' },
          ring: { DEFAULT: 'var(--ring)' },
          success: { DEFAULT: 'var(--success)' },
        },
        borderRadius: {
          DEFAULT: 'var(--radius)',
          sm: 'calc(var(--radius) - 0.25rem)',
          lg: 'calc(var(--radius) + 0.25rem)',
          xl: 'calc(var(--radius) + 0.5rem)',
          '2xl': 'calc(var(--radius) + 1rem)',
        },
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'],
          display: ['Space Grotesk', 'sans-serif'],
        },
        boxShadow: {
          'amber-sm': '0 0 20px rgba(245, 158, 11, 0.2), 0 4px 16px rgba(0, 0, 0, 0.08)',
          'amber-md': '0 0 40px rgba(245, 158, 11, 0.25), 0 0 80px rgba(245, 158, 11, 0.1)',
          'card-hover': '0 20px 60px rgba(245, 158, 11, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
          'glass': '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
          'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        },
        keyframes: {
          'fade-up': {
            '0%': { opacity: '0', transform: 'translateY(24px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          'fade-in': 'fade-in 0.5s ease forwards',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };