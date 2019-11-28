import React from 'react';
//global CSS
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { background } from './themeVar';
//LAYOUT
import Layout from './layout/Layout';
//Routes
import Routes from './routes/Routes';

const App = props => {
    return (
        <>
            <Global
                styles={css`
                    ${emotionReset}
                     *, 
                     *::after, 
                     *::before {
                        margin: 0,
                        padding:0;
                        box-sizing: inherit;
                        font-smoothing: antialiased;
                    }
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                        scroll-behavior: smooth;
                    }
                    body {
                        line-height: 1.6;
                        font-family: "Open Sans", Sans Serif;
                        font-size: 1.6rem;
                        background-color: ${background};
                    }
                    .container {
                        width: 100%;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: auto;
                        margin-left: auto;
                    }

                    @media (min-width: 576px) {
                    .container {
                        max-width: 540px;
                        }
                    }

                    @media (min-width: 768px) {
                    .container {
                        max-width: 720px;
                        }
                    }

                    @media (min-width: 992px) {
                    .container {
                        max-width: 960px;
                        }
                    }

                    @media (min-width: 1200px) {
                    .container {
                        max-width: 1336px;
                    }

                    .fade-enter {
                        opacity: 0;
                        z-index: 1;
                    }

                    .fade-enter.fade-enter-active {
                        opacity: 1;
                        transition: opacity 650ms ease-in;
                    }

                    .slidein {
                        opacity: 0;
                    
                    }

                    .slidein-enter.slidein-enter-active {
                        opacity: 1;
                        transition: opacity 650ms ease-in;
                    }

                    
                }
                    
                `}
            />
            <Layout>
                <Routes />
            </Layout>
        </>
    );
};

export default App;
