import {
    SET_MOVIES_IN_THEATRES,
    SET_TOP_RATED_MOVIES,
    SET_TV_SHOWS_AIRING_NOW,
    SET_TOP_RATED_TV_SHOWS
} from './homeTypes';

const initialState = {
    inTheatres: [],
    onTv: [],
    topRatedMovies: [],
    topRatedTvShows: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES_IN_THEATRES:
            return {
                ...state,
                inTheatres: [...state.inTheatres, ...action.payload]
            };
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: [...state.topRatedMovies, ...action.payload]
            };
        case SET_TV_SHOWS_AIRING_NOW:
            return {
                ...state,
                onTv: [...state.onTv, ...action.payload]
            };
        case SET_TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTvShows: [...state.topRatedTvShows, ...action.payload]
            };
        default:
            return state;
    }
};

export default homeReducer;
