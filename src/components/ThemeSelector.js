import React from "react"
import { css } from "@emotion/core"
import { ReactComponent as ThemeIcon } from "../assets/images/brightness.svg"

const ThemeSelector = () => {
  const cssThemeSelector = css({
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "600",
    padding: "0",

    "& svg": {
      marginLeft: "1rem",
    },
  })

  return (
    <button css={cssThemeSelector}>
      Change Theme
      <ThemeIcon />
    </button>
  )
}

export default ThemeSelector
