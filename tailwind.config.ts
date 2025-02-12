import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      serif: ["DM Sans", "serif"],
    },
    extend: {
      colors: {
        lightGray: {
          1: "#f5f5f5",
          2: "#f6f6f6",
          3: "#dbdbdb",
          4: "#b1b1b1",
          5: "#dddddd",
        },
        gray: {
          1: "#d9d9d9",
          2: "#aaaaaa",
          3: "#7a7a7a",
        },
        darkGray: {
          1: "#4f4f4f",
        },
        red: {
          1: "#ff1500",
        },
        blue: {
          1: "#6cceff",
        },
        green: {
          1: "#b8ff47",
        },
        orange: {
          1: "#ff5900",
        },
        purple: {
          1: "#5500ff",
        },
      },
      ringColor: {
        "gray-1": "#d9d9d9",
        "gray-2": "#aaaaaa",
        black: "#000000",
        "lightGray-3": "#dbdbdb",
        "red-1": "#ff1500",
      },
      borderColor: {
        "gray-1": "#d9d9d9",
        "gray-2": "#aaaaaa",
      },
      backgroundColor: {
        overlay: "#00000033",
        "black-100": "#1b1b1b",
      },
      textColor: {
        "gray-3": "#7a7a7a",
        "lightGray-4": "#b1b1b1",
      },
      dropShadow: {
        sidebar: "0px 19px 21.4px #00000014",
      },
      boxShadow: {
        button: "0px 7px 12.7px 0px #0000004D",
        dropdown: "0px 7px 14.4px 0px #00000012",
      },
      fontSize: {
        lg: ["1.125rem", "1.5rem"],
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
      },
      lineHeight: {
        "10.5": "2.625rem",
        "13": "3.25rem",
      },
    },
  },
};
