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
const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`;
  return acc;
}, {});

export const theme = {
  colors,
  device,
  weight: {
    thin: 400,
    normal: 600,
    bold: 800
  },
  size: {
    $14: "14px",
    $16: "16px",
    $18: "18px",
    $20: "20px",
    $22: "22px",
    $24: "24px",
    $26: "26px",
    $32: "32px"
  }
};
