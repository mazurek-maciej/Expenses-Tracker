import { colors } from "./colors";

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};
export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur]}px)`;
  return acc;
}, {});

export const theme = {
  colors,
  weight: {
    thin: 400,
    normal: 600,
    bold: 800
  },
  size: {
    $small: "14px",
    $normal: "16px",
    $h6: "18px",
    $h5: "20px",
    $h3: "22px",
    $h3: "24px",
    $h2: "26px",
    $h1: "32px"
  }
};
