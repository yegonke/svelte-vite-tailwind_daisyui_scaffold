module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        averta: ['Averta', 'Arial'],
        segeoui: ['SegeoUI', 'Arial'],
      },
    },
  },
  plugins: [require('daisyui')],
}
