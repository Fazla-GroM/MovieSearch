import React from "react";
//components
import DiscoverFilters from "../../components/discoverFilters/DiscoverFilters";
import SearchResults from "../../components/searchResults/SearchResults";

const DiscoverPageMovies = props => {
    return (
        <>
            <DiscoverFilters />
            <SearchResults />
        </>
    );
};

export default DiscoverPageMovies;
