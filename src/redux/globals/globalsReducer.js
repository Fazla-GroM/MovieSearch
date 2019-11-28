import { SET_IS_NAV_OPEN } from './globalsTypes';

const initialState = {
    isNavOpen: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_NAV_OPEN:
            return {
                ...state,
                isNavOpen: action.payload
            };

        default:
            return state;
    }
};

export default searchReducer;
