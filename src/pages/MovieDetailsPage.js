import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getMovie, clearMovie } from "../redux/movies/moviesActions"
import { selectMovie } from "../redux/movies/moviesSelectors"
import Container from "../components/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faImdb,
} from "@fortawesome/free-brands-svg-icons"
import MovieCard from "../components/MovieCard"
import Swiper from "react-id-swiper"

const IMG_URL = process.env.IMAGE_URL

const MovieDetailsPage = props => {
  const theme = useTheme()
  const routeParams = useParams()
  const dispatch = useDispatch()
  const pageData = useSelector(selectMovie)

  console.log({ pageData })

  useEffect(() => {
    dispatch(getMovie(routeParams.id))
    return () => {
      dispatch(clearMovie())
    }
  }, [])

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

  const cssMovieDetailsPage = css({
    margin: "4rem 1.5rem 0 1.5rem",
    marginBottom: theme.margins.sectionMarginBottom,
    ...theme.shadows.shadowOne,
    ...theme.borderRadius,
    padding: "2rem 0",

    ".swiper-container": {
      margin: "0 -1.5rem",
    },

    ".swiper-wrapper": {
      boxSizing: "border-box",
      padding: "2.5rem 0",
    },

    ".swiper-slide": {
      height: "auto",
    },
  })

  const cssTitleContainer = css({
    padding: "0 1.5rem 2rem 1.5rem",
  })

  const cssTitle = css({
    ...theme.titles.titleSecondary,
  })

  const cssImageContainer = css({
    width: "100%",

    //overflow: "hidden",

    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  })
  const cssOverviewContainer = css({
    padding: "2rem 1.5rem",
    color: theme.colors.fontSecondary,

    "&>:not(:last-child)": {
      marginBottom: "1rem",
    },

    h4: {
      ...theme.titles.titleFour,
      color: theme.colors.fontMain,
    },

    ".rating, .language": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      "& span": {
        marginLeft: "1.5rem",
        fontWeight: "700",
        color: theme.colors.primary,
        textTransform: "uppercase",
      },
    },
  })

  const cssSocialList = css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& li, a": {
      //width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.primary,
    },

    "& svg": {
      fontSize: "2.5rem",
    },
  })

  const cssCollectionContainer = css({
    padding: "0 1.5rem",

    "& h3": {
      ...theme.titles.titleTerciary,
    },
  })

  return (
    <section css={cssMovieDetailsPage}>
      <Container css={cssTitleContainer}>
        <h2 css={cssTitle}>{pageData.title}</h2>
      </Container>
      <Container css={cssImageContainer}>
        <picture>
          <img
            src={`${IMG_URL}/w342${pageData.poster_path}`}
            alt={pageData.title}
          />
        </picture>
      </Container>
      <Container css={cssOverviewContainer}>
        <h4>{pageData.tagline}</h4>
        <ul css={cssSocialList}>
          {pageData.homepage && (
            <li>
              <a
                href={pageData.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          )}
          {pageData.external_ids?.facebook_id && (
            <li>
              <a
                href={`https://www.facebook.com/${pageData.external_ids.facebook_id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
          )}
          {pageData.external_ids?.instagram_id && (
            <li>
              <a
                href={`https://www.instagram.com/${pageData.external_ids.instagram_id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          )}
          {pageData.external_ids?.twitter_id && (
            <li>
              <a
                href={`https://www.twitter.com/${pageData.external_ids.twitter_id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Page"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          )}
          {pageData.external_ids?.imdb_id && (
            <li>
              <a
                href={`https://www.imdb.com/${pageData.external_ids.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Imdb Page"
              >
                <FontAwesomeIcon icon={faImdb} />
              </a>
            </li>
          )}
        </ul>
        <div className="language">
          Language: <span>{pageData.original_language}</span>
        </div>
        <div className="rating">
          Average Rating: <span>{pageData.vote_average}</span>
        </div>
        <p>{pageData.overview}</p>
      </Container>
      <Container css={cssCollectionContainer}>
        {pageData.collection?.name && <h3>{pageData.collection.name}</h3>}
      </Container>
      {pageData.collection && (
        <Swiper {...swiperParams}>
          {pageData.collection.parts.map(movie => {
            return (
              <div key={movie.id}>
                <MovieCard data={movie} link="/search" />
              </div>
            )
          })}
        </Swiper>
      )}
    </section>
  )
}

export default MovieDetailsPage
