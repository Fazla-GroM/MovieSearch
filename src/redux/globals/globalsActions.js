import {
  SET_IS_MOBILE_SETTINGS_NAV_OPEN,
  SET_IS_DARK_THEME,
  SET_IS_MOBILE_SEARCH_BAR_OPEN,
} from "./globalsTypes"

export const setIsMobileSettingsNavOpen = isOpen => {
  return {
    type: SET_IS_MOBILE_SETTINGS_NAV_OPEN,
    payload: isOpen,
  }
}

export const setIsMobileSearchBarOpen = isOpen => {
  return {
    type: SET_IS_MOBILE_SEARCH_BAR_OPEN,
    payload: isOpen,
  }
}

export const setIsDarkTheme = isDarkTheme => {
  return {
    type: SET_IS_DARK_THEME,
    payload: isDarkTheme,
  }
}
