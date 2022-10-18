import React from 'react';
import {IForTestList} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useCreateAllMoviesArray from "../../hooks/useCreateAllMoviesArray";

const FilmsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);

    const getMovies = useCreateAllMoviesArray('top_rated');

    if (!getMovies) return null

    console.log(getMovies)

    return (
        <PageBase>
            <HeaderPage nameCategory="movies" />
            <MenuSettings styleCard={(card) => {setListStyle(card)}} />
            <div className="pb-32">
                {listStyle ?
                    <FirstCardVersion content={getMovies} />
                    :
                    <SecondCardVersion content={getMovies} year />
                }
            </div>
        </PageBase>
    );
};

export default FilmsPage;
