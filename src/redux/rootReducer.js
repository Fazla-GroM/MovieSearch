import { combineReducers } from 'redux';
//reducers
import globalsReducer from './globals/globalsReducer';
import searchReducer from './search/searchReducer';

export default combineReducers({
    globals: globalsReducer,
    search: searchReducer
});
