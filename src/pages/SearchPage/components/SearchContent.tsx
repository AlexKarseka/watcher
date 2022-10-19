import React from "react";

import SecondCardVersion from "../../../components/SecondCardVersion";
import {useQuery} from "react-query";
import SearchService from "../../../services/SearchService";

interface SearchContentProps {
    found: string
}

const SearchContent = ({found}: SearchContentProps) => {
    const {data: movies} = useQuery('searchMovies', () =>
            SearchService.getSearchMovies(found, 'movie'), {
            refetchInterval: 1500,
        }
    );
    const {data: serials} = useQuery('searchSerials', () =>
        SearchService.getSearchMovies(found, 'tv'), {
            refetchInterval: 1500,
        }
    );

    if (!movies || !serials) return null;

    const searchData = [...movies.results, ...serials.results];

    return (
        <div className="pb-32">
            <div className="text-xl text-white mb-4 px-14">
                Search results:
            </div>
            <SecondCardVersion content={searchData} year={false}/>
        </div>
    );
};

export default SearchContent;
