import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/movies/moviesActions";
import { selectMovie } from "../../redux/movies/moviesSelectors";

const imgUrl = process.env.IMAGE_URL;

/// to do remove image from containre and all content

const MovieDetailsPage = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    console.log(movie);
    useEffect(() => {
        dispatch(getMovie(history.location.state.id));
    }, []);

    const cssPosterImage = css({
        backgroundImage: `url(${imgUrl}/w780${movie.poster_path ||
            movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "80vh",
        backfaceVisibility: "hidden",
        overflow: "hidden",
    });

    return (
        <main css={cssMovieDetailsPage}>
            <div className='container'>
                <section css={cssContent}>
                    <div css={cssPosterImage} />
                    <div css={cssAbout}>
                        <h2>
                            {movie.title || movie.original_title}
                            {movie.tagline && <span>{movie.tagline}</span>}
                        </h2>
                        {movie.homepage && (
                            <ul className='homepage'>
                                <li>Homepage</li>
                                <li>
                                    <a href={movie.homepage}>
                                        {movie.homepage}
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MovieDetailsPage;

const cssMovieDetailsPage = css({
    ".container": {
        paddingTop: "7rem",
        paddingBottom: "5rem",
    },
});

const cssContent = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
});

const cssAbout = css({
    "& h2": {
        color: red,
        fontWeight: "700",
        fontSize: "3rem",
        textAlign: "center",
        margin: "3rem 0",

        "& span": {
            display: "block",
            color: "white",
            fontSize: "1.6rem",
        },
    },

    ".homepage": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: red,
        textAlign: "left",

        "& > :first-child": {
            fontWeight: "700",
        },

        "& li": {
            width: "100%",
            textAlign: "left",
        },

        "& a": {
            color: "white",
            paddingBottom: ".5rem",
            borderBottom: `1px solid ${red}`,
            textDecoration: "none",
            fontSize: "1.4rem",
            textAlign: "center",
            transition: "color .4s ease-in-out",

            "&:hover": {
                color: red,
            },
        },
    },
});
