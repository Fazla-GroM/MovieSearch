import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
//components
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TrailerPopup = ({ data, handleClose }) => {
    useEffect(() => {
        document.addEventListener("keydown", handleClose);
        return () => document.removeEventListener("keydown", handleClose);
    }, []);

    const params = {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };
    return (
        <div
            onClick={e => handleClose(e)}
            id='trailerPopup'
            css={cssTrailerPopup}
        >
            <div css={cssScaleContainer}>
                <Swiper {...params}>
                    {data.map(video => (
                        <div key={video.key}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.key}?autoplay=0`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        </div>
                    ))}
                </Swiper>
            </div>
            <button id='trailerBtnClose' css={cssBtnClose}>
                <FontAwesomeIcon icon={faTimes} size='3x' />
            </button>
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
    height: "100%",
    width: "100%",
    cursor: "initial",
});

const cssScaleContainer = css({
    position: "relative",
    width: "100%",
    //height: "0",
    paddingBottom: "56.25%",

    "& .swiper-container": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        maxWidth: "1366px",
        maxHeight: "768px",
        width: "100%",
        height: "100%",
    },
    ".swiper-button-next, .swiper-button-prev": {
        color: red,
    },

    "& iframe": {
        width: "100%",
        height: "100%",
        //backgroundColor: "red",
    },
});

const cssBtnClose = css({
    position: "absolute",
    top: "3rem",
    right: "3rem",
    padding: "0",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    "& svg": {
        color: "white",
    },
});
