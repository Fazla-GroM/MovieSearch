import { useReducer } from 'react';
import { NavLink } from 'react-router-dom';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
//css
import { css } from '@emotion/core';
import { red, greyDark, greyLight } from '../../themeVar';

//object.entries
//Object.entries({search: "sfaf"}).forEach(([type,value])=> querry.push(`&${type}?=${value}`))
const initialState = {
    //Switch everything to false if you want colapsable sections
    isDiscoverOpen: true,
    isMoviesOpen: true,
    isTvShowsOpen: true,
    isPeopleOpen: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'discover':
            return {
                ...state,
                isDiscoverOpen: action.payload,
                isMoviesOpen: false,
                isTvShowsOpen: false,
                isPeopleOpen: false
            };
        case 'movies':
            return {
                ...state,
                isDiscoverOpen: false,
                isMoviesOpen: action.payload,
                isTvShowsOpen: false,
                isPeopleOpen: false
            };
        case 'tvshows':
            return {
                ...state,
                isDiscoverOpen: false,
                isMoviesOpen: false,
                isTvShowsOpen: action.payload,
                isPeopleOpen: false
            };
        case 'people':
            return {
                ...state,
                isDiscoverOpen: false,
                isMoviesOpen: false,
                isTvShowsOpen: false,
                isPeopleOpen: action.payload
            };
        default:
            return state;
    }
};

const SearchBox = props => {
    const [
        { isDiscoverOpen, isMoviesOpen, isTvShowsOpen, isPeopleOpen },
        dispatch
    ] = useReducer(reducer, initialState);

    const handleClick = (e, action, value) => {
        e.stopPropagation();
        dispatch({ type: action, payload: !value });
    };

    return (
        <section css={cssSearchBox}>
            <div className="container">
                <ul css={cssSearchList}>
                    <li>
                        <h4
                            onClick={e =>
                                handleClick(e, 'discover', isDiscoverOpen)
                            }
                        >
                            Discover
                        </h4>
                        <ul
                            css={cssSearchSub}
                            className={isDiscoverOpen ? 'open' : ''}
                        >
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/discover/movies"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/discover/tv-shows"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Tv Shows
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4
                            onClick={e =>
                                handleClick(e, 'movies', isMoviesOpen)
                            }
                        >
                            Movies
                        </h4>
                        <ul
                            className={isMoviesOpen ? 'open' : ''}
                            css={cssSearchSub}
                        >
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/movies/popular"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Popular
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/movies/top-rated"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Top Rated
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/movies/upcoming"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Upcoming
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/movies/now-playing"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Now Playing
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4
                            onClick={e =>
                                handleClick(e, 'tvshows', isTvShowsOpen)
                            }
                        >
                            Tv Shows
                        </h4>
                        <ul
                            className={isTvShowsOpen ? 'open' : ''}
                            css={cssSearchSub}
                        >
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/tv-shows/popular"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Popular
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/tv-shows/top-rated"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Top Rated
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/tv-shows/on-tv"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    On Tv
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/tv-shows/latest"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Latest Tv Shows
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4
                            onClick={e =>
                                handleClick(e, 'people', isPeopleOpen)
                            }
                        >
                            People
                        </h4>
                        <ul
                            className={isPeopleOpen ? 'open' : ''}
                            css={cssSearchSub}
                        >
                            <li>
                                <NavLink activeClassName="active" to="/people">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    Popular People
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SearchBox;

const cssSearchBox = css({
    width: '100%',
    height: '100%',

    '.container': {
        paddingTop: '5rem',
        height: '100%'
        //backgroundColor: 'hotpink'
    }
});

const cssSearchList = css({
    overflowY: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',

    '& >li': {
        padding: '1rem 0',
        borderBottom: `.6px solid ${greyLight}`,
        width: '100%',

        '& h4': {
            textTransform: 'uppercase',
            fontWeight: '700',
            color: red,
            marginBottom: '1rem'
        }
    },

    '.open': {
        maxHeight: '50rem'
    }
});

const cssSearchSub = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    maxHeight: '0px',
    overflow: 'hidden',
    transition: 'max-height .5s ease-in-out',

    '& li': {
        '& a': {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.4rem',
            fontWeight: '700',

            '& svg': {
                color: red,
                marginRight: '0',
                width: '0px !important',
                transition: 'all .4s'
            }
        }
    },

    '.active': {
        '& svg': {
            marginRight: '.8rem',
            width: 'initial !important'
        }
    }
});
