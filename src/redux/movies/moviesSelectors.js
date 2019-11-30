import { createSelector } from 'reselect';

const moviesSelector = state => state.movies;

export const selectPopularMovies = createSelector(
    [moviesSelector],
    movies => movies.popularMovies
);

export const selectTopRatedMovies = createSelector(
    [moviesSelector],
    movies => movies.topRatedMovies
);

export const selectUpcomingMovies = createSelector(
    [moviesSelector],
    movies => movies.upcomingMovies
);

export const selectNowPlayingMovies = createSelector(
    [moviesSelector],
    movies => movies.nowPlayingMovies
);
