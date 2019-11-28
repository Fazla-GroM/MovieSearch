import React, { useState } from 'react';
import { css } from '@emotion/core';
import { red, greyDark, greyLight } from '../../themeVar';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//components
import Select from 'react-select';

const options = [
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

const DropdownMenu = ({ title, data, hasInitialState }) => {
    const [selectedOption, setSelectedOption] = useState(
        hasInitialState ? data[0] : null
    );
    //console.log(selectedOption);

    const handleChange = selected => {
        //console.log(selected.value);
        setSelectedOption(selected);
    };

    return (
        <>
            <h5 css={cssTitle}>{title}:</h5>
            <Select
                onChange={handleChange}
                value={selectedOption}
                options={data}
                styles={cssSelect}
            />
        </>
    );
};

export default DropdownMenu;

const cssTitle = css({
    color: 'white',
    paddingBottom: '.5rem'
});

//styles
const cssSelect = {
    container: (provided, state) => ({
        ...provided,
        outline: 'none',
        border: 'none',
        width: '20rem'
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'white',
        fontSize: '1.4rem'
    }),
    control: (provided, state) => ({
        ...provided,
        border: `1px solid ${red}`,
        outline: 'none',

        '&:hover': {
            borderColor: red,
            boxShadow: `0px 0px 5px 0px ${red}`
        }
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        backgroundColor: greyDark,
        color: 'white'
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        backgroundColor: greyDark,

        '& svg': {
            color: red
        }
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: red
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: greyDark
    }),
    option: (provided, state) => ({
        ...provided,
        color: 'white',
        fontSize: '1.4rem',
        backgroundColor: (state.isFocused || state.isSelected) && greyLight,
        cursor: 'pointer'
    })
};
