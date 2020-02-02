import { keyframes } from "@emotion/core"
//media query breakpoints

export const breakpoints = [
  "only screen and (min-width: 768px)",
  "only screen and (min-width: 996px)",
  "only screen and (min-width: 1200px)",
]
const mq = breakpoints.map(bp => `@media ${bp}`)

//titles
const titles = {
  titlePrimary: {
    fontWeight: "700",
    fontSize: "4.5rem",
    [mq[0]]: {
      fontSize: "8rem",
    },
  },
  titleSecondary: {
    fontWeight: "600",
    fontSize: "2.5rem",
    lineHeight: "3rem",

    [mq[0]]: {
      fontSize: "4.5rem",
      lineHeight: "4.5rem",
    },
  },
  titleTerciary: {
    fontWeight: "600",
    fontSize: "1.8rem",

    [mq[0]]: {
      fontSize: "2.8rem",
    },
  },
  titleFour: {
    fontWeight: "600",
    lineHeight: "1.2",
    fontSize: "1.6rem",
  },
}

const margins = {
  sectionMarginBottom: "2.4rem",
}

const shadows = {
  shadowOne: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },
  shadowOneHover: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  shadowTwo: {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  shadowThree: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  shadowFour: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  shadowFive: {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
}

const borderRadius = { borderRadius: "4px" }

const rotate = keyframes`
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
`

export const lightTheme = {
  colors: {
    background: "#ffff",
    primary: "#6200ee",
    primaryHover: "rgba(98, 0, 238, 0.03)",
    primaryActive: "rgba(98, 0, 238, 0.4)",
    primarySelected: "rgba(98, 0, 238, 0.2)",
    primaryDark: "#3700b3",
    secondary: "#03dac6",
    secondaryDark: "#018786",
    error: "#b00020",
    white: "#ffff",
    fontMain: "rgba(0,0,0, 0.87)",
    fontSecondary: "rgba(0,0,0, 0.6)",
    fontDisabled: "rgba(0,0,0, 0.38)",
    whiteMain: "rgba(255,255,255,1)",
    whiteSecondary: "rgba(255,255,255,0.6)",
    whiteDisabled: "rgba(255,255,255,0.38)",
  },
  titles,
  shadows,
  borderRadius,
  margins,
  mq,
  animations: {
    rotate,
  },
}
