import React from 'react';
import { css } from '@emotion/core';
//components
import MovieCard from '../../components/movieCard/MovieCard';

const SearchResults = ({ data }) => {
    console.log('RERENDERING RESULTS');
    return (
        <section css={cssResults}>
            {data?.map(item => {
                return <MovieCard key={item.id} data={item} />;
            })}
        </section>
    );
};

export default SearchResults;

//styles
const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssResults = css({
    '& > div': {
        height: '20rem'
    },

    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'auto auto ',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',

    [mq[0]]: {
        gridTemplateColumns: 'auto auto '
    },
    [mq[1]]: {
        gridTemplateColumns: 'auto auto auto'
    },
    [mq[2]]: {
        gridTemplateColumns: 'auto auto auto auto'
    }
});
