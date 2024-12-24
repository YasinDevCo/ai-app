/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        customGray1: "rgba(23,23,23,1)",
        customGray2: "rgba(33,33,33,1)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(98deg, rgba(144,93,255,1) 0%, rgba(86,56,153,1) 100%)",
        "custom-gradient2":
          "linear-gradient(98deg, rgba(255,255,255,1) 1%, rgba(217,217,217,1) 28%, rgba(144,93,255,1) 100%)",
        "background-image": "url('../assets/bgcover.png')",
        "background-image-1": "url('../assets/Frame 1.png')",
        "background-image-2": "url('../assets/Frame 3.png')",
        "background-image-3": "url('../assets/Frame 4.png')",
        "background-image-4": "url('../assets/Frame 5.png')",
        "black-overlay":
          "liner-gradient(to bottom ,rgba(0,0,20,0) 0%,rgba(0,30,40,50.8) 100%)",
      },
    },
  },
  plugins: [],
};
