import {
    SET_MOVIE,
    SET_TV_SHOWS,
    CLEAR_MOVIES,
    CLEAR_TV_SHOWS
} from './discoverTypes';
import mainApi from '../api/mainApi';

const apiKey = process.env.API_KEY;
const getDiscoverMovies = process.env.GET_DISCOVER_MOVIES;
const getDiscoverTvShows = process.env.GET_DISCOVER_TV_SHOWS;

export const discoverMovies = page => async dispatch => {
    let res;
    try {
        console.log('discover filmove');
        res = await mainApi.get(
            `${getDiscoverMovies}?api_key=${apiKey}&language=en-US${page}&page=1`
        );
        console.log(res);
        dispatch({
            type: SET_MOVIE,
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

export const discoverTvShows = page => async dispatch => {
    let res;
    try {
        console.log('discover filmove');
        res = await mainApi.get(
            `${getDiscoverTvShows}?api_key=${apiKey}&language=en-US&page=${page}`
        );

        dispatch({
            type: SET_TV_SHOWS,
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
