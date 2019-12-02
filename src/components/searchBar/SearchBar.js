import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import img from '../../assets/bg.jpg';

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

/**
 *<ul css={cssSearchBarResults}>
                <li>
                    <div className="bg-image"></div>
                    <div className="content">
                        <h5>Movie Title</h5>
                        <p>this is some movie description</p>
                    </div>
                </li>
                <li>
                    <div className="bg-image"></div>
                    <div className="content">
                        <h5>Movie Title</h5>
                        <p>this is some movie description</p>
                    </div>
                </li>
                <li>
                    <div className="bg-image"></div>
                    <div className="content">
                        <h5>Movie Title</h5>
                        <p>this is some movie description</p>
                    </div>
                </li>
            </ul>
 */
const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssSearchBarResults = css({
    position: 'absolute',
    backgroundColor: greyDark,
    top: '5rem',
    width: '100%',

    '& li': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.5rem 0',

        '.bg-image': {
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '10rem',
            alignSelf: 'stretch'
        },

        '.content': {
            //backgroundColor: 'yellow',
            alignSelf: 'stretch',
            padding: '0 1rem',

            '& h5': {
                color: red,
                fontWeight: '700'
            },
            '& p': {
                color: 'white'
            }
        }
    }
});

const cssSearchBar = css({
    position: 'relative',
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
