import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      serif: ["DM Sans", "serif"],
    },
    extend: {
      colors: {
        lightGray: {
          "1": "#f5f5f5",
          "2": "#f6f6f6",
        },
        gray: {
          1: "#d9d9d9",
          2: "#aaaaaa",
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
    },
  },
};
