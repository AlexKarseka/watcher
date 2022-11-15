import React from "react";
import { ITopMovies } from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetAllGenres from "../../hooks/useGetAllGenres";
import useGetByGenre from "../../hooks/useGetByGenre";
import useClearDuplicates from "../../hooks/useClearDuplicates";

const MoviesPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<number>(0);
    const [pagination, setPagination] = React.useState<number>(1);
    const [pageDrive, setPageDrive] = React.useState<Array<ITopMovies>>([]);

    const allGenres = useGetAllGenres('topAllMovies', 'movie', pagination);

    const byGenres = useGetByGenre('topByGenMovies', 'movie', genresName, pagination);

    const addNewPage = () => {
        if (genresName === 0) {
            setPageDrive([...pageDrive, ...allGenres]);
            setPagination(pagination + 1)
        } else {
            setPageDrive([...pageDrive, ...byGenres]);
            setPagination(pagination + 1)
        }
    };

    if (pageDrive.length <= 0) setTimeout(addNewPage, 500);

    const allGenresDub = useClearDuplicates(pageDrive);
    const byGenresDub = useClearDuplicates(pageDrive);

    return (
        <PageBase footerBg>
            <HeaderPage nameCategory='movies'/>

            <MenuSettings
                styleCard={(card) => setListStyle(card)}
                genreType={(type) => setGenresName(type)}
                paginationCount={(count) => setPagination(count)}
                cleaningData={(data) => setPageDrive(data)}
                typeGenres='movie'
            />

            <div>
                {listStyle ?
                    <FirstCardVersion content={genresName === 0 ? allGenresDub : byGenresDub} typeGenres='movie'/>
                    :
                    <SecondCardVersion content={genresName === 0 ? allGenresDub : byGenresDub} year/>
                }
            </div>

            <div className="pt-14 pb-11">
                <button
                    className='flex items-center justify-center mx-auto w-72 bg-gray-700 rounded h-10 text-white hover:bg-gray-800'
                    type='button'
                    onClick={addNewPage}
                >
                    Load More
                </button>
            </div>

        </PageBase>
    );
};

export default MoviesPage;
