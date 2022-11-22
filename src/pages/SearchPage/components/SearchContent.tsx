import React from "react";
import { useQuery } from "react-query";
import SearchService from "../../../services/SearchService";

import SecondCardVersion from "../../../components/SecondCardVersion";
import UnsuccessfulSearch from "./UnsuccessfulSearch";

interface SearchContentProps {
    found: string
}

const SearchContent = ({found}: SearchContentProps) => {
    const {data: movies} = useQuery('searchMovies', () =>
            SearchService.getSearchMovies(found, 'movie'), {
            refetchInterval: 1000,
        }
    );
    const {data: serials} = useQuery('searchSerials', () =>
        SearchService.getSearchMovies(found, 'tv'), {
            refetchInterval: 1000,
        }
    );

    if (!movies || !serials) return null;

    const searchData = [...movies, ...serials];

    console.log(searchData)

    return (
        <div className="pb-11">
            <div className="text-xl text-white mb-4 px-4 sm:px-14">
                Search results:
            </div>
            {searchData.length <= 0 ? <UnsuccessfulSearch /> : <SecondCardVersion content={searchData} year={false} />}
        </div>
    );
};

export default SearchContent;
