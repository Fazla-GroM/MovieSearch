import React from 'react';
import { css } from '@emotion/core';
import tmdb from '../../assets/tmdb.svg';
import { red } from '../../themeVar';
const PoweredBy = () => {
    return (
        <section css={cssPoweredBy}>
            <div className="container">
                <h3>Powered by</h3>
                <a
                    href="https://www.themoviedb.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src={tmdb} alt="The movie database logo" />
                </a>
            </div>
        </section>
    );
};

export default PoweredBy;

const cssPoweredBy = css({
    '& h3': {
        marginTop: '4rem',
        color: red,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '4rem',
        fontWeight: '700'
    },
    '& img': {
        width: '20rem',
        height: '20rem',
        margin: '0 auto',
        display: 'block'
    }
});
