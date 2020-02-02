import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import useDebounce from "../hooks/useDebounce"
import { useDispatch, useSelector } from "react-redux"
import { setIsMobileSearchBarOpen } from "../redux/globals/globalsActions"
import { selectIsMobileSearchBarOpen } from "../redux/globals/globalsSelectors"
import {
  getSearchBarResults,
  clearSearchBarResults,
} from "../redux/searchBar/searchBarActions"
import { selectSearchBarResults } from "../redux/searchBar/searchBarSelectors"
import { Transition } from "react-transition-group"
import { ReactComponent as SearchIcon } from "../assets/images/search.svg"
import { ReactComponent as ArrowBackIcon } from "../assets/images/arrow-back.svg"
import { ReactComponent as ClearSearchIcon } from "../assets/images/close.svg"

const MobileSearchBar = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const isMobileSearchOpen = useSelector(selectIsMobileSearchBarOpen)
  const [userInput, setUserInput] = useState("")
  const debouncedSearchTerm = useDebounce(userInput, 700)
  const searchBarResults = useSelector(selectSearchBarResults)

  useEffect(() => {
    handleSearch()
  }, [debouncedSearchTerm])

  const handleSearch = () => {
    if (debouncedSearchTerm) {
      console.log("FETCHAM")
      dispatch(getSearchBarResults(encodeURI(debouncedSearchTerm)))
    } else {
      dispatch(clearSearchBarResults([]))
    }
  }

  const handleClear = () => {
    dispatch(clearSearchBarResults([]))
    setUserInput("")
  }
  const handleClose = () => {
    dispatch(setIsMobileSearchBarOpen(false))
    handleClear()
  }
  const cssSearchBarModal = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "2000",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    transition: "opacity .5s",
  })

  const cssTopHolder = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0.6rem",
    margin: "0 .6rem",
    borderBottom: `1.6px solid ${theme.colors.fontDisabled}`,
  })

  const cssButton = css({
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",

    "& svg": {
      fill: theme.colors.primary,
    },
  })

  const cssButtonClear = css({
    position: "absolute",
    zIndex: "2",
    top: "50%",
    right: "2rem",
    transform: "translateY(-50%)",
  })

  const cssSearchBar = css({
    flex: "1",
    width: "100&",
    padding: "0 1.5rem",
    position: "relative",

    "& input": {
      width: "100%",
      fontSize: "inherit",
      fontFamily: "inherit",
      outline: "none",
      border: "none",
      padding: ".4rem 0",
      color: theme.colors.fontSecondary,

      "&:focus": {
        backgroundColor: theme.colors.primaryHover,
      },
    },
  })

  const cssSearchResultsList = css({
    margin: "1rem 1.2rem",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflowY: "auto",
  })

  const cssSearchResultsItem = css({
    textAlign: "left",
    width: "100%",

    "& a": {
      padding: "1rem 0",
      display: "block",

      color: theme.colors.fontMain,
    },
  })

  const transitionStyles = {
    entering: {
      opacity: "0",
    },
    entered: {
      opacity: "1",
    },
    exiting: {
      opacity: "0",
    },
    exited: {
      opacity: "0",
    },
  }

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={isMobileSearchOpen}
      timeout={{ exit: 400 }}
    >
      {state => (
        <div css={cssSearchBarModal} style={{ ...transitionStyles[state] }}>
          <div css={cssTopHolder}>
            <button
              css={cssButton}
              aria-label="Close search modal"
              onClick={handleClose}
            >
              <ArrowBackIcon />
            </button>
            <label css={cssSearchBar} htmlFor="searchBar">
              <input
                id="#searchBar"
                type="text"
                autoFocus
                placeholder="search"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
              />
              <button
                css={[cssButton, cssButtonClear]}
                aria-label="Clear Search term"
                onClick={handleClear}
              >
                <ClearSearchIcon />
              </button>
            </label>
            <button css={cssButton} aria-label="Search">
              <SearchIcon />
            </button>
          </div>
          <ul css={cssSearchResultsList}>
            {searchBarResults.map((res, index) => {
              return (
                <li
                  onClick={handleClose}
                  css={cssSearchResultsItem}
                  key={index}
                >
                  <Link to="/search/movie/:id">{res.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Transition>
  )
}

export default MobileSearchBar
