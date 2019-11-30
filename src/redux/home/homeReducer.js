import { SET_IN_THEATRES_MOVIES } from './homeTypes';

const initialState = {
    inTheatres: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IN_THEATRES_MOVIES:
            return {
                ...state,
                inTheatres: [...state.inTheatres, action.payload]
            };
        default:
            return state;
    }
};

export default homeReducer;
