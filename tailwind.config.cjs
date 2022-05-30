module.exports = {
  content: ['./src/{routes,sections,components}/**/*.{svelte,js,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
};
