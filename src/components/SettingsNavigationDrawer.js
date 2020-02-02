import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Transition } from "react-transition-group"
import { useDispatch, useSelector } from "react-redux"
import { setIsMobileSettingsNavOpen } from "../redux/globals/globalsActions"
import { selectIsMobileSettingsNavOpen } from "../redux/globals/globalsSelectors"
import ThemeSelector from "./ThemeSelector"
import fakeUserImage from "../assets/images/3.jpg"

const SettingsNavigationDrawer = () => {
  const dispatch = useDispatch()
  const isSettingsNavOpen = useSelector(selectIsMobileSettingsNavOpen)
  const theme = useTheme()

  const cssSettingsNavigationDrawer = css({
    position: "fixed",
    zIndex: "500",
    width: "100%",
    height: "40vh",
    bottom: "0",
    backgroundColor: "white",
    borderRadius: "1rem 1rem 0 0",
    boxShadow: "0 -14px 28px rgba(0,0,0,0.25), 0 -10px 10px rgba(0,0,0,0.22)",
  })

  const cssContent = css({
    padding: "2rem 1.5rem",
  })

  const cssUser = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: "1.5rem",
    marginBottom: "1.5rem",
    borderBottom: `1px solid ${theme.colors.fontDisabled}`,

    "& img": {
      borderRadius: "10rem",
      width: "5rem",
    },

    "& h3": {
      ...theme.titles.titleTerciary,
      overflowWrap: "break-word",
      wordWrap: "break-word",
      wordBreak: "break-word",
      hyphens: "auto",

      "& span": {
        display: "block",
        color: theme.colors.fontSecondary,
        fontSize: "1.6rem",
      },
    },
  })

  const cssLink = css({
    color: theme.colors.fontMain,
    fontWeight: "600",
    marginTop: "1.5rem",
    display: "block",
  })
  const transitionStyles = {
    entering: {
      transform: "translateY(100%)",
    },
    entered: {
      transform: "translateY(0)",
      transition: "transform 0.4s",
    },
    exiting: {
      transform: "translateY(100%)",
      transition: "transform 0.4s",
    },
    exited: {
      transform: "translateY(100%)",
    },
  }

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={isSettingsNavOpen}
      timeout={{ exit: 400 }}
    >
      {state => (
        <div
          style={{ ...transitionStyles[state] }}
          css={cssSettingsNavigationDrawer}
        >
          <div css={cssContent}>
            <div css={cssUser}>
              <img src={fakeUserImage} alt="Random User" />
              <h3>
                Random User
                <span>random.user@example.com</span>
              </h3>
            </div>
            <ThemeSelector />
            <Link css={cssLink} to="/account">
              My Account
            </Link>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default SettingsNavigationDrawer
