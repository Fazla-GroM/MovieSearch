import React from 'react';
import { css } from '@emotion/core';
import { red, greyLight } from '../../themeVar';
import image from '../../assets/bg.jpg';

const Card = ({ data }) => {
    const breakpoints = [768, 996, 1200];
    const mq = breakpoints.map(
        bp => ` @media only screen and (min-width: ${bp}px)`
    );

    const cssCard = css({
        height: '40rem',
        position: 'relative',
        overflow: 'hidden',

        '&:hover': {
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

        '.card-description': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: '2',
            transform: 'translate(-50%,-50%)',
            textAlign: 'center',
            fontStyle: 'italic',
            color: 'white',
            width: '100%',
            opacity: '0',
            transition: 'opacity .4s ease-in-out',
            backfaceVisibility: 'hidden'
        },

        '.card-image': {
            position: 'relative',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            transition: 'all 0.4s ease-in-out'
        },

        '.overlay': {
            position: 'absolute',
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%'
        },

        '.card-title': {
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: '-4rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase',
            fontWeight: '700',
            padding: '1rem 1rem',
            backgroundColor: 'black',
            color: red,
            opacity: '0',
            transition: 'all .2s ease-in-out'
        },
        '.card-content': {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            backgroundColor: 'black',
            padding: '1rem 1rem',
            opacity: '0',
            transition: 'opacity .4s ease-in-out',

            '.content-top, .content-bottom': {
                '& li': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },

            '.content-title': {
                color: red,
                marginRight: '.5rem',
                fontWeight: '700',
                textTransform: 'capitalize'
            },
            '.content-value': {
                color: 'white',
                fontSize: '1.4rem'
            }
        }
    });

    return (
        <div css={cssCard}>
            <div className="card-description">Some movie description</div>
            <div className="card-image">
                <div className="overlay"></div>
            </div>
            <div className="card-title">Movie Title</div>
            <div className="card-content">
                <ul className="content-top">
                    <li>
                        <span className="content-title">imdb</span>
                        <span className="content-value">4.6</span>
                    </li>
                    <li>
                        <span className="content-title">0</span>
                        <span className="content-value">1.3h</span>
                    </li>
                    <li>
                        <span className="content-title">score</span>
                        <span className="content-value">88</span>
                    </li>
                </ul>
                <ul className="content-bottom">
                    <li>
                        <span className="content-title">revenue</span>
                        <span className="content-value">$2.1m</span>
                    </li>
                    <li>
                        <span className="content-title">language</span>
                        <span className="content-value">english</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
