import React from 'react';
import { css } from '@emotion/core';
import { red } from '../../themeVar';
//router
import { Switch, Route, NavLink } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { discoverMovies } from '../../redux/discover/discoverActions';
//components
import DiscoverFilters from '../../components/discoverFilters/DiscoverFilters';
import SearchResults from '../../components/searchResults/SearchResults';

const DiscoverPage = props => {
    const dispatch = useDispatch();

    console.log('discover page');

    return (
        <main css={cssDiscoverPage}>
            <div className="container">
                <h2>
                    Discover
                    <div className="sub-holder">
                        <span>
                            <NavLink
                                activeClassName="active"
                                to="/discover/movies"
                            >
                                Movies
                            </NavLink>
                        </span>
                        <span>
                            <NavLink
                                activeClassName="active"
                                to="/discover/tv-shows"
                            >
                                Tv Shows
                            </NavLink>
                        </span>
                    </div>
                </h2>
                <Switch>
                    <Route exact path="/discover">
                        <h3>
                            <span>!</span>Chose your fix<span>!</span>
                        </h3>
                    </Route>
                    <Route path="/discover/movies">
                        <DiscoverFilters />
                    </Route>
                    <Route path="/discover/tv-shows">
                        <DiscoverFilters />
                    </Route>
                </Switch>

                <SearchResults />
            </div>
        </main>
    );
};

export default DiscoverPage;

const cssDiscoverPage = css({
    '.container': {
        paddingTop: '7rem',
        paddingBottom: '5rem'
    },

    '& h2': {
        color: red,
        fontWeight: '700',
        fontSize: '3rem',
        textAlign: 'center',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        '.sub-holder': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '& > :not(:last-child)': {
                marginRight: '3rem'
            },

            '& a ': {
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.6rem',
                paddingBottom: '.5rem',
                borderBottom: '1px solid transparent',
                transition: 'all .5s ease-in-out'
            },

            '.active': {
                //textShadow: `0px 0px 10px ${red}`,
                //transform: 'scale(1.3)'
                borderBottom: `1px solid ${red}`
            }
        }
    },
    '& h3': {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '3rem',

        '& span': {
            margin: '0 1rem',
            color: red
        }
    }
});
