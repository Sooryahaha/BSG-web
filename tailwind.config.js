/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1F3A", // Deep Navy
          dark: "#060F1E",
          light: "#173060",
        },
        accent: {
          DEFAULT: "#2563EB", // Bright Blue
          light: "#DBEAFE", // Soft Blue
          dark: "#1D4ED8",
        },
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC", // Light Gray
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          muted: "#F1F5F9",
        },
        text: {
          DEFAULT: "#0B1F3A",
          muted: "#5B6B7C",
          faint: "#94A3B8",
        },
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "sans-serif"],
        serif: ["Playfair Display", "DM Serif Display", "serif"],
        display: ["Playfair Display", "serif"],
      },
      fontSize: {
        "hero": ["clamp(3.25rem, 8vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-h": ["clamp(2.25rem, 5vw, 2.625rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "110px", // 90-110px
        "section-sm": "90px",
      },
      borderRadius: {
        card: "16px", // 12-16px
        "card-lg": "24px",
      },
      boxShadow: {
        premium: "0 2px 8px rgba(11,31,58,0.04), 0 8px 32px rgba(11,31,58,0.06)",
        "premium-hover": "0 12px 48px rgba(11,31,58,0.12), 0 4px 16px rgba(37,99,235,0.08)",
        soft: "0 4px 20px rgba(0,0,0,0.04)",
        navy: "0 24px 64px rgba(11,31,58,0.25), 0 8px 24px rgba(11,31,58,0.12)",
        "accent-glow": "0 4px 24px rgba(37,99,235,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "sweep": {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(300%) skewX(-15deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        sweep: "sweep 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(11,31,58,0.06) 1px, transparent 1px)",
        "grid-pattern":
          "linear-gradient(rgba(11,31,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "grid-md": "40px 40px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".glass-card": {
          background: "rgba(255, 255, 255, 0.7)",
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          "box-shadow": "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        },
        ".glass-navy": {
          background: "rgba(11, 31, 58, 0.85)",
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          "box-shadow": "0 24px 64px rgba(0,0,0,0.3)",
        },
        ".glass-blue-tint": {
          background: "rgba(59, 130, 246, 0.06)",
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
        },
        ".surface-card": {
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
          "box-shadow": "0 4px 24px rgba(0,0,0,0.04)",
        },
        ".text-gradient-navy": {
          "background-image": "linear-gradient(135deg, #0B1F3A 0%, #3B82F6 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".container-main": {
          width: "100%",
          "max-width": "1240px",
          "margin-left": "auto",
          "margin-right": "auto",
          "padding-left": "1.5rem",
          "padding-right": "1.5rem",
        },
        ".section-py": {
          "padding-top": "96px",
          "padding-bottom": "96px",
        },
        ".ambient-light-top": {
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          "pointer-events": "none",
        },
        ".ambient-light-bottom": {
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(11,31,58,0.06) 0%, transparent 70%)",
          "pointer-events": "none",
        },
      });
    },
  ],
};