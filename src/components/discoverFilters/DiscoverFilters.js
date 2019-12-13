import React from "react";
import { css } from "@emotion/core";
import { red, greyDark, greyLight } from "../../themeVar";
//redux

//component
import DropdownMenu from "../dropdownMenu/DropdownMenu";

const DiscoverFilters = ({
    handleSortBy,
    handleGenres,
    sortByFilters,
    genreFilters,
    sortByValue,
    genresValue,
}) => {
    return (
        <form css={cssDiscoverFilters} autoComplete='off'>
            <ul css={cssDiscoverList}>
                <li>
                    <DropdownMenu
                        title='Sort by'
                        data={sortByFilters}
                        handleChange={handleSortBy}
                        value={sortByValue}
                    />
                </li>
                <li>
                    <DropdownMenu
                        title='Genres'
                        data={genreFilters}
                        handleChange={handleGenres}
                        value={genresValue}
                    />
                </li>
                {/* <li>
                    <h5 css={cssTitle}>Year:</h5>
                    <input
                        onChange={handleYear}
                        css={cssYear}
                        type='text'
                        maxLength='4'
                        value={yearValue}
                        name='year'
                        placeholder='Year...'
                    />
                </li> */}
            </ul>
        </form>
    );
};

export default DiscoverFilters;

const cssDiscoverFilters = css({
    marginBottom: "4rem",
});

const cssDiscoverList = css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",

    "& > :not(:last-child)": {
        marginBottom: "1rem",
    },
});

const cssTitle = css({
    color: "white",
    paddingBottom: ".5rem",
});

const cssYear = css({
    height: "4rem",
    width: "10rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    backgroundColor: greyDark,
    border: `1px solid ${red}`,
    borderRadius: "4px",
    padding: ".5rem 1rem",
    color: "white",
    outline: "none",
    transition: "all .3s ease-in-out",

    "&:focus": {
        boxShadow: `0px 0px 5px 0px ${red}`,

        "&::placeholder": {
            color: "transparent",
        },
    },

    "&::placeholder": {
        transition: "color .4s",
    },
});
