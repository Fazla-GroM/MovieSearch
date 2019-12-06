import {
    SET_MOVIES,
    SET_TV_SHOWS,
    CLEAR_MOVIES,
    CLEAR_TV_SHOWS
} from './discoverTypes';

const initialState = {
    movies: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    },
    tvShows: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    }
};

const discoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.movies.results,
                        ...action.payload.results
                    ]
                }
            };
        case SET_TV_SHOWS:
            return {
                ...state,
                tvShows: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.tvShows.results,
                        ...action.payload.results
                    ]
                }
            };
        // case CLEAR_MOVIES:
        //     return {
        //         ...state,
        //         movies: {
        //             ...state.movies,
        //             ...initalState.movies
        //         }
        //     };
        // case CLEAR_TV_SHOWS:
        //     return {
        //         ...state,
        //         tvShows: {
        //             ...state.tvShows,
        //             ...initalState.tvShows
        //         }
        //     };
        default:
            return state;
    }
};

export default discoverReducer;
