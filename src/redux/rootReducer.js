import { combineReducers } from 'redux';
//reducers
import globalsReducer from './globals/globalsReducer';
import searchReducer from './search/searchReducer';
import moviesReducer from './movies/moviesReducer';
import tvShowsReducer from './tvShows/tvShowsReducer';

export default combineReducers({
    globals: globalsReducer,
    search: searchReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer
});
