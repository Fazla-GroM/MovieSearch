import React, { useState } from "react";
import { css } from "@emotion/core";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faSadCry } from "@fortawesome/free-solid-svg-icons";
import TrailerPopup from "./TrailerPopup";

const TrailerList = ({ data, bgImage }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClose = e => {
        e.stopPropagation();
        const target = e.target;
        if (
            target.id === "trailerPopup" ||
            "trailerBtnClose" ||
            e.keyCode === "27"
        ) {
            setIsPopupOpen(false);
        }
    };

    const cssTrailerList = css({
        backgroundImage: `url(${bgImage})`,
        height: "50rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "1rem",
        cursor: "pointer",
    });
    return data?.length ? (
        <section onClick={() => setIsPopupOpen(true)} css={cssTrailerList}>
            {isPopupOpen && (
                <TrailerPopup data={data} handleClose={handleClose} />
            )}
            <div css={cssOverlay}>
                <div className='overlay-content'>
                    <FontAwesomeIcon icon={faPlayCircle} size='4x' />
                    <h5>Watch Trailers</h5>
                </div>
            </div>
        </section>
    ) : (
        <section css={cssTrailerList}>
            <div css={cssOverlay}>
                <FontAwesomeIcon icon={faSadCry} size='4x' />
                <h5>Sorry there are no trailers available</h5>
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

    ".overlay-content": {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },

    "& svg": {
        color: "white",
        transition: "transform .5s",
    },

    "& h5": {
        fontWeight: "700",
        color: "white",
        fontSize: "2.5rem",
        margin: "2rem 0",
    },
});
