import React from "react";
import { ISeasons } from "../../../models";

import noLogo from "../assets/noImageAvailable.webp";

interface SeasonsListProps {
    seasons: Array<ISeasons>,
}

const SeasonsList = ({seasons}: SeasonsListProps) => {

    return (
        <div className="pb-16">
            <div className="px-14 mb-2.5 text-white text-xl">Seasons</div>
            <div className="grid grid-cols-5 gap-y-6 gap-x-4 px-14">
                {seasons.map((series) => {
                    return series.name === 'Specials' ?
                        null
                        :
                        <div key={series.id} className="relative h-[325px] rounded-2xl">
                            <img
                                className="w-full h-[325px] rounded-2xl"
                                src={!series.poster_path ? noLogo : `https://image.tmdb.org/t/p/w500${series.poster_path}`}
                                alt="logo"
                            />

                            <div
                                className="absolute bottom-2 left-3.5 text-white drop-shadow-[0_2px_2px_black]">
                                {series.episode_count} eps
                            </div>
                        </div>
                })}
            </div>
        </div>
    );
};

export default SeasonsList;
