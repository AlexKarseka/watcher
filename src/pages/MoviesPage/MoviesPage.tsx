import React from "react";
import {ITopMovies} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetAllGenres from "../../hooks/useGetAllGenres";

const MoviesPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [pagination, setPagination] = React.useState<number>(1);
    const [pageDrive, setPageDrive] = React.useState<Array<ITopMovies>>([]);
    const genresList = useGetAllGenres('topAllMovies', 'movie', pagination);

    const addNewPage = () => {
        setPageDrive([...pageDrive, ...genresList]);
        setPagination(pagination + 1)
    };

    if (pageDrive.length <= 0) setTimeout(addNewPage, 1000);

    return (
        <PageBase footerBg>
            <HeaderPage nameCategory='movies'/>

            <MenuSettings
                styleCard={(card) => setListStyle(card)}
                paginationCount={(count) => setPagination(count)}
                cleaningData={(data) => setPageDrive(data)}
                typeGenres='movie'
                typeLink='movies'
            />

            <div>
                {listStyle ?
                    <FirstCardVersion content={pageDrive} typeGenres='movie'/>
                    :
                    <SecondCardVersion content={pageDrive} year/>
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
