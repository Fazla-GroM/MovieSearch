import { combineReducers } from "redux"
import globalsReducer from "./globals/globalsReducer"
import moviesReducer from "./movies/moviesReducer"
import searchBarReducer from "./searchBar/searchBarReducer"

export default combineReducers({
  globals: globalsReducer,
  movies: moviesReducer,
  searchBar: searchBarReducer,
})
