import React from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"
import MobileLayout from "./MobileLayout"
import TabletLayout from "./TabletLayout"
import DesktopLayout from "./DesktopLayout"
import useMediaQuery from "../hooks/useMediaQuerry"
import "swiper/css/swiper.css"

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 1200px)")

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
            font-smoothing: antialiased;
          }
          html {
            height: 100%;
            font-size: 62.5%;
            box-sizing: border-box;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          body {
            height: 100%;
            overflow-y: scroll;
            line-height: 1.6;
            font-family: "Poppins", Sans Serif;
            font-size: 1.6rem;
            background-color: #fff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          a {
            text-decoration: none;
          }

          #App {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .page-enter {
            position: fixed;
            overflow: hidden;
            height: 100%;
            z-index: 2;
            transform: translate3d(-100%, 0, 0);
          }

          .page-enter-active {
            height: 100%;
            position: fixed;
            overflow: hidden;
            z-index: 2;
            transform: translate3d(0, 0, 0);
            transition: all 0.5s 0.2s;
          }

          .page-exit {
            height: 100%;
            position: fixed;
            overflow: hidden;
            transform: scale(1);
            z-index: 1;
            opacity: 1;
          }

          .page-exit-active {
            height: 100%;
            position: fixed;
            overflow: hidden;
            transform: scale(0.2);
            z-index: 1;
            opacity: 0;
            transition: all 0.5s;
          }
        `}
      />
      {isMobile && <MobileLayout />}
      {isTablet && !isDesktop && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </>
  )
}

export default Layout
