/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0d17',
        mint: '#b4f4d9',
        coral: '#ff7f70',
        lemon: '#f3e979',
        aqua: '#5dd3f3',
        violet: '#c29bff'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        card: '8px 8px 0px #0c0d17'
      },
      borderRadius: {
        funky: '18px'
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(12,13,23,0.2) 1px, transparent 1px), linear-gradient(180deg, rgba(12,13,23,0.2) 1px, transparent 1px)',
        sheen: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0))'
      }
    }
  },
  plugins: []
};
