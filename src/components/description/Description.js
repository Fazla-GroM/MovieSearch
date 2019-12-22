import React from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";

const Description = ({ data }) => {
    return (
        <section css={cssDescription}>
            <div className='container'>
                <h4>Overview</h4>
                <ul css={cssList}>{data && <li>{data}</li>}</ul>
            </div>
        </section>
    );
};

export default Description;

const cssDescription = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& h4": {
        color: red,
        fontWeight: "700",
        fontSize: "1.8rem",
        textAlign: "left",
        width: "100%",
    },
});

const cssList = css({
    listStyle: "none",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",

    "&>:not(:last-child)": {
        marginRight: "2rem",
    },

    "& li ": {
        color: "white",
    },
});
