import {
    SET_MOVIES_IN_THEATRES,
    SET_TOP_RATED_MOVIES,
    SET_TV_SHOWS_AIRING_NOW,
    SET_TOP_RATED_TV_SHOWS
} from './homeTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const nowPlayingMovies = process.env.GET_NOW_PLAYING_MOVIES;
const nowPlayingTvShows = process.env.GET_AIRING_NOW_TV_SHOWS;
const topRatedMovies = process.env.GET_TOP_RATED_MOVIES;
const topRatedTvShows = process.env.GET_TOP_RATED_TV_SHOWS;

export const getMoviesInTheatres = () => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${nowPlayingMovies}?api_key=${apiKey}&language=en-US&page=1`
        );
        dispatch({
            type: SET_MOVIES_IN_THEATRES,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};

export const getNowPlayingTvShows = () => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${nowPlayingTvShows}?api_key=${apiKey}&language=en-US&page=1`
        );
        dispatch({
            type: SET_TV_SHOWS_AIRING_NOW,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};

export const getTopRatedMovies = () => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${topRatedMovies}?api_key=${apiKey}&language=en-US&page=1`
        );
        dispatch({
            type: SET_TOP_RATED_MOVIES,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};

export const getTopRatedTvShows = () => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${topRatedTvShows}?api_key=${apiKey}&language=en-US&page=1`
        );
        dispatch({
            type: SET_TOP_RATED_TV_SHOWS,
            payload: res.data.results
        });
    } catch (err) {
        console.log(err);
    }
};
