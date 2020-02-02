import React from "react"
import { NavLink } from "react-router-dom"
import { css } from "@emotion/core"
import { routes } from "../routes/routes"

const DesktopNavigation = () => {
  const cssNavList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& li:not(:last-of-type)": {
      marginRight: "1rem",
    },
  })

  return (
    <nav>
      <ul css={cssNavList}>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavigation
