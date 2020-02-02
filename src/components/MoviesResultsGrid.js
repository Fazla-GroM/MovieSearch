import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useDispatch, useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import Container from "./Container"
import { ReactComponent as LoadIcon } from "../assets/images/refresh.svg"
import { ReactComponent as NoLoadIcon } from "../assets/images/close.svg"

const MoviesResultsGrid = ({ title, getPageData, selectPageData }) => {
  const dispatch = useDispatch()
  const pageData = useSelector(selectPageData)
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!pageData.results.length) {
      dispatch(getPageData(pageData.pageToFetch))
    }
  }, [])

  const handleLoadMoreMovies = () => {
    if (pageData.hasMore) {
      dispatch(getPageData(pageData.pageToFetch))
    }
  }

  const cssMoviesResults = css({
    marginTop: "5rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  })

  const cssMoviesResultsContainer = css({
    padding: "0 1.5rem 2rem 1.5rem",
  })

  const cssTitle = css({
    ...theme.titles.titleSecondary,
  })

  const cssGrid = css({
    padding: "0 1.5rem",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridRowGap: "1rem",
    gridColumnGap: "1rem",
  })

  const cssLoadButton = css({
    width: "5.6rem",
    height: "5.6rem",
    borderRadius: "10rem",
    border: "none",
    backgroundColor: theme.colors.primary,
    ...theme.shadows.shadowOne,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    alignSelf: "center",
    margin: "2rem 0 0 0",

    "& svg": {
      fill: "white",
      animation: isLoading
        ? `${theme.animations.rotate} 2s infinite forwards`
        : "none",
    },
  })

  return (
    <section css={cssMoviesResults}>
      <Container css={cssMoviesResultsContainer}>
        <h2 css={cssTitle}>{title}</h2>
      </Container>
      <Container css={cssGrid}>
        {pageData.results.map(movie => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </Container>
      <button
        css={cssLoadButton}
        onClick={handleLoadMoreMovies}
        aria-label={pageData.hasMore ? "Load More Movies" : "No more Movies"}
      >
        {pageData.hasMore ? <LoadIcon /> : <NoLoadIcon />}
      </button>
    </section>
  )
}

export default MoviesResultsGrid
