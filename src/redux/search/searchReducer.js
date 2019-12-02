import { SET_SEARCH_RESULTS } from './searchTypes';

const initalState = [];

const searchReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return [...action.payload];
        default:
            return state;
    }
};

export default searchReducer;
