import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/core';
import { red, greyLight, greyDark } from '../../themeVar';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectIsNavOpen } from '../../redux/globals/globalsSelectors';
import { setIsNavOpen } from '../../redux/globals/globalsActions';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faSearch,
    faHeart,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

const Footer = props => {
    const dispatch = useDispatch();
    const isNavOpen = useSelector(selectIsNavOpen);

    const breakpoints = [768, 996, 1024, 1200];
    const mq = breakpoints.map(
        bp => ` @media only screen and (min-width: ${bp}px)`
    );

    const cssFooter = css({
        position: 'fixed',
        bottom: '0',
        zIndex: '1000',
        width: '100%',
        backgroundColor: greyDark,
        borderTop: `1px solid ${greyLight}`,
        borderBottom: `1px solid ${greyLight}`,
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'center',

        [mq[1]]: {
            display: 'none'
        },

        '.nav': {
            width: '100%',
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center'
        },

        '.nav-list': {
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center',
            width: '100%',

            '& :not(:last-child)': {
                borderRight: `1px solid ${greyLight}`
            },

            '& li': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            },

            '& .nav-button': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: isNavOpen ? red : greyLight,
                width: '100%',
                padding: '1rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'color .4s ease-in-out',

                [mq[0]]: {
                    padding: '2rem 0',

                    '& svg': {
                        width: '3rem',
                        height: '3rem'
                    }
                }
            },

            '& a': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: greyLight,
                width: '100%',
                padding: '1rem 0',

                [mq[0]]: {
                    padding: '2rem 0',

                    '& svg': {
                        width: '3rem',
                        height: '3rem'
                    }
                }
            }
        },

        '.active': {
            '& svg': {
                color: red
            }
        }
    });

    return (
        <footer css={cssFooter}>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <NavLink
                            onClick={() => dispatch(setIsNavOpen(false))}
                            exact
                            to="/"
                            activeClassName="active"
                        >
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className="nav-button"
                            onClick={() => dispatch(setIsNavOpen(!isNavOpen))}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => dispatch(setIsNavOpen(false))}
                            to="/favorites"
                            activeClassName="active"
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => dispatch(setIsNavOpen(false))}
                            to="/signup"
                            activeClassName="active"
                        >
                            <FontAwesomeIcon icon={faUsers} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
