import {
  SET_IS_MOBILE_SETTINGS_NAV_OPEN,
  SET_IS_DARK_THEME,
  SET_IS_MOBILE_SEARCH_BAR_OPEN,
} from "./globalsTypes"

const initialState = {
  isMobileSettingsNavOpen: false,
  isMobileSearchBarOpen: false,
  isDarkTheme: false,
}

const globalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MOBILE_SETTINGS_NAV_OPEN:
      return {
        ...state,
        isMobileSettingsNavOpen: action.payload,
      }

    case SET_IS_MOBILE_SEARCH_BAR_OPEN:
      return {
        ...state,
        isMobileSearchBarOpen: action.payload,
      }
    case SET_IS_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      }
    default:
      return state
  }
}

export default globalsReducer
