import React from "react"
import { Link, useLocation } from "react-router-dom"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { ReactComponent as HeartIcon } from "../assets/images/favorite.svg"

const IMG_URL = process.env.IMAGE_URL

const MovieCard = ({ data, link }) => {
  const location = useLocation()
  const theme = useTheme()

  const cssMovieCard = css({
    padding: "1rem",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    ...theme.borderRadius,
    ...theme.shadows.shadowTwo,
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",

    "&:hover": {
      ...theme.shadows.shadowOneHover,
    },
  })
  const cssImage = css({
    width: "100%",
    position: "relative",
    overflow: "hidden",
    ...theme.borderRadius,
  })

  const cssContent = css({
    backgroundColor: "white",
    padding: "1rem 0 3rem 0",
    color: theme.colors.fontSecondary,
    // height: "calc(100% - 23.1rem)",

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

    ".language": {},
  })

  const cssTitle = css({
    ...theme.titles.titleFour,
    color: theme.colors.fontMain,
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.colors.fontDisabled}`,
  })

  const cssBtnHolder = css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "0.5rem",
    left: "0",
    padding: "0 1.5rem",

    "& button": {
      outline: "none",
      color: theme.colors.primary,
      fontSize: "1.4rem",
      fontFamily: "inherit",
      fontWeight: "600",
      textTransform: "uppercase",
      backgroundColor: "white",
      border: "none",

      "& svg": {
        fill: theme.colors.fontDisabled,
      },
    },
  })

  return (
    <Link
      to={{
        pathname: `${link || location.pathname}/${data.id}`,
      }}
      css={cssMovieCard}
    >
      <picture>
        <source
          srcSet={`${IMG_URL}/w500${data.backdrop_path}`}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`${IMG_URL}/w780${data.backdrop_path} 780w,${IMG_URL}/w300${data.backdrop_path} 300w`}
          media="(min-width: 768px)"
        />
        <img
          css={cssImage}
          src={`${IMG_URL}/w300${data.backdrop_path}`}
          alt={data.title}
        />
      </picture>

      <div css={cssContent}>
        <h4 css={cssTitle}>{data.title}</h4>
        <div className="rating">
          Average Rating:
          <span>{data.vote_average}</span>
        </div>
        <div className="language">
          Language:
          <span>{data.original_language}</span>
        </div>
      </div>
      <div css={cssBtnHolder}>
        <button>details</button>
        <button aria-label="Like">
          <HeartIcon />
        </button>
      </div>
    </Link>
  )
}

export default MovieCard
