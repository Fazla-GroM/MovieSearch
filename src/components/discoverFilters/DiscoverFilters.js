import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { red, greyDark, greyLight } from '../../themeVar';
//component
import DropdownMenu from '../dropdownMenu/DropdownMenu';

const sortByData = [
    {
        value: '&sort_by=popularity.esc',
        label: 'Popularity Descending'
    },
    {
        value: '&sort_by=popularity.asc',
        label: 'Popularity Ascending'
    },
    {
        value: '&sort_by=original_title.desc',
        label: 'Title Descending'
    },
    {
        value: '&sort_by=original_title.asc',
        label: 'Title Ascending'
    }
];

const genresData = [
    {
        value: '&with_genres=28',
        label: 'Action'
    },
    {
        value: '&with_genres=12',
        label: 'Adventure'
    },
    {
        value: '&with_genres=16',
        label: 'Animation'
    },
    {
        value: '&with_genres=35',
        label: 'Comedy'
    },
    {
        value: '&with_genres=80',
        label: 'Crime'
    },
    {
        value: '&with_genres=99',
        label: 'Documentary'
    },
    {
        value: '&with_genres=18',
        label: 'Drama'
    },
    {
        value: '&with_genres=10751',
        label: 'Family'
    },
    {
        value: '&with_genres=14',
        label: 'Fantasy'
    },
    {
        value: '&with_genres=36',
        label: 'History'
    },
    {
        value: '&with_genres=27',
        label: 'Horror'
    },
    {
        value: '&with_genres=10402',
        label: 'Music'
    },
    {
        value: '&with_genres=9648',
        label: 'Mistery'
    },
    {
        value: '&with_genres=10749',
        label: 'Romance'
    },
    {
        value: '&with_genres=878',
        label: 'Science Fiction'
    },
    {
        value: '&with_genres=10770',
        label: 'TV Movie'
    },
    {
        value: '&with_genres=53',
        label: 'Thriller'
    },
    {
        value: '&with_genres=10752',
        label: 'War'
    },
    {
        value: '&with_genres=37',
        label: 'Western'
    }
];

import { useDispatch, useSelector } from 'react-redux';
import { discoverMovies } from '../../redux/discover/discoverActions';

const DiscoverFilters = props => {
    const dispatch = useDispatch();
    const [year, setYear] = useState('');
    const [sortBy, setSortBy] = useState(sortByData[0]);
    const [genres, setGenres] = useState('');
    console.log([sortBy.value, genres.value].join(''));
    useEffect(() => {
        dispatch(discoverMovies([sortBy.value, genres.value].join('')));
    }, [year, sortBy.value, genres.value]);

    console.log(year, sortBy, genres);

    const handleSortBy = selected => {
        setSortBy(selected);
    };

    const handleGenres = selected => {
        setGenres(selected);
    };

    const handleYear = e => {
        setYear(e.target.value);
    };
    console.log(year);
    return (
        <form css={cssDiscoverFilters} autoComplete="off">
            <ul css={cssDiscoverList}>
                <li>
                    <DropdownMenu
                        title="Sort by"
                        hasInitialState={true}
                        data={sortByData}
                        handleChange={handleSortBy}
                        value={sortBy}
                    />
                </li>
                <li>
                    <DropdownMenu
                        title="Genres"
                        data={genresData}
                        handleChange={handleGenres}
                        value={genres}
                    />
                </li>
                <li>
                    <h5 css={cssTitle}>Year:</h5>
                    <input
                        onChange={handleYear}
                        css={cssYear}
                        type="text"
                        maxLength="4"
                        value={year}
                        name="year"
                        placeholder="Year..."
                    />
                </li>
            </ul>
        </form>
    );
};

export default DiscoverFilters;

const cssDiscoverFilters = css({
    marginBottom: '4rem'
});

const cssDiscoverList = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',

    '& > :not(:last-child)': {
        marginBottom: '1rem'
    }
});

const cssTitle = css({
    color: 'white',
    paddingBottom: '.5rem'
});

const cssYear = css({
    height: '4rem',
    width: '10rem',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    backgroundColor: greyDark,
    border: `1px solid ${red}`,
    borderRadius: '4px',
    padding: '.5rem 1rem',
    color: 'white',
    outline: 'none',
    transition: 'all .3s ease-in-out',

    '&:focus': {
        boxShadow: `0px 0px 5px 0px ${red}`,

        '&::placeholder': {
            color: 'transparent'
        }
    },

    '&::placeholder': {
        transition: 'color .4s'
    }
});
