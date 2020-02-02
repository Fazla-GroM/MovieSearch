import React from "react"
import { NavLink, useRouteMatch } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setIsMobileSearchBarOpen } from "../redux/globals/globalsActions"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Swiper from "react-id-swiper"
import { ReactComponent as SearchIcon } from "../assets/images/search.svg"

const TopMobileTabNav = () => {
  const theme = useTheme()
  let matchMovies = useRouteMatch("/movies/:slug")
  const dispatch = useDispatch()
  console.log({ matchMovies })

  const cssHeader = css({
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    ...theme.shadows.shadowFour,
    zIndex: "1000",
  })

  const cssContentTop = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.colors.primary,
    padding: "0.4rem 1.5rem",
    minHeight: "5.1rem",
  })

  const cssLogo = css({
    fontWeight: "700",
    color: "white",
  })

  const cssSearchButton = css({
    backgroundColor: "transparent",
    border: "none",
    outline: "none",

    "& svg": {
      fill: "White",
    },
  })

  const cssNav = css({
    maxWidth: "1336px",
    width: "100%",
    backgroundColor: "white",

    ".swiper-wrapper": {
      boxSizing: "border-box",
    },

    ".swiper-slide": {
      width: "fit-content",
    },
  })

  const params = {
    slidesPerView: "auto",
    //spaceBetween: 15,
    freeMode: true,
  }

  return (
    <header css={cssHeader}>
      <div css={cssContentTop}>
        <div css={cssLogo}>MovieSearch</div>
        <button
          aria-label="Search"
          css={cssSearchButton}
          onClick={() => dispatch(setIsMobileSearchBarOpen(true))}
        >
          <SearchIcon />
        </button>
      </div>
      <nav css={cssNav}>
        {matchMovies && (
          <Swiper {...params}>
            <div>
              <TabButton link="/movies/popular" name="Popular" />
            </div>
            <div>
              <TabButton link="/movies/in-cinemas" name="In Cinemas" />
            </div>
            <div>
              <TabButton link="/movies/top-rated" name="Top Rated" />
            </div>
            <div>
              <TabButton link="/movies/upcoming" name="Upcoming" />
            </div>
          </Swiper>
        )}
      </nav>
    </header>
  )
}

export default TopMobileTabNav

const TabButton = ({ link, name }) => {
  const theme = useTheme()
  const cssTabBtn = css({
    fontSize: "1.4rem",
    padding: ".4rem 1.5rem",
    fontWeight: "600",
    display: "block",
    color: theme.colors.fontSecondary,
    borderBottom: "2px solid transparent",
    backgroundColor: "transparent",
    transition: "all .4s",
  })

  const activeStyle = {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primarySelected,
    color: theme.colors.primary,
  }

  return (
    <NavLink css={cssTabBtn} activeStyle={activeStyle} to={link}>
      {name}
    </NavLink>
  )
}
