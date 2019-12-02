import {
    SET_POPULAR_TV_SHOWS,
    SET_TOP_RATED_TV_SHOWS,
    SET_AIRING_NOW_TV_SHOWS,
    SET_AIRING_TODAY_TV_SHOWS
} from './tvShowsTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const popularTvShows = process.env.GET_POPULAR_TV_SHOWS;
const topRatedTvShows = process.env.GET_TOP_RATED_TV_SHOWS;
const airingNowTvShows = process.env.GET_AIRING_NOW_TV_SHOWS;
const airingTodayTvShows = process.env.GET_AIRING_TODAY_TV_SHOWS;

export const getPopularTvShows = page => async dispatch => {
    let res;
    try {
        console.log('fecham tvSHOW');
        res = await mainApi.get(
            `${popularTvShows}?api_key=${apiKey}&language=en-US&page=${page}`
        );

        dispatch({
            type: SET_POPULAR_TV_SHOWS,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export const getTopRatedTvShows = page => async dispatch => {
    let res;
    try {
        console.log('fecham tvSHOW');
        res = await mainApi.get(
            `${topRatedTvShows}?api_key=${apiKey}&language=en-US&page=${page}`
        );

        dispatch({
            type: SET_TOP_RATED_TV_SHOWS,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAiringNowTvShows = page => async dispatch => {
    let res;
    try {
        console.log('fecham tvSHOW');
        res = await mainApi.get(
            `${airingNowTvShows}?api_key=${apiKey}&language=en-US&page=${page}`
        );

        dispatch({
            type: SET_AIRING_NOW_TV_SHOWS,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAiringTodayTvShows = page => async dispatch => {
    let res;
    try {
        console.log('fecham tvSHOW');
        res = await mainApi.get(
            `${airingTodayTvShows}?api_key=${apiKey}&language=en-US&page=${page}`
        );
        dispatch({
            type: SET_AIRING_TODAY_TV_SHOWS,
            payload: {
                currentPage: res.data.page,
                pageToFetch: res.data.page + 1,
                totalPages: res.data.total_pages,
                results: res.data.results
            }
        });
    } catch (err) {
        console.log(err);
    }
};
