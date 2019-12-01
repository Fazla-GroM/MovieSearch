import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
//pages
import HomePage from '../pages/homePage/HomePage';
import DiscoverPage from '../pages/discoverPage/DiscoverPage';
import SearchPage from '../pages/searchPage/SearchPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
//redux
import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getNowPlayingMovies
} from '../redux/movies/moviesActions';
import {
    selectPopularMovies,
    selectNowPlayingMovies,
    selectTopRatedMovies,
    selectUpcomingMovies
} from '../redux/movies/moviesSelectors';
import {
    getPopularTvShows,
    getTopRatedTvShows,
    getAiringNowTvShows,
    getLatestTvShows
} from '../redux/tvShows/tvShowsActions';
import {
    selectPopularTvShows,
    selectTopRatedTvShows,
    selectAiringNowTvShows,
    selectLatestTvShows
} from '../redux/tvShows/tvShowsSelectors';
//css transition
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Routes = props => {
    const { location } = props;
    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 400, exit: 400 }}
                classNames="fade"
            >
                <Switch location={location}>
                    {/* home */}
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    {/* discover route */}
                    <Route path="/discover">
                        <DiscoverPage />
                    </Route>
                    {/* movies route */}
                    {/* redirect to most popular movies */}
                    <Route exact path="/movies">
                        <Redirect to="/movies/popular" />
                    </Route>
                    <Route path="/movies/popular">
                        <SearchPage
                            {...props}
                            pageData={{
                                title: 'Popular movies',
                                getPageData: getPopularMovies,
                                selector: selectPopularMovies
                            }}
                        />
                    </Route>
                    <Route path="/movies/top-rated">
                        <SearchPage
                            pageData={{
                                title: 'Top Rated Movies',
                                getPageData: getTopRatedMovies,
                                selector: selectTopRatedMovies
                            }}
                            {...props}
                        />
                    </Route>
                    <Route path="/movies/upcoming">
                        <SearchPage
                            pageData={{
                                title: 'Upcoming Movies',
                                getPageData: getUpcomingMovies,
                                selector: selectUpcomingMovies
                            }}
                        />
                    </Route>

                    <Route path="/movies/now-playing">
                        <SearchPage
                            pageData={{
                                title: 'Now Playing Movies',
                                getPageData: getNowPlayingMovies,
                                selector: selectNowPlayingMovies
                            }}
                        />
                    </Route>
                    {/* tvShows route */}
                    {/* redirect to most popular tv-shows */}
                    <Route exact path="/tv-shows">
                        <Redirect to="/tv-shows/popular" />
                    </Route>
                    <Route path="/tv-shows/popular">
                        <SearchPage
                            pageData={{
                                title: 'Popular tv shows',
                                getPageData: getPopularTvShows,
                                selector: selectPopularTvShows
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/top-rated">
                        <SearchPage
                            pageData={{
                                title: 'Top Rated tv shows',
                                getPageData: getTopRatedTvShows,
                                selector: selectTopRatedTvShows
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/on-tv">
                        <SearchPage
                            pageData={{
                                title: 'Currently airing tv shows',
                                getPageData: getAiringNowTvShows,
                                selector: selectAiringNowTvShows
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/latest">
                        <SearchPage
                            pageData={{
                                title: 'Latest Tv Shows',
                                getPageData: getLatestTvShows,
                                selector: selectLatestTvShows
                            }}
                        />
                    </Route>
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Routes);
