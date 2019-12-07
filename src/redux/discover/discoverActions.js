import {
    SET_MOVIES,
    SET_MOVIES_ON_SCROLL,
    SET_TV_SHOWS,
    SET_TV_SHOWS_ON_SCROLL,
} from "./discoverTypes";
import mainApi from "../api/mainApi";

const apiKey = process.env.API_KEY;
const fetchDiscoverMovies = process.env.GET_DISCOVER_MOVIES;
const fetchDiscoverTvShows = process.env.GET_DISCOVER_TV_SHOWS;

export const getDiscoverMovies = filters => async dispatch => {
    let res;
    try {
        console.log("discover filmove");
        res = await mainApi.get(
            `${fetchDiscoverMovies}?api_key=${apiKey}&language=en-US${filters}&page=1`,
        );
        dispatch({
            type: SET_MOVIES,
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

export const getDiscoverMoviesOnScroll = (page, filters) => async dispatch => {
    let res;
    try {
        console.log("discover filmove");
        res = await mainApi.get(
            `${fetchDiscoverMovies}?api_key=${apiKey}&language=en-US${filters}&page=${page}`,
        );
        console.log(res);
        dispatch({
            type: SET_MOVIES_ON_SCROLL,
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

export const getDiscoverTvShows = filters => async dispatch => {
    let res;
    try {
        console.log("discover tv shows");
        res = await mainApi.get(
            `${fetchDiscoverTvShows}?api_key=${apiKey}&language=en-US${filters}&page=1`,
        );

        dispatch({
            type: SET_TV_SHOWS,
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

export const getDiscoverTvShowsOnScroll = (page, filters) => async dispatch => {
    let res;
    try {
        console.log("discover tv shows");
        res = await mainApi.get(
            `${fetchDiscoverTvShows}?api_key=${apiKey}&language=en-US${filters}&page=${page}`,
        );

        dispatch({
            type: SET_TV_SHOWS_ON_SCROLL,
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
