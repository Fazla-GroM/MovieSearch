import React, { useState, useEffect, useRef } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Container from "../components/Container"
import Swiper from "react-id-swiper"
import MovieCard from "../components/MovieCard"

const FeaturedMovies = ({ title, data, cardLink }) => {
  const theme = useTheme()

  const checkAndResizeSwiperData = arr => {
    const maxSlideLimit = 20
    if (arr.length > maxSlideLimit) {
      return arr.slice(0, maxSlideLimit)
    }
    return arr
  }

  const cssFeaturedMovies = css({
    margin: "0 1.5rem",
    marginBottom: theme.margins.sectionMarginBottom,
    ...theme.shadows.shadowOne,
    ...theme.borderRadius,
    padding: "2rem 0",

    [theme.mq[0]]: {
      boxShadow: "none",
    },

    ".swiper-container": {
      margin: "0 -1.5rem",
    },

    ".swiper-wrapper": {
      boxSizing: "border-box",
      padding: "3.5rem 0",
    },

    ".swiper-slide": {
      height: "auto",
    },
  })

  const cssContainerFaturedMovies = css({
    padding: "0 1.5rem",
  })

  const cssTitle = css({
    ...theme.titles.titleSecondary,
  })
  const swiperParams = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    freeMode: true,
    rebuildOnUpdate: true,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 6,
        centeredSlides: false,
      },
    },
  }

  return (
    <section css={cssFeaturedMovies}>
      <Container css={cssContainerFaturedMovies}>
        <h2 css={cssTitle}>{title}</h2>
      </Container>

      <Swiper {...swiperParams}>
        {checkAndResizeSwiperData(data).map(movie => {
          return (
            <div key={movie.id * Math.random()}>
              <MovieCard link={cardLink} data={movie} />
            </div>
          )
        })}
      </Swiper>
    </section>
  )
}

export default FeaturedMovies

/*
 {data.length && (
        <Swiper {...params}>
          {data.map(movie => {
            return (
              <div key={movie.id * Math.random()}>
                <MovieCard data={movie} />
              </div>
            )
          })}
        </Swiper>
      )}



*/
