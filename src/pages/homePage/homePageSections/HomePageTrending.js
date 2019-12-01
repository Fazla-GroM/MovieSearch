import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight } from '../../../themeVar';
//components
import CustomSwiper from '../../../components/customSwiper/CustomSwiper';

const HomePageTrending = ({ movieData, tvShowData, movieTitle, tvTitle }) => {
    const checkDataLength = data => {
        //check for the length of an array of movies
        //10 items per swiper is max we want to show
        const maxLength = 10;
        if (data.length < maxLength) {
            return data;
        } else {
            return data.slice(0, maxLength + 1);
        }
    };

    return (
        <section css={cssTrending}>
            <div className="container">
                <div className="swiper-box">
                    <div className="title">
                        <h3>{movieTitle}</h3>
                    </div>
                    <CustomSwiper data={checkDataLength(movieData)} />
                </div>
                <div className="swiper-box">
                    <div className="title">
                        <h3>{tvTitle}</h3>
                    </div>
                    <CustomSwiper data={checkDataLength(tvShowData)} />
                </div>
            </div>
        </section>
    );
};

export default HomePageTrending;

//styles
const cssTrending = css({
    width: '100%',

    '.title': {
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '2.5rem',
        color: red,
        fontWeight: '700'
        //textTransform: 'uppercase'
    },

    '.swiper-box': {
        borderBottom: `1px solid ${greyLight}`,
        height: '300px',
        marginBottom: '40px',
        width: '100%',
        height: '100%'
    }
});
