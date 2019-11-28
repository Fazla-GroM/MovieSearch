import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectIsSearchOpen = createSelector(
    [selectSearch],
    search => search.isSearchOpen
);
