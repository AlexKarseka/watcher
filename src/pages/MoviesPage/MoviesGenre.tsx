import React from "react";
import {ITopMovies} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetByGenre from "../../hooks/useGetByGenre";

interface MoviesGenreProps {
    genre: string,
    genreId: number,
}

const MoviesGenre = ({genre, genreId}: MoviesGenreProps) => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [pagination, setPagination] = React.useState<number>(1);
    const [pageDrive, setPageDrive] = React.useState<Array<ITopMovies>>([]);
    const genresList = useGetByGenre('topByGenMovies', 'movie', genreId, pagination);

    const addNewPage = () => {
        setPageDrive([...pageDrive, ...genresList]);
        setPagination(pagination + 1)
    };

    if (pageDrive.length <= 0) setTimeout(addNewPage, 1000);

    return (
        <PageBase footerBg>
            <HeaderPage nameCategory={`${genre} movies`}/>

            <MenuSettings
                styleCard={(card) => setListStyle(card)}
                paginationCount={(count) => setPagination(count)}
                cleaningData={(data) => setPageDrive(data)}
                typeGenres='movie'
                typeLink='movies'
                buttonName={genre}
            />

            <div>
                {listStyle ?
                    <FirstCardVersion content={pageDrive} typeGenres='movie'/>
                    :
                    <SecondCardVersion content={pageDrive} year/>
                }
            </div>

            <div className="px-4 sm:px-0 pt-14 pb-11">
                <button
                    className='flex items-center justify-center mx-auto w-full sm:w-72 bg-gray-700 rounded h-10 text-white hover:bg-gray-800'
                    type='button'
                    onClick={addNewPage}
                >
                    Load More
                </button>
            </div>
        </PageBase>
    );
};

export default MoviesGenre;
