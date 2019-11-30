import { createSelector } from 'reselect';

const globalsSelector = state => state.globals;

export const selectIsNavOpen = createSelector(
    [globalsSelector],
    globals => globals.isNavOpen
);
