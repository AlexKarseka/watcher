import React from "react";
import {ITopMovies} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetAllGenres from "../../hooks/useGetAllGenres";
import useGetByGenre from "../../hooks/useGetByGenre";
import useClearDuplicates from "../../hooks/useClearDuplicates";

const SerialsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<number>(0);
    const [pagination, setPagination] = React.useState<number>(1);
    const [pageDrive, setPageDrive] = React.useState<Array<ITopMovies>>([]);

    const allGenres = useGetAllGenres('topRatedSerials', 'tv', pagination);

    const byGenres = useGetByGenre('topByGenSerials', 'tv', genresName, pagination);

    const addNewPage = () => {
        if (genresName === 0) {
            setPageDrive([...pageDrive, ...allGenres]);
        } else {
            setPageDrive([...pageDrive, ...byGenres]);
        }
    };

    if (pageDrive.length <= 0) setTimeout(addNewPage, 500);

    const allGenresDub = useClearDuplicates(pageDrive);
    const byGenresDub = useClearDuplicates(pageDrive);

    return (
        <PageBase>
            <HeaderPage nameCategory="serials" />

            <MenuSettings
                styleCard={(card) => {setListStyle(card)}}
                genreType={(type) => {setGenresName(type)}}
                paginationCount={(count) => {setPagination(count)}}
                cleaningData={(data) => setPageDrive(data)}
                typeGenres='tv'
            />

            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion content={genresName === 0 ? allGenresDub : byGenresDub} typeGenres='tv'/>
                    :
                    <SecondCardVersion content={genresName === 0 ? allGenresDub : byGenresDub} year />
                }
            </div>

            <div className="pt-14 pb-24">
                <button
                    className='flex items-center justify-center mx-auto w-72 bg-gray-700 rounded h-10 text-white hover:bg-gray-800'
                    type='button'
                    onClick={() => {
                        if (genresName === 0) {
                            setPageDrive([...pageDrive, ...allGenres]);
                        } else {
                            setPageDrive([...pageDrive, ...byGenres]);
                        }
                        setPagination(pagination + 1);
                    }}
                >
                    Load More
                </button>
            </div>
        </PageBase>
    );
};

export default SerialsPage;
