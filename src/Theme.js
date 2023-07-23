import { ThemeProvider } from "styled-components";

const formTheme = {
  fontFamily: ["Poppins", "sans-serif"],
  colors: { primary: "#F2877D", secondary: "#000", blue: "#4F70B5", white: "#FFFFFF", steelGrey: "#E2E6E9" },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={formTheme}>{children}</ThemeProvider>;
};
