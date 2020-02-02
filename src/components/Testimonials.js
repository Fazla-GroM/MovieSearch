import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Swiper from "react-id-swiper"
import Container from "../components/Container"
import TestimonialCard from "../components/TestimonialCard"
import "swiper/css/swiper.css"

import bgImage from "../assets/images/bg.jpg"

const Testimonials = () => {
  const theme = useTheme()

  const cssTestimonials = css({
    width: "100%",
    marginBottom: theme.margins.sectionMarginBottom,
    padding: "0 1.5rem",

    ".swiper-container": {
      height: "100%",
    },

    ".swiper-wrapper": {
      boxSizing: "border-box",
    },
  })

  const cssContainerTestimonials = css({
    height: "100%",
  })

  const cssHolder = css({
    ...theme.shadows.shadowOne,
    ...theme.borderRadius,
    overflow: "hidden",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgrounPosition: "center",
    backgroundAttachment: "fixed",
    padding: "1rem",
  })

  const cssOverlay = css({
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    ...theme.borderRadius,
  })

  const params = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  }

  return (
    <section css={cssTestimonials}>
      <div css={cssHolder}>
        <div css={cssOverlay}>
          <Container css={cssContainerTestimonials}>
            <Swiper {...params}>
              <div>
                <TestimonialCard />
              </div>
              <div>
                <TestimonialCard />
              </div>

              <div>
                <TestimonialCard />
              </div>
            </Swiper>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
