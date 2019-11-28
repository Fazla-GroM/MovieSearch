import { SET_IS_SEARCH_OPEN } from './searchTypes';

const initialState = {
    isSearchOpen: true
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SEARCH_OPEN:
            return {
                ...state,
                isSearchOpen: action.payload
            };

        default:
            return state;
    }
};

export default searchReducer;
