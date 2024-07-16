module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
          "tomato-ligth": "hsl(4deg 100% 67% / 25%)",
        },
        neutral: {
          "dark-slate-grey": "hsl(234, 29%, 20%)",
          "charcoal-grey": "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        body: "16px",
      },
    },
  },
  plugins: [],
};
