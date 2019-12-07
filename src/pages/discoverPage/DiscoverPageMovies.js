import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
    getDiscoverMovies,
    getDiscoverMoviesOnScroll,
} from "../../redux/discover/discoverActions";
import { selectDiscoverMovies } from "../../redux/discover/discoverSelectors";
//hooks
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
//import useDebounce from "../../hooks/useDebounce";
//components
import DiscoverFilters from "../../components/discoverFilters/DiscoverFilters";
import SearchResults from "../../components/searchResults/SearchResults";
import Loader from "../../components/loader/Loader";

const sortByFilters = [
    {
        value: "&sort_by=popularity.desc",
        label: "Popularity Descending",
    },
    {
        value: "&sort_by=popularity.asc",
        label: "Popularity Ascending",
    },
    {
        value: "&sort_by=original_title.desc",
        label: "Title Descending",
    },
    {
        value: "&sort_by=original_title.asc",
        label: "Title Ascending",
    },
];

const genreFilters = [
    {
        value: "&with_genres=28",
        label: "Action",
    },
    {
        value: "&with_genres=12",
        label: "Adventure",
    },
    {
        value: "&with_genres=16",
        label: "Animation",
    },
    {
        value: "&with_genres=35",
        label: "Comedy",
    },
    {
        value: "&with_genres=80",
        label: "Crime",
    },
    {
        value: "&with_genres=99",
        label: "Documentary",
    },
    {
        value: "&with_genres=18",
        label: "Drama",
    },
    {
        value: "&with_genres=10751",
        label: "Family",
    },
    {
        value: "&with_genres=14",
        label: "Fantasy",
    },
    {
        value: "&with_genres=36",
        label: "History",
    },
    {
        value: "&with_genres=27",
        label: "Horror",
    },
    {
        value: "&with_genres=10402",
        label: "Music",
    },
    {
        value: "&with_genres=9648",
        label: "Mistery",
    },
    {
        value: "&with_genres=10749",
        label: "Romance",
    },
    {
        value: "&with_genres=878",
        label: "Science Fiction",
    },
    {
        value: "&with_genres=10770",
        label: "TV Movie",
    },
    {
        value: "&with_genres=53",
        label: "Thriller",
    },
    {
        value: "&with_genres=10752",
        label: "War",
    },
    {
        value: "&with_genres=37",
        label: "Western",
    },
];

const DiscoverPageMovies = props => {
    const [sortBy, setSortBy] = useState(sortByFilters[0]);
    const [genres, setGenres] = useState("");
    const [isFetching, setIsFetching] = useInfiniteScroll();
    const dispatch = useDispatch();
    const discoverMovies = useSelector(selectDiscoverMovies);

    useEffect(() => {
        dispatch(getDiscoverMovies([sortBy.value, genres.value].join("")));
    }, [sortBy.value, genres.value]);

    useEffect(() => {
        handleInfiniteScroll();
    }, [isFetching]);

    const handleInfiniteScroll = () => {
        if (discoverMovies.currentPage === discoverMovies.totalPages) {
            setIsFetching(false);
        }

        if (
            isFetching &&
            discoverMovies.currentPage !== discoverMovies.totalPages
        ) {
            dispatch(
                getDiscoverMoviesOnScroll(
                    discoverMovies.pageToFetch,
                    [sortBy.value, genres.value].join(""),
                ),
            ).then(() => setIsFetching(false));
        }
    };

    const handleSortBy = selected => {
        setSortBy(selected);
    };

    const handleGenres = selected => {
        setGenres(selected);
    };

    return (
        <>
            <DiscoverFilters
                handleSortBy={handleSortBy}
                handleGenres={handleGenres}
                sortByFilters={sortByFilters}
                genreFilters={genreFilters}
                sortByValue={sortBy}
                genreValue={genres}
            />
            <SearchResults data={discoverMovies.results} />
            {isFetching && <Loader />}
        </>
    );
};

export default DiscoverPageMovies;
