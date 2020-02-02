import { createSelector } from "reselect"

const globalsSelector = state => state.globals

export const selectIsMobileSettingsNavOpen = createSelector(
  [globalsSelector],
  globals => globals.isMobileSettingsNavOpen
)

export const selectIsMobileSearchBarOpen = createSelector(
  [globalsSelector],
  globals => globals.isMobileSearchBarOpen
)

export const selectIsDarkTheme = createSelector(
  [globalsSelector],
  globals => globals.isDarkTheme
)
