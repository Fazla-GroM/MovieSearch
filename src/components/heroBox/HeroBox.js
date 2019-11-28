import React from 'react';
import { css } from '@emotion/core';
import { red, white } from '../../themeVar';
//image
import bgImage from '../../assets/bg.jpg';

const HeroBox = props => {
    const breakpoints = [768, 996, 1200];
    const mq = breakpoints.map(
        bp => ` @media only screen and (min-width: ${bp}px)`
    );
    const cssHero = css({
        '.image': {
            backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.735),rgba(0, 0, 0, 0.035)),url(${bgImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '80vh'
        },

        '.container': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },

        '.title': {
            '& h1': {
                display: 'block',
                fontSize: '4rem',
                fontWeight: '700',
                color: red,
                [mq[0]]: {
                    fontSize: '6rem'
                }
            },

            '& h3': {
                display: 'block',
                fontSize: '1.5rem',
                width: '100%',
                color: white,

                [mq[0]]: {
                    width: '60rem',
                    fontSize: '3rem'
                }
            }
        }
    });

    return (
        <section css={cssHero}>
            <div className="image">
                <div className="container">
                    <div className="title">
                        <h1>Movie Search</h1>
                        <h3>
                            Your number One place to find,store and share your
                            favorite movies with friends!
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBox;
