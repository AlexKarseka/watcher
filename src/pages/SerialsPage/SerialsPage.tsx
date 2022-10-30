import React from "react";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetAllGenres from "../../hooks/useGetAllGenres";
import useGetByGenre from "../../hooks/useGetByGenre";

const SerialsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<number>(0);
    const [pagination, setPagination] = React.useState<number>(1);

    const allGenres = useGetAllGenres('topRatedSerials', 'tv', pagination);

    const byGenres = useGetByGenre('topByGenSerials', 'tv', genresName);

    return (
        <PageBase>
            <HeaderPage nameCategory="serials" />

            <MenuSettings
                styleCard={(card) => {setListStyle(card)}}
                genreType={(type) => {setGenresName(type)}}
                typeGenres='tv'
            />

            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion
                        content={genresName === 0 ? allGenres.slice(0, 18) : byGenres.slice(0, 18)}
                        typeGenres='tv'
                    />
                    :
                    <SecondCardVersion content={genresName === 0 ? allGenres : byGenres} year />
                }
            </div>

            <button
                className='flex items-center w-40 bg-amber-50 mx-auto'
                type='button'
                onClick={() => setPagination(pagination + 1)}
            >
                Klick-klick
            </button>
        </PageBase>
    );
};

export default SerialsPage;
