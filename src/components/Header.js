import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Container from "./Container"
import DesktopNavigation from "./DesktopNavigation"
import useMediaQuery from "../hooks/useMediaQuerry"
import { breakpoints } from "../globalStyles"

const Header = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(breakpoints[0])

  const cssHeader = css({
    ...theme.shadows.shadowFour,
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
    backgroundColor: theme.colors.primary,
    padding: "1rem 0",
    color: theme.colors.whiteMain,
  })

  const cssContainer = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })

  const cssLogo = css({})

  const cssUser = css({})

  return (
    <header css={cssHeader}>
      <Container css={cssContainer}>
        <div css={cssLogo}>MovieSearch</div>
        {isNotMobile && <DesktopNavigation />}
        {isNotMobile && <div css={cssUser}>Users</div>}
      </Container>
    </header>
  )
}

export default Header
