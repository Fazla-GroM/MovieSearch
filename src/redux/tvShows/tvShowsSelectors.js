import { createSelector } from 'reselect';

const tvShowsSelector = state => state.tvShows;

export const selectPopularTvShows = createSelector(
    [tvShowsSelector],
    tvShows => tvShows.popularTvShows
);

export const selectTopRatedTvShows = createSelector(
    [tvShowsSelector],
    tvShows => tvShows.topRatedTvShows
);

export const selectAiringNowTvShows = createSelector(
    [tvShowsSelector],
    tvShows => tvShows.airingNowTvShows
);

export const selectAiringTodayTvShows = createSelector(
    [tvShowsSelector],
    tvShows => tvShows.airingTodayTvShows
);
