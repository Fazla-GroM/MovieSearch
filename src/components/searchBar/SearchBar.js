import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../redux/search/searchActions';
import { selectSearchResults } from '../../redux/search/searchSelectors';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//components
import SearchBarResults from './SearchBarResults';
//hooks
import useDebounce from '../../hooks/useDebounce';

const SearchBar = props => {
    const [userInput, setUserInput] = useState('');
    const [hasData, setHasData] = useState(false);
    const dispatch = useDispatch();
    const searchResults = useSelector(selectSearchResults);
    const debouncedSearchTerm = useDebounce(userInput, 700);

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log('FETCHAM');
            dispatch(getSearchResults(encodeURI(debouncedSearchTerm)));
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (debouncedSearchTerm !== '') {
            setHasData(true);
        } else {
            setHasData(false);
        }
    }, [debouncedSearchTerm]);

    const handleSearch = e => {
        setUserInput(e.target.value);
    };

    return (
        <div css={cssSearchBar}>
            <form className="holder">
                <input
                    onChange={e => handleSearch(e)}
                    value={userInput}
                    type="text"
                    placeholder="Search for Movie, Tv Show, Person..."
                />
                <button css={cssSearchButton} aria-label="Search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {hasData && <SearchBarResults />}
        </div>
    );
};

export default SearchBar;

/**
 *
 */
const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

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
