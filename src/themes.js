import { createGlobalStyle } from "styled-components";
import BackgroundSVG from "./assets/background-stars.svg";

export const themes = {
  colors: {
    textColor: "#fff",
    bgColor: "#070724",
    btnHover: "#38384F",
    borderBottom: "rgba(255, 255, 255, 0.1)",
    planetColors: {
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6D2ED5",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1EC1A2",
      neptune: "#2D68F0",
    },
  },
  fonts: {
    primary: "'Antonio', sans-serif",
    secondary: "'League Spartan', sans-serif",
  },
  backgroundImg: `url(${BackgroundSVG})`,
};

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
      background-image: ${themes.backgroundImg};
      background-repeat: no-repeat;
      background-color: ${themes.colors.bgColor};
      color: ${themes.colors.textColor};
    }
`;
