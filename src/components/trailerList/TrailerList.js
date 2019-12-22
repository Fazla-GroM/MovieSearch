import React, { useState } from "react";
import { css } from "@emotion/core";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import TrailerPopup from "./TrailerPopup";

const TrailerList = ({ data, bgImage }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    console.log("data", data);

    const cssTrailerList = css({
        backgroundImage: `url(${bgImage})`,
        height: "50rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "1rem",
        cursor: "pointer",
    });
    return (
        <section css={cssTrailerList}>
            {isPopupOpen && <TrailerPopup data={data} />}
            <div css={cssOverlay}>
                <FontAwesomeIcon icon={faPlayCircle} size='4x' />
            </div>
        </section>
    );
};
export default TrailerList;

const cssOverlay = css({
    backgroundImage:
        "linear-gradient(to right bottom, rgba(255,255,255,0.4), rgba(229, 9, 20, 0.4))",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover svg": {
        transform: "scale(1.2)",
    },

    "& svg": {
        position: "absolute",
        color: "white",
        transition: "transform .5s",
    },
});
