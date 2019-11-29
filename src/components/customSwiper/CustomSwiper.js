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
            color: red,
            top: '40%',

            [mq[2]]: {
                top: '47%'
            }
        },
        '.swiper-button-next': {
            right: '0'
        },
        '.swiper-button-prev': {
            left: '0'
        },

        '.swiper-slide': {
            height: ' auto'
        },

        [mq[2]]: {
            '.swiper-slide-active, .swiper-slide-next': {
                '.card-image': {
                    transform: 'scale(1.02)'
                },
                '.overlay': {
                    backgroundColor: 'rgba(0,0,0,0.435)'
                },

                '.card-description': {
                    opacity: '1'
                },
                '.card-title': {
                    top: '2rem',
                    opacity: '1'
                },

                '.card-content': {
                    opacity: '1'
                }
            }
        },
        [mq[0]]: {
            '.swiper-slide-active': {
                '.card-image': {
                    transform: 'scale(1.02)'
                },
                '.overlay': {
                    backgroundColor: 'rgba(0,0,0,0.435)'
                },

                '.card-description': {
                    opacity: '1'
                },
                '.card-title': {
                    top: '2rem',
                    opacity: '1'
                },

                '.card-content': {
                    opacity: '1'
                }
            },
            '.swiper-slide-next': {
                '.card-image': {
                    transform: 'scale(1)'
                },
                '.overlay': {
                    backgroundColor: 'transparent'
                },

                '.card-description': {
                    opacity: '0'
                },
                '.card-title': {
                    top: '-2rem',
                    opacity: '0'
                },

                '.card-content': {
                    opacity: '0'
                }
            }
        },

        '.swiper-pagination': {
            bottom: '0'
        },

        '.swiper-pagination-bullet': {
            backgroundColor: red,
            opacity: '1',
            width: '3rem',
            height: '0.4rem',
            borderRadius: '.5rem',
            transform: 'scale(1)'
        },

        '.swiper-pagination-bullet-active': {
            backgroundColor: red
            //transform: scale(1);
        }
    });

    return (
        <div css={cssSwiper}>
            <Swiper {...params}>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </Swiper>
        </div>
    );
};

export default CustomSwiper;

/*



{data.map(item => {
  return (
    <div key={item.ID}>
      <Card data={item} cardStyle={cardStyle} />
    </div>
  );
})}


*/
