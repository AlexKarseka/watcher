import React from 'react';

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useCreateMovies from "../../hooks/useCreateMovies";

const MoviesPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);

    const getMovies = useCreateMovies();

    if (!getMovies) return null

    return (
        <PageBase>
            <HeaderPage nameCategory="movies" />
            <MenuSettings styleCard={(card) => {setListStyle(card)}} />
            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion content={getMovies} />
                    :
                    <SecondCardVersion content={getMovies} year />
                }
            </div>
        </PageBase>
    );
};

export default MoviesPage;
