import {
    SET_MOVIE,
    SET_POPULAR_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES,
    SET_NOW_PLAYING_MOVIES,
} from "./moviesTypes";

const initialState = {
    movie: {},

    popularMovies: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: [],
    },
    topRatedMovies: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: [],
    },
    upcomingMovies: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: [],
    },
    nowPlayingMovies: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: [],
    },
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE: {
            return {
                ...state,
                movie: { ...action.payload },
            };
        }
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.popularMovies.results,
                        ...action.payload.results,
                    ],
                },
            };
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.topRatedMovies.results,
                        ...action.payload.results,
                    ],
                },
            };
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.upcomingMovies.results,
                        ...action.payload.results,
                    ],
                },
            };
        case SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.nowPlayingMovies.results,
                        ...action.payload.results,
                    ],
                },
            };

        default:
            return state;
    }
};

export default moviesReducer;
