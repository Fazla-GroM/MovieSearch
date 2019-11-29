import React from 'react';
//sections
import HomePageFeatures from './homePageSections/HomePageFeatures';
import HomePageTrending from './homePageSections/HomePageTrending';
import HomePageTestimonials from './homePageSections/HomePageTestimonials';
//components
import HeroBox from '../../components/heroBox/HeroBox';
import PoweredBy from '../../components/poweredBy/PoweredBy';

const HomePage = props => {
    console.log(props);
    return (
        <main>
            <HeroBox />
            <HomePageFeatures />
            <HomePageTrending />
            <HomePageTestimonials />
            <PoweredBy />
        </main>
    );
};

export default HomePage;
