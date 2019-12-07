import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/movies/moviesActions";
import { selectMovie } from "../../redux/movies/moviesSelectors";

const imgUrl = process.env.IMAGE_URL;

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
        width: "100%",
        height: "100%",
    });

    return (
        <main css={cssMovieDetailsPage}>
            <div className='container'>
                <h2>{movie.original_title}</h2>
                <section css={cssContent}>
                    <div css={cssPosterImage} />
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

    "& h2": {
        color: red,
        fontWeight: "700",
        fontSize: "3rem",
        textAlign: "center",
        marginBottom: "3rem",
    },
});

const cssContent = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
});
