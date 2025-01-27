/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
    primary: '#6366F1',     // Indigo for main brand/actions
    secondary: '#22D3EE',   // Cyan for accents
    background: '#0F172A',  // Dark slate for main background
    surface: '#1E293B',     // Lighter slate for cards/components
    text: '#F8FAFC',        // Off-white for primary text
    textMuted: '#94A3B8',   // Slate for secondary text
    success: '#34D399',     // Emerald for positive states
    error: '#FB7185',       
    },
    fontFamily: {
      comfortaa: ['Comfortaa'],
      montserrat: ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
};
