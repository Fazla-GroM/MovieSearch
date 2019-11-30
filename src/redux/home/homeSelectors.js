import { createSelector } from 'reselect';

const homeSelector = state => state.home;

export const selectMoviesInTheatres = createSelector(
    [homeSelector],
    home => home.inTheatres
);

export const selectNowPlayingTvShows = createSelector(
    [homeSelector],
    home => home.onTv
);

export const selectTopRatedMovies = createSelector(
    [homeSelector],
    home => home.topRatedMovies
);

export const selectTopRatedTvShows = createSelector(
    [homeSelector],
    home => home.topRatedTvShows
);
