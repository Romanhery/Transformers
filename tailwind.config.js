// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        danfo: ['var(--font-danfo)', 'serif'],
        dela: ['var(--font-dela-gothic-one)', 'sans-serif'],
        robotoSlab: ['var(--font-roboto-slab)', 'serif'],
        sourGummy: ['var(--font-sour-gummy)', 'sans-serif'],
        varela: ['var(--font-varela-round)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};