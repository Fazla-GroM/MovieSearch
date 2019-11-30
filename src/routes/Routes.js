import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
//pages
import HomePage from '../pages/homePage/HomePage';
import DiscoverPage from '../pages/discoverPage/DiscoverPage';
import SearchPage from '../pages/searchPage/SearchPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
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
                                query: '?=popular'
                            }}
                        />
                    </Route>
                    <Route path="/movies/top-rated">
                        <SearchPage
                            pageData={{
                                title: 'Top Rated Movies',
                                query: '?=top-rated'
                            }}
                        />
                    </Route>
                    <Route path="/movies/upcoming">
                        <SearchPage
                            pageData={{
                                title: 'Upcoming Movies',
                                query: '?=upcoming'
                            }}
                        />
                    </Route>

                    <Route path="/movies/now-playing">
                        <SearchPage
                            pageData={{
                                title: 'Now Playing Movies',
                                query: '?=now-playing'
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
                                query: '?=popular'
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/top-rated">
                        <SearchPage
                            pageData={{
                                title: 'Top Rated tv shows',
                                query: '?=popular'
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/on-tv">
                        <SearchPage
                            pageData={{
                                title: 'Currently airing tv shows',
                                query: '?=popular'
                            }}
                        />
                    </Route>
                    <Route path="/tv-shows/airing-today">
                        <SearchPage
                            pageData={{
                                title: 'Tv shows airing today',
                                query: '?=popular'
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
