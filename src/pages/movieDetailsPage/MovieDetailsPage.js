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
import CustomSwiper from "../../components/customSwiper/CustomSwiper";
const imgUrl = process.env.IMAGE_URL;

const breakpoints = [478, 768, 1024, 1200];
const mq = breakpoints.map(
    bp => ` @media only screen and (min-width: ${bp}px)`,
);

const MovieDetailsPage = props => {
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);

    console.log(movie);

    useEffect(() => {
        dispatch(getMovie(params.id));

        return () => dispatch(clearMovie());
    }, []);

    const cssMovieDetails = css({
        marginTop: "4.8rem",
        padding: "0",
        backgroundImage: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        backfaceVisibility: "hidden",
        overflow: "hidden",

        [mq[3]]: {
            padding: "1rem",
            backgroundImage: `url(${imgUrl}/${"w780"}${movie.backdrop_path})`,
        },
    });

    const cssCollection = css({
        backgroundImage: `url(${imgUrl}/${"w780"}${
            movie?.collection?.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",

        ".overlay": {
            backgroundColor: "rgba(0,0,0, 0.35)",
        },
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
                            <li className='layout-item'>
                                <div className='container'>
                                    <h2 css={cssTitle}>
                                        {movie.title || movie.original_title}
                                        {movie.tagline && (
                                            <span>{movie.tagline}</span>
                                        )}
                                    </h2>
                                </div>
                            </li>
                            <li className='layout-item'>
                                <SocialLinks
                                    data={movie.external_ids}
                                    homepage={movie.homepage}
                                />
                            </li>
                            <li className='layout-item'>
                                <LanguageList data={movie.spoken_languages} />
                            </li>

                            <li className='layout-item'>
                                <FinancesList
                                    budget={movie.budget}
                                    revenue={movie.revenue}
                                />
                            </li>
                            <li className='layout-item'>
                                <GenreList data={movie.genres} />
                            </li>
                            <li className='layout-item'>
                                <Description data={movie.overview} />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <ul css={cssSecondaryLayout}>
                <li>{movie.credits && <Credits data={movie.credits} />}</li>
                <li>
                    <TrailerList
                        bgImage={`${imgUrl}/${"w780"}${movie.backdrop_path}`}
                        data={movie?.videos?.results}
                    />
                </li>
                <li>
                    {movie.collection && (
                        <section css={cssCollection}>
                            <div className='overlay'>
                                <div className='container'>
                                    <div css={cssCollectionContent}>
                                        <h4>{movie.collection.name}</h4>
                                        <p>{movie.collection.overview}</p>
                                    </div>
                                    <CustomSwiper
                                        data={movie.collection.parts}
                                    />
                                </div>
                            </div>
                        </section>
                    )}
                </li>
            </ul>
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
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",

    [mq[3]]: {
        backgroundColor: "rgba(0, 0, 0, .25)",
        backdropFilter: "blur(15px)",
        padding: "5rem 0",
    },
});

const cssMainContent = css({
    width: "100%",
    maxWidth: "1366px",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [mq[3]]: {
        flexDirection: "row",
    },

    "& img": {
        width: "100%",

        [mq[3]]: {
            width: "initial",
        },
    },
});
const cssContentLayout = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "0",
    justifyContent: "center",

    ".layout-item:not(:last-child)": {
        marginBottom: "1rem",
    },

    [mq[3]]: {
        marginLeft: "2rem",
    },
});

const cssSecondaryLayout = css({
    width: "100%",

    "& li": {
        marginTop: "6rem",
    },

    [mq[3]]: {
        width: "fit-content",
    },
});

const cssTitle = css({
    color: red,
    fontWeight: "700",
    fontSize: "3rem",
    textAlign: "left",
    marginBottom: "3rem",
    lineHeight: "3rem",

    "& span": {
        marginTop: "2rem",
        display: "block",
        color: "white",
        fontSize: "1.6rem",
        lineHeight: "2rem",
    },
});

const cssCollectionContent = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "4rem",

    "& h4": {
        fontWeight: "700",
        fontSize: "2.5rem",
        color: red,
    },

    "& p": {
        fontWeight: "700",
        color: "white",
        textAlign: "center",
    },
});
