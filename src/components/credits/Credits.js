import React from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
import { Link } from "react-router-dom";
//components
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
const imgUrl = process.env.IMAGE_URL;

const Credits = ({ data }) => {
    const params = {
        slidesPerView: 2,
        //centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    };

    return (
        <section css={cssCredits}>
            <div className='container'>
                <h4>Top billed cast</h4>
                {data?.cast?.length && (
                    <Swiper {...params}>
                        {data.cast.slice(0, 7).map(actor => {
                            return (
                                <div key={actor.cast_id}>
                                    <Card data={actor} />;
                                </div>
                            );
                        })}
                    </Swiper>
                )}
                <Link className='btn' to='/negdje'>
                    Full Cast &amp; Crew
                </Link>
            </div>
        </section>
    );
};
export default Credits;

const Card = ({ data }) => {
    const cssCard = css({
        width: "100%",
        display: "block",
        "& img": {
            display: "block",
            height: "200px",
            width: "100%",
        },
    });
    return (
        <Link css={cssCard} to='/persons'>
            <img alt={data.name} src={`${imgUrl}/w185${data.profile_path}`} />
        </Link>
    );
};

const cssCredits = css({
    "& h4": {
        color: red,
        fontWeight: "700",
        fontSize: "1.8rem",
        textAlign: "left",
        width: "100%",
    },
    "& h5": {
        color: red,
        fontWeight: "700",
        fontSize: "1.6rem",
        textAlign: "left",
        width: "100%",
    },

    ".btn": {
        padding: ".5rem 2rem",
        display: "block",
        textDecoration: "none",
        width: "fit-content",
        margin: "0 auto",
        backgroundColor: "transparent",
        border: `1px solid ${red}`,
        outline: "none",
        color: red,
    },
});
