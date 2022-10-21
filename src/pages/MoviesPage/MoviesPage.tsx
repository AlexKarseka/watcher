import React from "react";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useCreateMovies from "../../hooks/useCreateMovies";

const MoviesPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<number>(0);

    const getMovies = useCreateMovies();

    if (!getMovies) return null

    const genreChoice = getMovies
        .map(genre => genre.genre_ids[0] === genresName ? {...genre} : genre)
        .filter(genre => genre.genre_ids[0] === genresName)

    return (
        <PageBase>
            <HeaderPage nameCategory='movies' />

            <MenuSettings
                styleCard={(card) => {setListStyle(card)}}
                genreType={(type) => {setGenresName(type)}}
            />

            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion content={genresName === 0 ? getMovies : genreChoice} />
                    :
                    <SecondCardVersion content={genresName === 0 ? getMovies : genreChoice} year />
                }
            </div>
        </PageBase>
    );
};

export default MoviesPage;
