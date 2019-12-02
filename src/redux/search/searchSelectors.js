import { createSelector } from 'reselect';

const searchSelector = state => state.search;

export const selectSearchResults = createSelector(
    [searchSelector],
    search => search
);
