import React from "react";

import PageBase from "../PageBase/PageBase";
import Header from "./components/Header";
import DefaultContent from "./components/DefaultContent";
import SearchContent from "./components/SearchContent";
import useGetAllGenres from "../../hooks/useGetAllGenres";

const SearchPage = () => {
    const [searchValue, setSearchValue] = React.useState<string>('');

    const defaultListMovies = useGetAllGenres('searchMovie', 'movie', 1);
    const defaultListSerials = useGetAllGenres('searchSerial', 'tv', 1);

    if (!defaultListMovies || !defaultListSerials) return null;

    const defaultList = [...defaultListMovies, ...defaultListSerials];

    return(
        <PageBase footerBg>
            <div className="pt-6">

                <Header />

                <div className="border-b-2 border-[#d8d8d8] mb-8 mx-14">
                    <input
                        className="w-full bg-[transparent] text-2xl text-[#d8d8d8] pb-2 outline-none"
                        type="text"
                        placeholder="Serial or movie name..."
                        value={searchValue}
                        onChange={(event) => {setSearchValue(event.target.value)}}
                    />
                </div>

                {searchValue === '' ?
                    <DefaultContent popular={defaultList} />
                    :
                    <SearchContent found={searchValue} />
                }
            </div>
        </PageBase>
    );
};

export default SearchPage;
