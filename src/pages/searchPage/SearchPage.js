import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../../redux/movies/moviesActions';
import { selectPopularMovies } from '../../redux/movies/moviesSelectors';
//hooks
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
//components
import SearchResults from '../../components/searchResults/SearchResults';

const sasa = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('foo');
        }, 5000);
    });
};

const SearchPage = props => {
    const { title, query } = props.pageData;
    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPopularMovies);
    const [isFetching, setIsFetching] = useInfiniteScroll(sasa);

    useEffect(() => {
        dispatch(getPopularMovies(1));
    }, []);

    return (
        <main css={cssSearchPage}>
            <div className="container">
                {title && <h2>{title}</h2>}
                <SearchResults data={popularMovies} />
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
