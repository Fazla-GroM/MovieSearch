import { createSelector } from "reselect"

const searchBarSelector = state => state.searchBar

export const selectSearchBarResults = createSelector(
  [searchBarSelector],
  searchBar => searchBar
)
