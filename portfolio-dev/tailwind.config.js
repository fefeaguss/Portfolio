/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './components/**/*.{astro,html,js,jsx,ts,tsx}',

  ],
  darkMode: 'class',
important: true,
  theme: {
    extend: {
        colors: {
      azulpersonal: '#09C4FB',
    },
    },
  },
  plugins: [],
  
}

