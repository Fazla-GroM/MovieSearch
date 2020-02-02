import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { ReactComponent as DiceIcon } from "../assets/images/dice.svg"

const RandomMovieButton = props => {
  const theme = useTheme()
  const cssRanadomMovieButton = css({
    position: "fixed",
    zIndex: "400",
    width: "5.6rem",
    height: "5.6rem",
    borderRadius: "10rem",
    border: "none",
    backgroundColor: theme.colors.secondary,
    ...theme.shadows.shadowThree,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  })
  return (
    <button
      aria-label="Search random Movie"
      css={cssRanadomMovieButton}
      {...props}
    >
      <DiceIcon />
    </button>
  )
}

export default RandomMovieButton
