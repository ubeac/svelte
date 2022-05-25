module.exports = {
  content: ['./src/{routes,sections}/**/*.{svelte,js,ts}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
};
