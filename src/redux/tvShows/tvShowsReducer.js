import {
    SET_POPULAR_TV_SHOWS,
    SET_TOP_RATED_TV_SHOWS,
    SET_AIRING_NOW_TV_SHOWS,
    SET_AIRING_TODAY_TV_SHOWS
} from './tvShowsTypes';

const initialState = {
    popularTvShows: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    },
    topRatedTvShows: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    },
    airingNowTvShows: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    },
    airingTodayTvShows: {
        currentPage: null,
        pageToFetch: 1,
        totalPages: null,
        results: []
    }
};
const tvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_TV_SHOWS:
            return {
                ...state,
                popularTvShows: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.popularTvShows.results,
                        ...action.payload.results
                    ]
                }
            };
        case SET_TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTvShows: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.topRatedTvShows.results,
                        ...action.payload.results
                    ]
                }
            };
        case SET_AIRING_NOW_TV_SHOWS:
            return {
                ...state,
                airingNowTvShows: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.airingNowTvShows.results,
                        ...action.payload.results
                    ]
                }
            };
        case SET_AIRING_TODAY_TV_SHOWS:
            return {
                ...state,
                airingTodayTvShows: {
                    currentPage: action.payload.currentPage,
                    pageToFetch: action.payload.pageToFetch,
                    totalPages: action.payload.totalPages,
                    results: [
                        ...state.airingTodayTvShows.results,
                        ...action.payload.results
                    ]
                }
            };
        default:
            return state;
    }
};

export default tvShowsReducer;
