import React from 'react';
import { css } from '@emotion/core';
import bgImage from '../../../assets/bg.jpg';
import { red } from '../../../themeVar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
//components
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const HomePageTestimonials = () => {
    const params = {
        loop: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };

    return (
        <section css={cssTestimonials}>
            <h3>What our Users say</h3>
            <div className="background">
                <div className="overlay">
                    <Swiper {...params}>
                        <div css={cssTestimonialCard}>
                            <div css={cssCommentCloud}>
                                <FontAwesomeIcon icon={faComment} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <img src={bgImage} />
                            <h4>Odlično!!!</h4>
                            <blockquote>
                                <p>
                                    Venison meatloaf biltong, landjaeger buffalo
                                    jerky ground round hamburger short loin.
                                    Swine frankfurter pastrami rump. Bresaola
                                    tongue ham hock, ham tail chicken porchetta
                                    ball tip meatloaf filet mignon. Buffalo
                                    frankfurter pastrami, biltong doner
                                    porchetta andouille ham hock chislic salami
                                    pig pork chop.
                                </p>
                                <cite>Marko Horvatek</cite>
                            </blockquote>
                        </div>
                        <div css={cssTestimonialCard}>
                            <div css={cssCommentCloud}>
                                <FontAwesomeIcon icon={faComment} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <img src={bgImage} />
                            <h4>Odlično!!!</h4>
                            <blockquote>
                                <p>
                                    Venison meatloaf biltong, landjaeger buffalo
                                    jerky ground round hamburger short loin.
                                    Swine frankfurter pastrami rump. Bresaola
                                    tongue ham hock, ham tail chicken porchetta
                                    ball tip meatloaf filet mignon. Buffalo
                                    frankfurter pastrami, biltong doner
                                    porchetta andouille ham hock chislic salami
                                    pig pork chop.
                                </p>
                                <cite>Marko Horvatek</cite>
                            </blockquote>
                        </div>
                        <div css={cssTestimonialCard}>
                            <div css={cssCommentCloud}>
                                <FontAwesomeIcon icon={faComment} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <img src={bgImage} />
                            <h4>Odlično!!!</h4>
                            <blockquote>
                                <p>
                                    Venison meatloaf biltong, landjaeger buffalo
                                    jerky ground round hamburger short loin.
                                    Swine frankfurter pastrami rump. Bresaola
                                    tongue ham hock, ham tail chicken porchetta
                                    ball tip meatloaf filet mignon. Buffalo
                                    frankfurter pastrami, biltong doner
                                    porchetta andouille ham hock chislic salami
                                    pig pork chop.
                                </p>
                                <cite>Marko Horvatek</cite>
                            </blockquote>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HomePageTestimonials;

const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssTestimonials = css({
    width: '100%',

    '.swiper-container': {
        height: '100%'
    },

    '.swiper-button-next, .swiper-button-prev': {
        color: red,
        top: '40%',

        [mq[2]]: {
            top: '50%'
        }
    },

    '& h3': {
        fontWeight: 700,
        textTransform: 'uppercase',
        color: red,
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '4rem',
        position: 'relative'
    },
    '.background': {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60rem',
        padding: '1rem',
        backgroundAttachment: 'fixed'
    },
    '.overlay': {
        backgroundColor: 'rgba(0, 0, 0, 0.735)',
        width: '100%',
        height: '100%',
        borderRadius: '.4rem'
    }
});

const cssTestimonialCard = css({
    //backgroundColor: 'blue',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    img: {
        width: '10rem',
        height: '10rem',
        borderRadius: '50%',

        [mq[2]]: {
            width: '15rem',
            height: '15rem'
        }
    },
    h4: {
        color: 'white',
        margin: '2rem',
        fontWeight: '700',
        fontSize: '4rem',
        textAlign: 'center'
    },
    blockquote: {
        color: 'white',
        textAlign: 'center',
        padding: ' 1rem 2rem 0 2rem',

        [mq[2]]: {
            padding: ' 0 20rem'
        },

        p: {
            marginBottom: '2rem'
        },
        cite: {
            paddingBottom: '.5rem',
            borderBottom: `1.5px solid ${red}`
        }
    }
});

const cssCommentCloud = css({
    position: 'absolute',
    top: '1.5rem',
    left: '65%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [mq[2]]: {
        top: '5rem',
        left: '55%'
    },

    '& svg': {
        width: '7rem !important',
        height: '7rem !important',

        [mq[2]]: {
            width: '10rem !important',
            height: '10rem !important'
        },

        '&:last-child': {
            position: 'absolute',
            width: '3rem !important',
            height: '3rem !important',
            color: red
        }
    }
});
