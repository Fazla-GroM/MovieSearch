import {
    SET_POPULAR_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES,
    SET_NOW_PLAYING_MOVIES
} from './moviesTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const popularMovies = process.env.GET_POPULAR_MOVIES;
const topRatedMovies = process.env.GET_TOP_RATED_MOVIES;
const upcomingMovies = process.env.GET_UPCOMING_MOVIES;
const nowPlayingMovies = process.env.GET_NOW_PLAYING_MOVIES;

export const getPopularMovies = page => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${popularMovies}?api_key=${apiKey}&language=en-US&page=${page}`
        );
        console.log(res.data);
        dispatch({
            type: SET_POPULAR_MOVIES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const getTopRatedMovies = isOpen => {
    return {
        type: SET_IS_SEARCH_OPEN,
        payload: isOpen
    };
};

export const getUpcomingMovies = isOpen => {
    return {
        type: SET_IS_SEARCH_OPEN,
        payload: isOpen
    };
};

export const getNowPlayingMovies = isOpen => {
    return {
        type: SET_IS_SEARCH_OPEN,
        payload: isOpen
    };
};
