import { createSelector } from "reselect"

const moviesSelector = state => state.movies

export const selectMovie = createSelector(
  [moviesSelector],
  movies => movies.movie
)

export const selectPopularMovies = createSelector(
  [moviesSelector],
  movies => movies.popularMovies
)

export const selectTopRatedMovies = createSelector(
  [moviesSelector],
  movies => movies.topRatedMovies
)

export const selectUpcomingMovies = createSelector(
  [moviesSelector],
  movies => movies.upcomingMovies
)

export const selectNowPlayingMovies = createSelector(
  [moviesSelector],
  movies => movies.nowPlayingMovies
)

export const selectHomePageMovies = createSelector([moviesSelector], movies => {
  return {
    popularMovies: movies.popularMovies.results,
    topRatedMovies: movies.topRatedMovies.results,
    upcomingMovies: movies.upcomingMovies.results,
    nowPlayingMovies: movies.nowPlayingMovies.results,
  }
})
