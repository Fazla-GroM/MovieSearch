import React from "react"
import { css } from "@emotion/core"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, Route, useLocation } from "react-router-dom"
import { mainRoutes } from "../routes/routes"
import RandomMovieButton from "../components/RandomMovieButton"
import TopMobileTabNav from "../components/TopMobileTabNav"
import MobileSearchBar from "../components/MobileSearchBar"
import SettingsNavigationDrawer from "../components/SettingsNavigationDrawer"
import BottomMobileTabNav from "../components/BottomMobileTabNav"

const MobileLayout = () => {
  let location = useLocation()

  const cssMain = css({
    width: "100%",
    padding: "6rem 0",
  })

  const cssRandomMovieBtnMobile = css({
    bottom: "6rem",
    right: "1.5rem",
  })

  const pageTransitionTimeout = {
    appear: 400,
    enter: 700,
    exit: 400,
  }
  // TO DO
  // current position of mobile search bar is not adequate because the way it is written its constantly mounted..
  // if use transition in mobile layout for rendering it it will cause
  // unnecesary rerender of whole page because it depends on state change.
  // the solotion is to move it in top nav and use react portal

  return (
    <>
      <TopMobileTabNav />
      <RandomMovieButton css={cssRandomMovieBtnMobile} />
      <MobileSearchBar />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={pageTransitionTimeout}
          unmountOnExit
        >
          <Switch location={location}>
            {mainRoutes.map(({ path, exact, Component }) => {
              return (
                <Route key={path} path={path} exact={exact ? exact : false}>
                  <main css={cssMain}>
                    <Component />
                  </main>
                </Route>
              )
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <SettingsNavigationDrawer />
      <BottomMobileTabNav />
    </>
  )
}

export default MobileLayout
