import { SET_IS_NAV_OPEN } from './globalsTypes';

export const setIsNavOpen = isOpen => {
    return {
        type: SET_IS_NAV_OPEN,
        payload: isOpen
    };
};
