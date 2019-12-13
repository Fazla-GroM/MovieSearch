import React from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";

const LanguageList = ({ data }) => {
    return (
        <div css={cssLanguageList}>
            <h4>Spoken languages</h4>
            <ul css={cssList}>
                {data?.map(lang => (
                    <li key={lang.name}>{lang.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageList;

const cssLanguageList = css({
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
    width: "100%",

    "&>:not(:last-child)": {
        marginRight: "2rem",
    },

    "& li ": {
        color: "white",
    },
});
