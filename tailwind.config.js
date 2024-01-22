/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(255, 255, 255, 0.05)",
          "300": "rgba(255, 255, 255, 0.1)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        beyonders: "Beyonders",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      base: "16px",
      xl: "20px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
