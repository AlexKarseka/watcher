import React from "react";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useCreateSerials from "../../hooks/useCreateSerials";

const SerialsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<number>(0);

    const getSerials = useCreateSerials();

    if (!getSerials) return null;

    const genreChoice = getSerials
        .map(genre => genre.genre_ids[0] === genresName ? {...genre} : genre)
        .filter(genre => genre.genre_ids[0] === genresName)

    console.log(genreChoice)

    return (
        <PageBase>
            <HeaderPage nameCategory="serials" />

            <MenuSettings
                styleCard={(card) => {setListStyle(card)}}
                genreType={(type) => {setGenresName(type)}}
            />

            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion content={genresName === 0 ? getSerials : genreChoice} />
                    :
                    <SecondCardVersion content={genresName === 0 ? getSerials : genreChoice} year />
                }
            </div>
        </PageBase>
    );
};

export default SerialsPage;
