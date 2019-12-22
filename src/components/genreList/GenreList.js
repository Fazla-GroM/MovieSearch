import React from "react";
import { css } from "@emotion/core";
import { red, greyLight } from "../../themeVar";
import { Link } from "react-router-dom";

const GenreList = ({ data }) => {
    return (
        <section css={cssGenreList}>
            <div className='container'>
                <h4>Genres</h4>
                <ul css={cssList}>
                    {data?.map(item => (
                        <li key={item.id}>
                            <Link to='/discover/movies'>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default GenreList;

const cssGenreList = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "fit-content",

    "& h4": {
        color: red,
        fontWeight: "700",
        fontSize: "1.8rem",
        textAlign: "left",
        width: "100%",
    },
});

const cssList = css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "fit-content",

    "& li": {
        textAlign: "left",

        "&:not(:last-of-type)": {
            marginBottom: "1rem",
            marginRight: "1rem",
        },

        "& a ": {
            textDecoration: "none",
            color: "white",
            display: "block",
            backgroundColor: greyLight,
            padding: ".2rem .5rem",
            borderRadius: "2px",
        },
    },
});
