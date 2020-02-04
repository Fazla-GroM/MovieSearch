import React from "react"
import { css } from "@emotion/core"
import { useLocation } from "react-router-dom"
import { useTheme } from "emotion-theming"
import MovieCard from "../components/MovieCard"
import Container from "../components/Container"
const SearchPage = props => {
  const location = useLocation()
  const theme = useTheme()
  console.log({ location })

  const cssTitle = css({
    ...theme.titles.titleSecondary,
  })

  const cssGrid = css({
    marginTop: "3rem",
    padding: "0 1.5rem",
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr",
    gridRowGap: "1.5rem",
  })

  return (
    <>
      <Container css={cssGrid}>
        {location.data &&
          location.data.map(movie => {
            return <MovieCard key={movie.id} data={movie} />
          })}
      </Container>
    </>
  )
}

export default SearchPage
