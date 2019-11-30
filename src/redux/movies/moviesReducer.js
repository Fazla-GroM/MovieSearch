import {
    SET_POPULAR_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES,
    SET_NOW_PLAYING_MOVIES
} from './moviesTypes';

const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: [...state.popularMovies, ...action.payload]
            };
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: [...state.topRatedMovies, ...action.payload]
            };
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: [...state.upcomingMovies, ...action.payload]
            };
        case SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: [...state.nowPlayingMovies, ...action.payload]
            };

        default:
            return state;
    }
};

export default moviesReducer;
