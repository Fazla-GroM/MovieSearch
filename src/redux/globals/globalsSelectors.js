import { createSelector } from 'reselect';

const selectGlobals = state => state.globals;

export const selectIsNavOpen = createSelector(
    [selectGlobals],
    globals => globals.isNavOpen
);
