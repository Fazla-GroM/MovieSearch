import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//redux
import { useDispatch, useSelector } from 'react-redux';
//hooks
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
//components
import SearchResults from '../../components/searchResults/SearchResults';

const SearchPage = props => {
    const { title, getPageData, selector } = props.pageData;
    const dispatch = useDispatch();
    const pageData = useSelector(selector);
    const [isFetching, setIsFetching] = useInfiniteScroll();
    console.log('RERENDERING');

    useEffect(() => {
        if (!pageData.results.length) {
            dispatch(getPageData(pageData.pageToFetch));
        }
        if (pageData.currentPage === pageData.totalPages) {
            setIsFetching(false);
        }

        if (isFetching && pageData.currentPage !== pageData.totalPages) {
            dispatch(getPageData(pageData.pageToFetch)).then(() =>
                setIsFetching(false)
            );
        }
    }, [isFetching]);

    return (
        <main css={cssSearchPage}>
            <div className="container">
                {title && <h2>{title}</h2>}

                <SearchResults data={pageData.results} />
                {isFetching && (
                    <div style={{ color: 'white', fontSize: '4rem' }}>
                        Fetching data...
                    </div>
                )}
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
