module.exports = {
  darkMode: "media",
  theme: {
    screens: {
      sm: { max: "600px" },
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('https://i.imgur.com/FX8s35u.png')",
      }),
      zIndex: {
        "-10": "-10",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
        },
        purple: {
          nmr: "#52195A",
          new: "#5E00FF",
          dark: "#682AEB",
          light: "#8D5FF0",
          superL: "#BE9FFF",
          cool: "#DFC9E7",
          newnew: "#BA6D96",
        },
        orange: {
          new: "#FE855A",
          dark: "#BF5833",
        },
        green: {
          new: "#889257",
          light: "#99AF32",
        },
        blue: {
          new: "#9BC4E4",
          nmr: "#073F9E",
          lite: "#8BA2B9",
        },
        brown: {
          nmr: "#CA8469",
        },
      },
      spacing: {
        screen: "100vw",
        full: "100%",
        px: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        40: "40px",
        44: "44px",
        48: "48px",
        52: "52px",
        56: "56px",
        60: "60px",
        64: "64px",
        72: "72px",
        80: "80px",
        96: "96px",
        100: "100px",
        120: "120px",
        200: "200px",
        270: "270px",
        300: "300px",
        325: "325px",
        400: "400px",
        425: "425px",
        500: "500px",
        600: "600px",
        1000: "1000px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "100%",
        "50%": "50%",
        16: "4rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        lg: "8px",
      },
      fontFamily: {
        sans: [
          // Sinkin Sans
          // '"Hanalei"',
          "Mulish",
          "sinkin-sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: ["ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      fontWeight: {
        black: "900",
        650: "650",
      },
      fontSize: {
        0: "0",
        xs: "7px",
        sm: "9px",
        base: "14px",
        lg: "22px",
        xl: "41px",
        eleven: "11px",
        button: "12px",
        8: "8px",
        10: "10px",
        15: "15px",
        18: "18px",
        20: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },
      inset: (theme) => ({
        ...theme("spacing"),
      }),
      letterSpacing: (theme) => ({
        ...theme("spacing"),
      }),
      lineHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  plugins: [require("tailwindcss-mso")()],
};
