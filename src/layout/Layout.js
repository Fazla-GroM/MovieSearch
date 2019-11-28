import React from 'react';
import { css } from '@emotion/core';
//components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MobileSearch from '../components/mobileSearch/MobileSearch';

const Layout = props => {
    return (
        <div css={cssLayout}>
            <Header />
            <MobileSearch />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;

const cssLayout = css({
    minHeight: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',

    '& main': {
        width: '100%',
        minHeight: '100vh'
        //position: 'relative'
    }
});
