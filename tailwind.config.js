/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        lg: '3rem',
      },
    },
    extend: {
      colors: {
        ink: '#11100E',
        onyx: '#1A1815',
        smoke: '#6C655C',
        mist: '#E5DED3',
        sand: '#F3EEE6',
        ivory: '#FBF9F5',
        bronze: '#A78555',
        forest: '#1F3A34',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.7rem' }],
        lg: ['1.125rem', { lineHeight: '1.8rem' }],
        xl: ['1.25rem', { lineHeight: '1.9rem' }],
        title: ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.25' }],
        headline: ['clamp(2.1rem, 3.5vw, 2.9rem)', { lineHeight: '1.15' }],
        display: ['clamp(2.7rem, 5vw, 4.2rem)', { lineHeight: '1.05' }],
      },
      spacing: {
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
        section: 'clamp(4rem, 8vw, 7rem)',
        'section-lg': 'clamp(5rem, 10vw, 9rem)',
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(17, 16, 14, 0.5)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.4em',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
