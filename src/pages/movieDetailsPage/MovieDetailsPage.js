import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { red } from "../../themeVar";
import { useHistory, useParams } from "react-router-dom";
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
import TrailerList from "../../components/trailerList/TrailerList";
const imgUrl = process.env.IMAGE_URL;

const MovieDetailsPage = props => {
    //const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);

    console.log(movie);
    //console.log(history);
    //console.log("params", params);

    useEffect(() => {
        //        dispatch(getMovie(history.location.state.id));
        dispatch(getMovie(params.id));

        return () => dispatch(clearMovie());
    }, []);

    const cssMovieDetails = css({
        marginTop: "4.8rem",
        padding: "1rem",
        backgroundImage: `url(${imgUrl}/${"w780"}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        //height: "70vh",
        backfaceVisibility: "hidden",
        overflow: "hidden",
    });

    return (
        <main css={cssMovieDetailsPage}>
            <section css={cssMovieDetails}>
                <div css={cssFrozenOverlay}>
                    <div css={cssMainContent}>
                        <img
                            src={`${imgUrl}/${"w300"}${movie?.poster_path}`}
                            alt={movie.title}
                        />
                        <ul css={cssContentLayout}>
                            <li>
                                <div className='container'>
                                    <h2 css={cssTitle}>
                                        {movie.title || movie.original_title}
                                        {movie.tagline && (
                                            <span>{movie.tagline}</span>
                                        )}
                                    </h2>
                                </div>
                            </li>
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
                    </div>
                </div>
            </section>
            <div className='container'>
                <ul>
                    <li>{movie.credits && <Credits data={movie.credits} />}</li>
                    <li>
                        {movie?.videos?.results && (
                            <TrailerList
                                bgImage={`${imgUrl}/${"w780"}${
                                    movie.backdrop_path
                                }`}
                                data={movie.videos.results}
                            />
                        )}
                    </li>
                    <li>
                        {/* {movie.belongs_to_collection && (
                        <section css={cssCollection}>
                            <div css={cssOverlay}></div>
                        </section>
                    )} */}
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default MovieDetailsPage;

const cssMovieDetailsPage = css({
    paddingTop: "1rem",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

const cssFrozenOverlay = css({
    backgroundColor: "rgba(0, 0, 0, .25)",
    backdropFilter: "blur(15px)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem 0",
});

const cssMainContent = css({
    width: "100%",
    maxWidth: "1366px",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
const cssContentLayout = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "2rem",
    justifyContent: "center",
});

const cssTitle = css({
    color: red,
    fontWeight: "700",
    fontSize: "3rem",
    textAlign: "left",
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
