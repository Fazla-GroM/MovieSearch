import {
  SET_MOVIE,
  SET_CLEAR_MOVIE,
  SET_POPULAR_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_UPCOMING_MOVIES,
  SET_NOW_PLAYING_MOVIES,
} from "./moviesTypes"
import mainApi from "../api/mainApi"
import store from "../store"

const API_KEY = process.env.API_KEY
const SINGLE_MOVIE = process.env.GET_MOVIE
const MOVIE_COLLECTION = process.env.GET_MOVIE_COLLECTION
const POPULAR_MOVIES = process.env.GET_POPULAR_MOVIES
const TOP_RATED_MOVIES = process.env.GET_TOP_RATED_MOVIES
const UPCOMING_MOVIES = process.env.GET_UPCOMING_MOVIES
const NOW_PLAYING_MOVIES = process.env.GET_NOW_PLAYING_MOVIES

export const getMovie = id => async dispatch => {
  let res, collection
  console.log("FILIM")
  try {
    res = await mainApi.get(
      `${SINGLE_MOVIE}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,credits,reviews,external_ids`
    )
    try {
      if (res.data.belongs_to_collection) {
        collection = await mainApi.get(
          `${MOVIE_COLLECTION}/${res.data.belongs_to_collection.id}?api_key=${API_KEY}&language=en-US`
        )
      }
    } finally {
      dispatch({
        type: SET_MOVIE,
        payload: {
          ...res.data,
          collection: collection?.data ? collection.data : null,
        },
      })
    }

    //console.log("col", collection)
  } catch (err) {
    console.log(err)
  }
}

export const clearMovie = () => {
  return {
    type: SET_CLEAR_MOVIE,
    payload: {},
  }
}

export const getPopularMovies = page => async dispatch => {
  let res
  try {
    console.log("fecham filmove")
    res = await mainApi.get(
      `${POPULAR_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`
    )

    dispatch({
      type: SET_POPULAR_MOVIES,
      payload: {
        hasMore: res.data.page !== res.data.total_pages,
        currentPage: res.data.page,
        pageToFetch: res.data.page + 1,
        totalPages: res.data.total_pages,
        results: res.data.results,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getTopRatedMovies = page => async dispatch => {
  let res
  try {
    console.log("fecham filmove")
    res = await mainApi.get(
      `${TOP_RATED_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`
    )

    dispatch({
      type: SET_TOP_RATED_MOVIES,
      payload: {
        hasMore: res.data.page !== res.data.total_pages,
        currentPage: res.data.page,
        pageToFetch: res.data.page + 1,
        totalPages: res.data.total_pages,
        results: res.data.results,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUpcomingMovies = page => async dispatch => {
  let res
  try {
    console.log("fecham filmove")
    res = await mainApi.get(
      `${UPCOMING_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`
    )

    dispatch({
      type: SET_UPCOMING_MOVIES,
      payload: {
        hasMore: res.data.page !== res.data.total_pages,
        currentPage: res.data.page,
        pageToFetch: res.data.page + 1,
        totalPages: res.data.total_pages,
        results: res.data.results,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getNowPlayingMovies = page => async dispatch => {
  let res
  try {
    console.log("fecham filmove")
    res = await mainApi.get(
      `${NOW_PLAYING_MOVIES}?api_key=${API_KEY}&language=en-US&page=${page}`
    )

    dispatch({
      type: SET_NOW_PLAYING_MOVIES,
      payload: {
        hasMore: res.data.page !== res.data.total_pages,
        currentPage: res.data.page,
        pageToFetch: res.data.page + 1,
        totalPages: res.data.total_pages,
        results: res.data.results,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getHomePageMovies = () => dispatch => {
  const movies = store.getState().movies
  const pageToFetch = 1

  if (!movies.popularMovies.results.length)
    dispatch(getPopularMovies(pageToFetch))

  if (!movies.topRatedMovies.results.length)
    dispatch(getTopRatedMovies(pageToFetch))

  if (!movies.nowPlayingMovies.results.length)
    dispatch(getNowPlayingMovies(pageToFetch))

  if (!movies.upcomingMovies.results.length)
    dispatch(getUpcomingMovies(pageToFetch))

  return
}
