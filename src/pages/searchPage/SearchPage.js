import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//components
import SearchResults from '../../components/searchResults/SearchResults';

const SearchPage = ({ pageData }) => {
    const { title, query } = pageData;

    return (
        <main css={cssSearchPage}>
            <div className="container">
                {title && <h2>{title}</h2>}
                <SearchResults />
            </div>
        </main>
    );
};

export default SearchPage;

//styles
const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssSearchPage = css({
    '.container': {
        paddingTop: '7rem',
        paddingBottom: '5rem'
    },

    '& h2': {
        color: red,
        fontWeight: '700',
        fontSize: '3rem',
        textAlign: 'center',
        marginBottom: '3rem'
    }
});
