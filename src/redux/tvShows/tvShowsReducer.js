//TODO import types

const initialState = {
    popularTvShows: [],
    topRatedTvShows: [],
    airingNowShows: [],
    airingTodayTvShows: []
};

const tvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                isSearchOpen: action.payload
            };
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                isSearchOpen: action.payload
            };
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                isSearchOpen: action.payload
            };
        case SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                isSearchOpen: action.payload
            };

        default:
            return state;
    }
};

export default tvShowsReducer;
