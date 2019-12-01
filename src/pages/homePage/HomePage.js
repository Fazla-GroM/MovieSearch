import React, { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
    getNowPlayingMovies,
    getTopRatedMovies
} from '../../redux/movies/moviesActions';
import {
    selectNowPlayingMovies,
    selectTopRatedMovies
} from '../../redux/movies/moviesSelectors';
import {
    getTopRatedTvShows,
    getAiringNowTvShows
} from '../../redux/tvShows/tvShowsActions';
import {
    selectTopRatedTvShows,
    selectAiringNowTvShows
} from '../../redux/tvShows/tvShowsSelectors';

//sections
import HomePageFeatures from './homePageSections/HomePageFeatures';
import HomePageTrending from './homePageSections/HomePageTrending';
import HomePageTestimonials from './homePageSections/HomePageTestimonials';
//components
import HeroBox from '../../components/heroBox/HeroBox';
import PoweredBy from '../../components/poweredBy/PoweredBy';

const HomePage = props => {
    const dispatch = useDispatch();
    const moviesInTheatres = useSelector(selectNowPlayingMovies);
    const topRatedMovies = useSelector(selectTopRatedMovies);
    const nowPlayingTvShows = useSelector(selectAiringNowTvShows);
    const topRatedTvShows = useSelector(selectTopRatedTvShows);

    const getDataForPage = () => {
        //check if we have data to prevent unnecesary fetching
        if (!moviesInTheatres.results.length) dispatch(getNowPlayingMovies());
        if (!topRatedMovies.results.length) dispatch(getTopRatedMovies());
        if (!nowPlayingTvShows.results.length) dispatch(getAiringNowTvShows());
        if (!topRatedTvShows.results.length) dispatch(getTopRatedTvShows());
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
                movieData={moviesInTheatres.results}
                tvShowData={nowPlayingTvShows.results}
            />
            <HomePageTestimonials />
            <HomePageTrending
                movieTitle="Popular Movies"
                tvTitle="Popular TV Shows"
                movieData={topRatedMovies.results}
                tvShowData={topRatedTvShows.results}
            />
            <PoweredBy />
        </main>
    );
};

export default HomePage;
