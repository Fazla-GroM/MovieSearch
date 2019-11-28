import React, { useReducer, useRef } from 'react';
//css
import { css } from '@emotion/core';
import { greyDark, greyLight, red } from '../../../themeVar';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDesktop,
    faTabletAlt,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faTwitter,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import bgImage from '../../../assets/bg.jpg';

const HomePageFeatures = props => {
    const initialState = {
        isPriceActive: false,
        isAppActive: true,
        isShareActive: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'price':
                return {
                    ...state,
                    isPriceActive: true,
                    isAppActive: false,
                    isShareActive: false
                };
            case 'app':
                return {
                    ...state,
                    isPriceActive: false,
                    isAppActive: true,
                    isShareActive: false
                };
            case 'share':
                return {
                    ...state,
                    isPriceActive: false,
                    isAppActive: false,
                    isShareActive: true
                };
            default:
                return state;
        }
    };

    const [
        { isPriceActive, isAppActive, isShareActive },
        dispatch
    ] = useReducer(reducer, initialState);

    const infoContainer = useRef(null);

    const handleClick = action => {
        infoContainer.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        dispatch({ type: action });
    };

    return (
        <section css={cssFeatures}>
            <div className="bar">
                <ul ref={infoContainer} className="list">
                    <li
                        onClick={() => {
                            handleClick('price');
                        }}
                        className={`${isPriceActive && 'active'}`}
                    >
                        No commitments, completely free
                    </li>
                    <li
                        onClick={() => {
                            handleClick('app');
                        }}
                        className={`${isAppActive && 'active'}`}
                    >
                        PWA not enough?! Now available as Mobile App
                    </li>
                    <li
                        onClick={() => {
                            handleClick('share');
                        }}
                        className={`${isShareActive && 'active'}`}
                    >
                        Share your favorite movies with friends
                    </li>
                </ul>
            </div>
            <div className="box">
                <div className="container">
                    <ul id="content" className="box-content">
                        {isPriceActive && (
                            <>
                                <li className="box-text">
                                    A simple yet beautiful and user friendly
                                    movie search app made for fellow movie
                                    lovers. No adds and comercials and
                                    completely free.
                                </li>
                                <li className="box-image">
                                    <img src={bgImage} alt="image" />
                                </li>
                            </>
                        )}
                        {isAppActive && (
                            <>
                                <li className="box-text">
                                    Tired of computers?! No problem, this app is
                                    beautifully crafted to work on mobile and
                                    tablet devices, Not satisfied?! Try out our
                                    brand new Mobile App
                                </li>
                                <li className="box-image">
                                    <ul className="devices">
                                        <li className="lap">
                                            <FontAwesomeIcon
                                                icon={faDesktop}
                                                size="2x"
                                            />
                                        </li>
                                        <li className="tab">
                                            <FontAwesomeIcon
                                                icon={faTabletAlt}
                                                size="2x"
                                            />
                                        </li>
                                        <li className="mob">
                                            <FontAwesomeIcon
                                                icon={faMobileAlt}
                                                size="2x"
                                            />
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}
                        {isShareActive && (
                            <>
                                <li className="box-text">
                                    Do you want your own favorite movies list?!
                                    Movie Search to the rescue!! You can store
                                    all your favorite movies and you can also
                                    share them with friends! No more boring
                                    Saturday nights!
                                </li>
                                <li className="box-image">
                                    <ul className="social-list">
                                        <li className="face">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                                size="2x"
                                            />
                                        </li>
                                        <li className="whup">
                                            <FontAwesomeIcon
                                                icon={faWhatsapp}
                                                size="2x"
                                            />
                                        </li>
                                        <li className="tweet">
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                size="2x"
                                            />
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomePageFeatures;

const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`
);

const cssFeatures = css({
    width: '100%',

    '.bar': {
        backgroundColor: greyDark,
        width: '100%',
        borderBottom: `1px solid ${greyLight}`,

        [mq[2]]: {
            height: '20vh'
        },

        '& > .container': {
            padding: '0',
            margin: '0 ',
            marginRight: '0'
        }
    },

    '.container': {
        height: '100%'
    },

    '.list': {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        height: '100%',
        maxWidth: '1336px',
        margin: '0 auto',

        '.active': {
            color: 'white',
            borderBottom: `4px solid ${red}`
        },

        '& li': {
            flex: '1',
            color: greyLight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '1.4rem',
            padding: '1rem',
            textAlign: 'left',
            borderBottom: `4px solid transparent`,
            transition: 'all 0.3s ease-in-out',

            [mq[2]]: {
                fontSize: '1.6rem'
            },

            '&:hover': {
                color: 'white',
                borderBottom: `4px solid ${red}`
            }
        }
    },

    '.box': {
        height: '80vh',

        '&-content': {
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',

            [mq[0]]: {
                flexDirection: 'row'
            }
        },

        '&-text': {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        },

        '&-image': {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '.devices': {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',

                '.lap, .tab, .mob': {
                    color: greyLight,
                    position: 'absolute'
                },

                '.lap': {
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: '3',
                    [mq[0]]: {
                        left: '20%',
                        transform: 'translateX(0)'
                    },
                    '& svg': {
                        width: '25rem',
                        height: '25rem'
                    }
                },
                '.tab': {
                    zIndex: '2',
                    left: '50%',
                    top: '20%',

                    transform: 'translateX(-50%)',
                    [mq[0]]: {
                        left: '47%',
                        transform: 'translateX(0)',
                        top: 'initial'
                    },
                    '& svg': {
                        width: '12rem',
                        height: '12rem',
                        [mq[0]]: {
                            width: '15rem',
                            height: '15rem'
                        }
                    }
                },
                '.mob': {
                    zIndex: '1',
                    left: '50%',
                    top: '27%',
                    transform: 'translateX(-50%)',
                    [mq[0]]: {
                        left: '63%',
                        transform: 'translateX(0)',
                        top: 'initial'
                    },
                    '& svg': {
                        width: '8rem',
                        height: '8rem'
                    }
                }
            },
            '.social-list': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '& > :not(:last-child)': {
                    marginRight: '4rem'
                },

                '.face, .whup, .tweet': {
                    '& svg': {
                        width: '8rem',
                        height: '8rem',
                        color: greyLight,
                        transition: 'color .4s ease-in-out'
                    }
                },
                '.face:hover': {
                    '& svg': {
                        color: 'rgb(66,103,178)'
                    }
                },
                '.tweet:hover': {
                    '& svg': {
                        color: '#1DA1F2'
                    }
                },
                '.whup:hover': {
                    '& svg': {
                        color: '#25D366'
                    }
                }
            },

            '& img': {
                width: '200px'
            }
        }
    }
});
