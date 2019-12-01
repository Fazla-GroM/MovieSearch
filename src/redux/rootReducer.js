import { combineReducers } from 'redux';
//reducers
import globalsReducer from './globals/globalsReducer';
import moviesReducer from './movies/moviesReducer';
import tvShowsReducer from './tvShows/tvShowsReducer';

export default combineReducers({
    globals: globalsReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer
});
