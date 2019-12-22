import React from "react";
import { css } from "@emotion/core";

const TrailerPopup = ({ data }) => {
    return (
        <div css={cssTrailerPopup}>
            <div css={cssScaleContainer}></div>
        </div>
    );
};

export default TrailerPopup;

const cssTrailerPopup = css({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "2000",
    backgroundColor: "rgba(0,0,0,.8)",
    height: "100vh",
    width: "100vw",
    cursor: "initial",
});

const cssScaleContainer = css({
    maxWidth: "1366px",
    maxHeight: "768px",
    width: "100%",
    height: "0",
    backgroundColor: "red",
    paddingBottom: "56.25%",
});
