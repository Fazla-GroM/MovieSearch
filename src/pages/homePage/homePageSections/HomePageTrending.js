import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight } from '../../../themeVar';
//components
import CustomSwiper from '../../../components/customSwiper/CustomSwiper';

const HomePageTrending = () => {
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

    return (
        <section css={cssTrending}>
            <div className="container">
                <div className="swiper-box">
                    <div className="title">
                        <h3>In Theatres</h3>
                    </div>
                    <CustomSwiper />
                </div>
                <div className="swiper-box">
                    <div className="title">
                        <h3>On TV</h3>
                    </div>
                    <CustomSwiper />
                </div>
            </div>
        </section>
    );
};

export default HomePageTrending;
