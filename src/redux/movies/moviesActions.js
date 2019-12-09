import {
    SET_MOVIE,
    SET_POPULAR_MOVIES,
    SET_TOP_RATED_MOVIES,
    SET_UPCOMING_MOVIES,
    SET_NOW_PLAYING_MOVIES,
} from "./moviesTypes";
import mainApi from "../api/mainApi";

const apiKey = process.env.API_KEY;
const singleMovie = process.env.GET_MOVIE;
const popularMovies = process.env.GET_POPULAR_MOVIES;
const topRatedMovies = process.env.GET_TOP_RATED_MOVIES;
const upcomingMovies = process.env.GET_UPCOMING_MOVIES;
const nowPlayingMovies = process.env.GET_NOW_PLAYING_MOVIES;

export const getMovie = id => async dispatch => {
    let res;
    try {
        res = await mainApi.get(
            `${singleMovie}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,images,credits,reviews`,
        );
        dispatch({
            type: SET_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getPopularMovies = page => async dispatch => {
    let res;
    try {
        console.log("fecham filmove");
        res = await mainApi.get(
            `${popularMovies}?api_key=${apiKey}&language=en-US&page=${page}`,
        );

        dispatch({
            type: SET_POPULAR_MOVIES,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getTopRatedMovies = page => async dispatch => {
    let res;
    try {
        console.log("fecham filmove");
        res = await mainApi.get(
            `${topRatedMovies}?api_key=${apiKey}&language=en-US&page=${page}`,
        );

        dispatch({
            type: SET_TOP_RATED_MOVIES,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getUpcomingMovies = page => async dispatch => {
    let res;
    try {
        console.log("fecham filmove");
        res = await mainApi.get(
            `${upcomingMovies}?api_key=${apiKey}&language=en-US&page=${page}`,
        );

        dispatch({
            type: SET_UPCOMING_MOVIES,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getNowPlayingMovies = page => async dispatch => {
    let res;
    try {
        console.log("fecham filmove");
        res = await mainApi.get(
            `${nowPlayingMovies}?api_key=${apiKey}&language=en-US&page=${page}`,
        );

        dispatch({
            type: SET_NOW_PLAYING_MOVIES,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results,
            },
        });
    } catch (err) {
        console.log(err);
    }
};
