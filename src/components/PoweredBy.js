import React from "react"
import { css } from "@emotion/core"
import Swiper from "react-id-swiper"
import Container from "./Container"
import bgImage from "../assets/images/bg.jpg"
import reactLogo from "../assets/images/React-icon.svg"
import reduxLogo from "../assets/images/redux.svg"
import tmdbLogo from "../assets/images/tmdb.svg"
import reactRouterLogo from "../assets/images/react-router.png"
import { useTheme } from "emotion-theming"

const PoweredBy = () => {
  const theme = useTheme()

  const cssPoweredBy = css({
    margin: "0 1.5rem",
    marginBottom: theme.margins.sectionMarginBottom,
    ...theme.borderRadius,

    ".swiper-slide": {
      height: "auto",
    },
  })

  const cssTitle = css({
    ...theme.titles.titleSecondary,
    marginBottom: "4rem",
  })

  const params = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    centerredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
        centeredSlides: false,
        autoplay: false,
        loop: false,
        spaceBetween: 25,
      },
    },
  }

  return (
    <section css={cssPoweredBy}>
      <Container>
        <h2 css={cssTitle}>Powered By</h2>
        <Swiper {...params}>
          <div>
            <LogoCard
              link="https://www.themoviedb.org/"
              image={tmdbLogo}
              alt="The Movie Database Logo"
            />
          </div>
          <div>
            <LogoCard
              link="https://reactjs.org/"
              image={reactLogo}
              alt="React Logo"
            />
          </div>
          <div>
            <LogoCard
              link="https://redux.js.org/"
              image={reduxLogo}
              alt="Redux Logo"
            />
          </div>
          <div>
            <LogoCard
              link="https://reacttraining.com/react-router/web/guides/quick-start"
              image={reactRouterLogo}
              alt="React Router Logo"
            />
          </div>
        </Swiper>
      </Container>
    </section>
  )
}

export default PoweredBy

const LogoCard = ({ image, alt, link }) => {
  const cssLogoCard = css({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  })

  const cssImageHolder = css({
    width: "100%",
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  })

  return (
    <a href={link} rel="noopener noreferrer" target="_blank" css={cssLogoCard}>
      <div css={cssImageHolder}>
        <img src={image} alt={alt} />
      </div>
    </a>
  )
}
