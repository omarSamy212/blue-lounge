/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
      },
      screens: {
        xs: "360px",   // للموبايلات الصغيرة جدًا
        sm: "480px",   // الموبايلات المتوسطة
        md: "768px",   // التابلت
        lg: "1024px",  // اللابتوب
        xl: "1280px",  // الديسكتوب
        "2xl": "1536px", // الشاشات الكبيرة جدًا
      }
    },
  },
  plugins: [],
}
