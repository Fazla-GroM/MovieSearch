import React from "react";
import { css } from "@emotion/core";
import { red, greyLight } from "../../themeVar";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faImdb,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ data, homepage }) => {
    return (
        <div css={cssSocialLinks}>
            <h4>Social</h4>
            <ul css={cssList}>
                {homepage && (
                    <li className='link'>
                        <a
                            href={homepage}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    </li>
                )}
                {data?.facebook_id && (
                    <li className='face'>
                        <a
                            href={`https://www.facebook.com/${data.facebook_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                )}
                {data?.instagram_id && (
                    <li className='insta'>
                        <a
                            href={`https://www.instagram.com/${data.instagram_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                )}
                {data?.twitter_id && (
                    <li className='twitter'>
                        <a
                            href={`https://www.twitter.com/${data.twitter_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                )}
                {data?.imdb_id && (
                    <li className='imdb'>
                        <a
                            href={`https://www.imdb.com/${data.imdb_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FontAwesomeIcon icon={faImdb} />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SocialLinks;

const cssSocialLinks = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& h4": {
        color: red,
        fontWeight: "700",
        fontSize: "1.8rem",
        textAlign: "left",
        width: "100%",
    },
});

const cssList = css({
    marginTop: "1rem",
    listStyle: "none",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",

    "&>:not(:last-child)": {
        marginRight: "2rem",
    },

    ".face,.insta,.twitter,.link,.imdb": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "& a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",

            "& svg": {
                width: "2.5rem",
                height: "2.5rem",
            },
        },
    },
    ".link": {
        "& a": {
            "& svg": {
                color: greyLight,
            },
        },
    },
    ".face": {
        "& a": {
            "& svg": {
                color: "rgb(59, 89, 152)",
            },
        },
    },
    ".insta": {
        "& a": {
            "& svg": {
                color: "rgb(225,48,108)",
            },
        },
    },
    ".twitter": {
        "& a": {
            "& svg": {
                color: "rgb(29,161,242)",
            },
        },
    },
    ".imdb": {
        "& a": {
            "& svg": {
                color: "rgb(222, 181, 34)",
            },
        },
    },
});
