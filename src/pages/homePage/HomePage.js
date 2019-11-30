import React, { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
    getMoviesInTheatres,
    getNowPlayingTvShows,
    getTopRatedMovies,
    getTopRatedTvShows
} from '../../redux/home/homeActions';
import {
    selectMoviesInTheatres,
    selectNowPlayingTvShows,
    selectTopRatedMovies,
    selectTopRatedTvShows
} from '../../redux/home/homeSelectors';
//sections
import HomePageFeatures from './homePageSections/HomePageFeatures';
import HomePageTrending from './homePageSections/HomePageTrending';
import HomePageTestimonials from './homePageSections/HomePageTestimonials';
//components
import HeroBox from '../../components/heroBox/HeroBox';
import PoweredBy from '../../components/poweredBy/PoweredBy';

const HomePage = props => {
    const dispatch = useDispatch();
    const moviesInTheatres = useSelector(selectMoviesInTheatres);
    const nowPlayingTvShows = useSelector(selectNowPlayingTvShows);
    const topRatedMovies = useSelector(selectTopRatedMovies);
    const topRatedTvShows = useSelector(selectTopRatedTvShows);

    const getDataForPage = () => {
        //check if we have data to prevent unnecesary fetching
        if (!moviesInTheatres.length) dispatch(getMoviesInTheatres());
        if (!nowPlayingTvShows.length) dispatch(getNowPlayingTvShows());
        if (!topRatedMovies.length) dispatch(getTopRatedMovies());
        if (!topRatedTvShows.length) dispatch(getTopRatedTvShows());
    };

    useEffect(() => {
        getDataForPage();
    }, []);

    return (
        <main>
            <HeroBox />
            <HomePageFeatures />
            <HomePageTrending
                movieTitle="In Theaters"
                tvTitle="On TV"
                movieData={moviesInTheatres}
                tvShowData={nowPlayingTvShows}
            />
            <HomePageTestimonials />
            <HomePageTrending
                movieTitle="Popular Movies"
                tvTitle="Popular TV Shows"
                movieData={topRatedMovies}
                tvShowData={topRatedTvShows}
            />
            <PoweredBy />
        </main>
    );
};

export default HomePage;
