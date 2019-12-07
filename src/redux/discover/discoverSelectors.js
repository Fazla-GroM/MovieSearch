import { createSelector } from "reselect";

const discoverSelector = state => state.discover;

export const selectDiscoverMovies = createSelector(
    [discoverSelector],
    discover => discover.movies,
);

export const selectDiscoverTvShows = createSelector(
    [discoverSelector],
    discover => discover.tvShows,
);
