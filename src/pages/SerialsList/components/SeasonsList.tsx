import React from "react";
import { ISeasons } from "../../../models";
import cn from "classnames";
import css from "../../MainPage/components/style.module.css";

import useScrollLine from "../../../hooks/useScrollLine";

import ArrowLeft from "../../../assets/left.svg";
import ArrowRight from "../../../assets/right.svg";
import NoImageAvailable from "../../../assets/noImageAvailable.webp";


interface SeasonsListProps {
    seasons: Array<ISeasons>,
}

const SeasonsList = ({seasons}: SeasonsListProps) => {
    const {canScrollLeft, canScrollRight, containerRef, scrollContainerBy} = useScrollLine();

    return seasons.length > 0 ?
        <div className="relative pb-16">
            <div className="px-14 mb-2.5 text-white text-xl">Seasons</div>

            <button
                type="button"
                disabled={!canScrollLeft}
                onClick={() => scrollContainerBy(-297)}
                className={cn("flex justify-center items-center absolute top-12 left-0 z-10 h-full -mt-16 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "hidden": !canScrollLeft
                })}
            >
                <img src={ArrowLeft} alt="ArrowLeft"/>
            </button>

            <button
                type="button"
                disabled={!canScrollRight}
                onClick={() => scrollContainerBy(297)}
                className={cn("flex justify-center items-center absolute top-12 right-0 z-10 h-full -mt-16 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "hidden": !canScrollRight
                })}
            >
                <img src={ArrowRight} alt="ArrowRight"/>
            </button>

            {canScrollLeft ?
                <div className="absolute top-0 left-0 w-8 h-full overflow-hidden z-0">
                    <div className="absolute z-50 top-1/2 left-[-25px] w-6 h-4/5 rounded-3xl duration-300 transition"/>
                </div> : null
            }

            {canScrollRight ?
                <div className="absolute top-0 right-0 w-8 h-full overflow-hidden z-0">
                    <div className="absolute z-50 top-1/2 right-[-25px] w-6 h-4/5 rounded-3xl duration-300 transition"/>
                </div> : null
            }

            <nav className={`${css.scrollContainer} flex overflow-x-auto pl-14 py-3`} ref={containerRef}>
                {seasons.map((series) => {
                    return series.name === 'Specials' ? null :
                        <li
                            key={series.id}
                            className="relative flex items-center justify-center shrink-0 mr-4"
                        >
                            <img
                                className="w-[283px] h-[390px] rounded-2xl"
                                src={!series.poster_path ? NoImageAvailable : `https://image.tmdb.org/t/p/w500${series.poster_path}`}
                                alt="logo"
                            />

                            <div
                                className="absolute bottom-2 left-3.5 text-white drop-shadow-[0_2px_2px_black]">
                                {series.episode_count} eps
                            </div>
                        </li>
                })}
            </nav>
        </div> : null;
};

export default SeasonsList;
