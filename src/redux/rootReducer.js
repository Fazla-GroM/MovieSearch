import { combineReducers } from 'redux';
//reducers
import globalsReducer from './globals/globalsReducer';
import homeReducer from './home/homeReducer';
import moviesReducer from './movies/moviesReducer';
import tvShowsReducer from './tvShows/tvShowsReducer';

export default combineReducers({
    globals: globalsReducer,
    home: homeReducer,
    movies: moviesReducer
    //tvShows: tvShowsReducer
});
