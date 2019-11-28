import { SET_IS_SEARCH_OPEN } from './searchTypes';

export const setIsSearchOpen = isOpen => {
    return {
        type: SET_IS_SEARCH_OPEN,
        payload: isOpen
    };
};
