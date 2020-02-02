import { SET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from "./searchBarTypes"
import mainApi from "../api/mainApi"

const API_KEY = process.env.API_KEY
const SEARCH_MOVIES = process.env.GET_SEARCH_MOVIES

export const getSearchBarResults = searchValue => async dispatch => {
  let res
  try {
    res = await mainApi.get(
      `${SEARCH_MOVIES}?api_key=${API_KEY}&language=en-US&query=${searchValue}`
    )
    dispatch({
      type: SET_SEARCH_RESULTS,
      payload: res.data.results,
    })
  } catch (err) {
    console.log(err)
  }
}

export const clearSearchBarResults = data => {
  return {
    type: CLEAR_SEARCH_RESULTS,
    payload: data,
  }
}
