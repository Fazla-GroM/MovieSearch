import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//redux
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../../redux/search/searchSelectors';
//components
import SearchBarCards from './SearchBarCards';

const SearchBarResults = props => {
    const searchResults = useSelector(selectSearchResults);

    return (
        <ul css={cssSearchBarResults}>
            {searchResults &&
                searchResults.map(item => {
                    return <SearchBarCards key={item.id} data={item} />;
                })}
        </ul>
    );
};

export default SearchBarResults;

const cssSearchBarResults = css({
    position: 'absolute',
    zIndex: '1000',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: greyDark,
    top: '5rem',
    width: '100%',
    maxHeight: '20rem'
});
