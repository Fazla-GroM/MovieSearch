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

const Routes = ({ location }) => {
    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 400, exit: 400 }}
                classNames="fade"
            >
                <Switch location={location}>
                    {/* home */}
                    <Route exact path="/" component={HomePage} />
                    <Route
                        path="/discover"
                        render={props => (
                            <DiscoverPage
                                {...props}
                                pageData={{
                                    title: 'Movies',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />
                    {/* movies route */}
                    {/* redirect to most popular movies */}
                    <Route exact path="/movies">
                        <Redirect to="/movies/popular" />
                    </Route>
                    <Route
                        path="/movies/popular"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Popular movies',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />

                    <Route
                        path="/movies/top-rated"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Top Rated Movies',
                                    query: '?=top-rated'
                                }}
                            />
                        )}
                    />
                    <Route
                        path="/movies/upcoming"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Upcoming Movies',
                                    query: '?=upcoming'
                                }}
                            />
                        )}
                    />
                    <Route
                        path="/movies/now-playing"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Now Playing Movies',
                                    query: '?=now-playing'
                                }}
                            />
                        )}
                    />
                    {/* tvShows route */}
                    {/* redirect to most popular tv-shows */}
                    <Route exact path="/tv-shows">
                        <Redirect to="/tv-shows/popular/popular" />
                    </Route>
                    <Route
                        path="/tv-shows/popular"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Popular tv shows',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />
                    <Route
                        path="/tv-shows/top-rated"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Top Rated tv shows',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />
                    <Route
                        path="/tv-shows/on-tv"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Currently airing tv shows',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />
                    <Route
                        path="/tv-shows/airing-today"
                        render={props => (
                            <SearchPage
                                {...props}
                                pageData={{
                                    title: 'Tv shows airing today',
                                    query: '?=popular'
                                }}
                            />
                        )}
                    />

                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Routes);
