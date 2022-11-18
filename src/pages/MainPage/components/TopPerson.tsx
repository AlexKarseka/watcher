import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import MainPageService from "../../../services/MainPageService";
import { ITopActors } from "../../../models";
import cn from "classnames";
import css from "./style.module.css";

import useScrollLine from "../../../hooks/useScrollLine";

import ArrowLeft from "../../../assets/left.svg";
import ArrowRight from "../../../assets/right.svg";
import NoImageAvailable from "../../../assets/noImageAvailable.webp";

const TopPerson = () => {
    const {data} = useQuery('bestActor', () => MainPageService.getBestActor());
    const {canScrollLeft, canScrollRight, containerRef, scrollContainerBy} = useScrollLine();

    if (!data) return null;

    const bestActor: Array<ITopActors> = data

    return bestActor.length > 0 ?
        <div className="relative">
            <div className="text-xl text-white px-6 opacity-80 font-extralight">
                Popular persons
            </div>

            <button
                type="button"
                disabled={!canScrollLeft}
                onClick={() => scrollContainerBy(-297)}
                className={cn("flex justify-center items-center absolute top-12 left-0 z-10 h-full -mt-10 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "hidden": !canScrollLeft
                })}
            >
                <img src={ArrowLeft} alt="ArrowLeft"/>
            </button>

            <button
                type="button"
                onClick={() => scrollContainerBy(297)}
                className={cn("flex justify-center items-center absolute top-12 right-0 z-10 h-full -mt-10 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "": !canScrollRight
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
                {bestActor.map((actor) => {
                    return (
                        <li
                            key={actor.id}
                            className="flex items-center justify-center shrink-0 cursor-pointer will-change-transform duration-300 transition hover:scale-105"
                        >
                            <Link to={`/list/person/${actor.id}`} className="mr-4">
                                <img
                                    className="w-[277px] h-[390px] rounded-2xl"
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : NoImageAvailable}
                                    alt="logo"
                                />
                                <div
                                    className="absolute bottom-2 left-3.5 text-white drop-shadow-[0_2px_2px_black]"
                                >
                                    {actor.name}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div> : null;
};

export default TopPerson;
