import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//components
import SearchBarCards from './SearchBarCards';

const SearchBarResults = ({ results }) => {
    return (
        <ul css={cssSearchBarResults}>
            {results.length &&
                results.map(res => {
                    return <SearchBarCards key={res.id} data={res} />;
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
