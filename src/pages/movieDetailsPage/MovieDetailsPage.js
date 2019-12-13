import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
import { useHistory } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getMovie, clearMovie } from "../../redux/movies/moviesActions";
import { selectMovie } from "../../redux/movies/moviesSelectors";
//components
import SocialLinks from "../../components/socialLinks/SocialLinks";
import LanguageList from "../../components/languageList/LanguageList";
import FinancesList from "../../components/financesList/FinancesList";
import Description from "../../components/description/Description";
import Credits from "../../components/credits/Credits";
import GenreList from "../../components/genreList/GenreList";
const imgUrl = process.env.IMAGE_URL;

const MovieDetailsPage = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    console.log(movie);
    useEffect(() => {
        dispatch(getMovie(history.location.state.id));

        return () => dispatch(clearMovie());
    }, []);

    const cssPosterImage = css({
        marginTop: "4.8rem",
        backgroundImage: `url(${imgUrl}/${"w500" ||
            "w780"}${movie.poster_path || movie.backdrop_path})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "80vh",
        backfaceVisibility: "hidden",
        overflow: "hidden",
    });

    return (
        <main css={cssMovieDetailsPage}>
            <div css={cssPosterImage} />
            <div className='container'>
                <h2 css={cssTitle}>
                    {movie.title || movie.original_title}
                    {movie.tagline && <span>{movie.tagline}</span>}
                </h2>
                <ul>
                    <li>
                        <SocialLinks
                            data={movie.external_ids}
                            homepage={movie.homepage}
                        />
                    </li>
                    <li>
                        <LanguageList data={movie.spoken_languages} />
                    </li>

                    <li>
                        <FinancesList
                            budget={movie.budget}
                            revenue={movie.revenue}
                        />
                    </li>
                    <li>
                        <GenreList data={movie.genres} />
                    </li>
                    <li>
                        <Description data={movie.overview} />
                    </li>
                </ul>
                {movie.credits && <Credits data={movie.credits} />}
            </div>
        </main>
    );
};

export default MovieDetailsPage;

const cssMovieDetailsPage = css({
    ".container": {
        paddingTop: "1rem",
        paddingBottom: "5rem",
    },
});

const cssTitle = css({
    color: red,
    fontWeight: "700",
    fontSize: "3rem",
    textAlign: "center",
    margin: "3rem 0",
    lineHeight: "3rem",

    "& span": {
        marginTop: "2rem",
        display: "block",
        color: "white",
        fontSize: "1.6rem",
        lineHeight: "2rem",
    },
});
