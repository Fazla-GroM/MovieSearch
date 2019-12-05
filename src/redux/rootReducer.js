import { combineReducers } from 'redux';
//reducers
import globalsReducer from './globals/globalsReducer';
import discoverReducer from './discover/discoverReducer';
import searchReducer from './search/searchReducer';
import moviesReducer from './movies/moviesReducer';
import tvShowsReducer from './tvShows/tvShowsReducer';

export default combineReducers({
    globals: globalsReducer,
    discover: discoverReducer,
    search: searchReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer
});
