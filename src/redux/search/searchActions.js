import { SET_SEARCH_RESULTS } from './searchTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const multiSearch = process.env.GET_MULTI_SEARCH;

export const getSearchResults = searchValue => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${multiSearch}?api_key=${apiKey}&language=en-US&query=${searchValue}`
        );
        console.log(res);
        dispatch({
            type: SET_SEARCH_RESULTS,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};
