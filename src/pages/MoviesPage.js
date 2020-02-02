import React from "react"
import { Route, Switch } from "react-router-dom"
import { moviesRoutes } from "../routes/routes"
import MoviesResultsGrid from "../components/MoviesResultsGrid"

const MoviesPage = () => {
  return (
    <>
      <Switch>
        {moviesRoutes.map(({ getPageData, selectPageData, path, name }) => {
          return (
            <Route key={path} path={path}>
              <MoviesResultsGrid
                title={name}
                getPageData={getPageData}
                selectPageData={selectPageData}
              />
            </Route>
          )
        })}
      </Switch>
    </>
  )
}

export default MoviesPage
