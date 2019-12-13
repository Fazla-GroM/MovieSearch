import React from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";

const FinancesList = ({ budget, revenue }) => {
    return (
        <div css={cssFinancesList}>
            <h4>Finances</h4>
            <ul css={cssList}>
                {Boolean(budget) && (
                    <li>
                        <span>Budget:</span>
                        {budget}
                        <span> $</span>
                    </li>
                )}
                {Boolean(revenue) && (
                    <li>
                        <span>Revenue:</span>
                        {revenue}
                        <span> $</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default FinancesList;

const cssFinancesList = css({
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

        "& span": {
            paddingRight: "1rem",
            color: "red",
        },
    },
});
