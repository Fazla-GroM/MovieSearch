import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight } from '../../../themeVar';
//components
import CustomSwiper from '../../../components/customSwiper/CustomSwiper';

const HomePageTrending = ({ movieData, tvShowData, movieTitle, tvTitle }) => {
    return (
        <section css={cssTrending}>
            <div className="container">
                <div className="swiper-box">
                    <div className="title">
                        <h3>{movieTitle}</h3>
                    </div>
                    <CustomSwiper data={movieData} />
                </div>
                <div className="swiper-box">
                    <div className="title">
                        <h3>{tvTitle}</h3>
                    </div>
                    <CustomSwiper data={tvShowData} />
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
