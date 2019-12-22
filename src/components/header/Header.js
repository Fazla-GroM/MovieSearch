import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/core";
import { red, greyDark, greyLight } from "../../themeVar";
//components
import SearchBar from "../searchBar/SearchBar";

const Header = props => {
    return (
        <header css={cssHeader}>
            <div className='container'>
                <SearchBar />
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li>
                            <NavLink exact to='/' activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/movies' activeClassName='active'>
                                Browse Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/favorites' activeClassName='active'>
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup' activeClassName='active'>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

const breakpoints = [768, 996, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`,
);
const cssHeader = css({
    position: "fixed",
    zIndex: "1000",
    top: "0",
    width: "100%",
    display: "flex",
    alignItems: " center",
    justifyContent: "center",
    backgroundColor: greyDark,
    borderBottom: `1px solid ${greyLight}`,

    [mq[1]]: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.735)",
        borderBottom: "none",
    },
    ".container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [mq[1]]: {
            justifyContent: "flex-start",
        },
    },

    ".nav": {
        alignItems: " center",
        display: "none",
        justifyContent: "center",

        [mq[1]]: {
            display: "flex",
        },
    },

    ".nav-list": {
        display: "flex",
        alignItems: " center",
        justifyContent: "center",

        "& :not(:last-child)": {
            marginRight: "25px",
        },

        "& a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: red,
            padding: "1rem 1rem",
            transition: "all 0.4s ease-in-out",
            backfaceVisibility: "hidden",
            fontWeight: "700",

            "&:hover": {
                textShadow: `0px 0px 10px ${red}`,
                transform: "scale(1.3)",
            },
        },
    },

    ".active": {
        color: red,
        textShadow: `0px 0px 10px ${red}`,
        transform: "scale(1.3)",
    },
});
