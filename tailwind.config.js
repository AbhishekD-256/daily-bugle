/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: "1300px",
    },
    colors: {
      transparent: "transparent",
      primary: "#D73939",
      secondary: "#F7F7F7",
      white: "#ffffff",
      offwhite: "#F8F8F8",
      text: "#878787",
      darkblue: "#182135",
      badge: "rgba(235, 87, 87, 0.10)",
      lightorange: "rgba(251, 109, 58, 0.10)",
    },
    spacing: {
      0: "0px",
      xsm: "4px",
      sm: "16px",
      "sm-icon": "12px",
      md: "20px",
      icon: "24px",
      lg: "32px",
      48: "48px",
      side: "304px",
      320: "320px",
      336: "336px",
    },
    borderRadius: {
      xsm: "4px",
      sm: "8px",
      md: "12px",
      lg: "20px",
      full: "9999px",
    },
    boxShadow: {
      sm: "0px 6px 30px rgba(65, 84, 152, 0.08)",
      md: "0px 24px 64px -4px rgba(0, 0, 0, 0.04)",
      lg: "0px 20px 96px 10px rgba(0, 0, 0, 0.06)",
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xsm: ["11px", "16px"],
      sm: ["11px", "18px"],
      md: ["14px", "24px"],
      body: ["16px", "24px"],
      lg: ["24px", "32px"],
    },
  },
};
