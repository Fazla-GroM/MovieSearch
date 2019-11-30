import React from 'react';
import { css } from '@emotion/core';
import { red, lightGrey } from '../../themeVar';
//components
import Swiper from 'react-id-swiper';
import Card from '../movieCard/MovieCard';
//swiper css
import 'swiper/css/swiper.css';

const CustomSwiper = ({ data }) => {
    const params = {
        slidesPerView: 1,
        // centeredSlides: true,
        spaceBetween: 30,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     dynamicBullets: true
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 4
            }
        }
    };

    const breakpoints = [478, 768, 1024, 1200];
    const mq = breakpoints.map(
        bp => ` @media only screen and (max-width: ${bp}px)`
    );

    const cssSwiper = css({
        paddingBottom: '2rem',

        '.swiper-container': {
            paddingTop: '1rem',
            paddingBottom: '4rem'
        },

        '.swiper-wrapper': {
            boxSizing: 'border-box'
        },

        '.swiper-button-next, .swiper-button-prev': {
            color: red
        }
    });

    return (
        <div css={cssSwiper}>
            {data && (
                <Swiper {...params}>
                    {data &&
                        data.map(item => {
                            return (
                                <div key={item?.id}>
                                    <Card data={item}></Card>
                                </div>
                            );
                        })}
                </Swiper>
            )}
        </div>
    );
};

export default CustomSwiper;

//styles
