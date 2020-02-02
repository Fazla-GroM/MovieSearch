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

const apiKey = process.env.API_KEY
const singleMovie = process.env.GET_MOVIE
const movieCollection = process.env.GET_MOVIE_COLLECTION
const popularMovies = process.env.GET_POPULAR_MOVIES
const topRatedMovies = process.env.GET_TOP_RATED_MOVIES
const upcomingMovies = process.env.GET_UPCOMING_MOVIES
const nowPlayingMovies = process.env.GET_NOW_PLAYING_MOVIES

export const getMovie = id => async dispatch => {
  let res
  let collection

  try {
    res = await mainApi.get(
      `${singleMovie}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,images,credits,reviews,external_ids`
    )
    try {
      if (res.data.belongs_to_collection) {
        collection = await mainApi.get(
          `${movieCollection}/${res.data.belongs_to_collection.id}?api_key=${apiKey}&language=en-US`
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
      `${popularMovies}?api_key=${apiKey}&language=en-US&page=${page}`
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
      `${topRatedMovies}?api_key=${apiKey}&language=en-US&page=${page}`
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
      `${upcomingMovies}?api_key=${apiKey}&language=en-US&page=${page}`
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
      `${nowPlayingMovies}?api_key=${apiKey}&language=en-US&page=${page}`
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
