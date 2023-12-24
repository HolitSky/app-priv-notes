/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "rubik-doodle": ["Rubik-Doodle", "Sofia-Pro"],
        "sofia-pro": ["Sofia-Pro", "sans-serif"],
      },
      backgroundImage: {
        "hero-img":
          "url(https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      },
    },
  },
  plugins: [],
};
