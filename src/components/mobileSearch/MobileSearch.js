import React from 'react';
//css
import { css } from '@emotion/core';
import { Transition } from 'react-transition-group';
import { red, greyDark } from '../../themeVar';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { setIsNavOpen } from '../../redux/globals/globalsActions';
import { selectIsNavOpen } from '../../redux/globals/globalsSelectors';
//components
import SearchBox from '../searchBox/SearchBox';

const MobileSearch = props => {
    const dispatch = useDispatch();
    const isNavOpen = useSelector(selectIsNavOpen);
    //css transition group styling
    const transitionStyles = {
        entering: {
            opacity: 0,
            left: '-100vw'
        },
        entered: {
            opacity: 1,
            left: '0vw'
        },
        exiting: { opacity: 0, left: '-100vw' },
        exited: { opacity: 0, left: '-100vw' }
    };

    return (
        <Transition mountOnEnter unmountOnExit in={isNavOpen} timeout={400}>
            {state => (
                <div
                    onClick={() => dispatch(setIsNavOpen(false))}
                    css={cssMobileSearch}
                    style={{ ...transitionStyles[state] }}
                >
                    <SearchBox />
                </div>
            )}
        </Transition>
    );
};

export default MobileSearch;

const cssMobileSearch = css({
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    position: 'fixed',
    zIndex: '500',
    transition: 'all .5s ease-in-out',
    backgroundColor: greyDark
});
