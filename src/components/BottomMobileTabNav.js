import React from "react"
import { NavLink } from "react-router-dom"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useDispatch, useSelector } from "react-redux"
import { setIsMobileSettingsNavOpen } from "../redux/globals/globalsActions"
import { selectIsMobileSettingsNavOpen } from "../redux/globals/globalsSelectors"
import { ReactComponent as UserIcon } from "../assets/images/person_add.svg"
import { mainLinks } from "../routes/routes"

const BottomMobileTabNav = () => {
  const dispatch = useDispatch()
  const isSettingsNavOpen = useSelector(selectIsMobileSettingsNavOpen)
  const theme = useTheme()

  const cssMobileNav = css({
    position: "fixed",
    bottom: "0",
    zIndex: "1000",
    width: "100%",
    display: "flex",
    backgroundColor: theme.colors.primary,
    ...theme.shadows.shadowFour,
    padding: ".4rem 0",

    ".active-route": {
      color: theme.colors.whiteMain,

      "& svg": {
        fill: theme.colors.whiteMain,
      },
    },
  })

  const cssNavButton = css({
    color: "black",
    flex: "1",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0",
    fontSize: "1.2rem",
    fontFamily: "inherit",
    color: theme.colors.whiteSecondary,
    transition: "color 0.4s",

    "& svg": {
      fill: theme.colors.whiteSecondary,
      transition: "fill 0.4s",
    },
  })

  const cssSettingsButton = css({
    color: isSettingsNavOpen && theme.colors.whiteMain,
    outline: "none",

    "& svg": {
      fill: isSettingsNavOpen && theme.colors.whiteMain,
    },
  })

  return (
    <>
      <nav css={cssMobileNav}>
        {mainLinks.map(({ path, exact, name, Icon }) => (
          <NavLink
            css={cssNavButton}
            to={path}
            exact={exact ? exact : false}
            key={path}
            activeClassName="active-route"
          >
            <Icon />
            {name}
          </NavLink>
        ))}
        <button
          aria-label="User Settings"
          onClick={() =>
            dispatch(setIsMobileSettingsNavOpen(!isSettingsNavOpen))
          }
          id="settingDrawerBtn"
          css={[cssNavButton, cssSettingsButton]}
        >
          <UserIcon />
          Settings
        </button>
      </nav>
    </>
  )
}

export default BottomMobileTabNav

/*

onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            dispatch(setIsMobileSettingsNavOpen(!isSettingsNavOpen))
          }}
*/
