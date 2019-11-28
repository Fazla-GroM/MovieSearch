import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = props => {
    return (
        <div css={cssSearchBar}>
            <div className="holder">
                <input
                    type="text"
                    placeholder="Search for Movie, Tv Show, Person..."
                />
                <button css={cssSearchButton} aria-label="Search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssSearchBar = css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0',

    [mq[1]]: {
        display: 'none'
    },

    '.holder': {
        width: '70%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& input': {
            width: '100%',
            backgroundColor: greyLight,
            margin: '0',
            padding: '.4rem',
            border: `1px solid transparent`,
            borderRadius: '.2rem',
            outline: 'none',
            fontFamily: 'inherit',
            color: 'white',
            transition: 'all .3s ease-in-out',

            '&:focus': {
                border: `1px solid ${red}`,
                boxShadow: `0px 0px 5px 0px ${red}`,

                '&::placeholder': {
                    color: 'transparent'
                }
            },

            '&::placeholder': {
                fontSize: '1rem',
                transition: 'color .4s'
            }
        }
    }
});

const cssSearchButton = css({
    position: 'absolute',
    top: '50%',
    right: '.5rem',
    transform: 'translateY(-50%)',
    margin: '0',
    padding: '0',
    outline: 'none',
    backgroundColor: 'transparent',
    border: 'none',

    '& svg': {
        color: greyDark
    }
});
