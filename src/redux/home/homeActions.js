import { SET_IN_THEATRES_MOVIES } from './homeTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const nowPlayingMovies = process.env.GET_NOW_PLAYING_MOVIES;

export const getInTheatresMovies = () => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${nowPlayingMovies}?api_key=${apiKey}&language=en-US&page=1`
        );
        dispatch({
            type: SET_IN_THEATRES_MOVIES,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};
