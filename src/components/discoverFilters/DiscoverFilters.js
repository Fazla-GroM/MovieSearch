import React, { useState } from 'react';
import { css } from '@emotion/core';
import { red, greyDark, greyLight } from '../../themeVar';
//component
import DropdownMenu from '../dropdownMenu/DropdownMenu';

const sortBy = [
    {
        value: '?=popDesc',
        label: 'Popularity Descending'
    },
    {
        value: '?=popAsc',
        label: 'Popularity Ascending'
    },
    {
        value: '?=ratDesc',
        label: 'Rating Descending'
    },
    {
        value: '?=ratAsc',
        label: 'Rating Ascending'
    }
];

const genres = [
    {
        value: '?=action',
        label: 'Action'
    },
    {
        value: '?=adventure',
        label: 'Adventure'
    },
    {
        value: '?=animation',
        label: 'Animation'
    },
    {
        value: '?=comedy',
        label: 'Comedy'
    },
    {
        value: '?=crime',
        label: 'Crime'
    },
    {
        value: '?=documentary',
        label: 'Documentary'
    },
    {
        value: '?=drama',
        label: 'Drama'
    },
    {
        value: '?=family',
        label: 'Family'
    },
    {
        value: '?=fantasy',
        label: 'Fantasy'
    },
    {
        value: '?=history',
        label: 'History'
    },
    {
        value: '?=horror',
        label: 'Horror'
    },
    {
        value: '?=music',
        label: 'Music'
    },
    {
        value: '?=Mistery',
        label: 'Mistery'
    },
    {
        value: '?=romance',
        label: 'Romance'
    },
    {
        value: '?=science+fiction',
        label: 'Science Fiction'
    },
    {
        value: '?=tv+movie',
        label: 'TV Movie'
    },
    {
        value: '?=thriller',
        label: 'Thriller'
    },
    {
        value: '?=war',
        label: 'War'
    },
    {
        value: '?=western',
        label: 'Western'
    }
];

const DiscoverFilters = props => {
    const [year, setYear] = useState('');

    const handleChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setYear(value);
    };
    console.log(year);
    return (
        <form css={cssDiscoverFilters} autoComplete="off">
            <ul css={cssDiscoverList}>
                <li>
                    <DropdownMenu
                        title="Sort by"
                        hasInitialState={true}
                        data={sortBy}
                    />
                </li>
                <li>
                    <DropdownMenu title="Genres" data={genres} />
                </li>
                <li>
                    <h5 css={cssTitle}>Year:</h5>
                    <input
                        onChange={handleChange}
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
