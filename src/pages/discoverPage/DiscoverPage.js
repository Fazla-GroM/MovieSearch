import React from 'react';
import { css } from '@emotion/core';
import { red } from '../../themeVar';
//components
import DiscoverFilters from '../../components/discoverFilters/DiscoverFilters';
import SearchResults from '../../components/searchResults/SearchResults';

const DiscoverPage = ({ pageData }) => {
    return (
        <main css={cssDiscoverPage}>
            <div className="container">
                <h2>Discover {pageData.title}</h2>
                <DiscoverFilters />
                <SearchResults />
            </div>
        </main>
    );
};

export default DiscoverPage;

const cssDiscoverPage = css({
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
