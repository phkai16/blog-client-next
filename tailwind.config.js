/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "banner-1": "url('https://unsplash.com/photos/diU9oIZ152Y')",
        "banner-2":
          "url('https://images.unsplash.com/photo-1675868128582-ad1f18166670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
