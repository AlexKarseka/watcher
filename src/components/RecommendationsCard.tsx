import React from "react";
import {Link} from "react-router-dom";
import {ITopMovies} from "../models";
import cn from "classnames";
import css from "../pages/MainPage/components/style.module.css";

import useScrollLine from "../hooks/useScrollLine";

import ArrowLeft from "../assets/left.svg";
import ArrowRight from "../assets/right.svg";
import NoImageAvailable from "../assets/noImageAvailable.webp";

interface RecommendationsCardProps {
    content: Array<ITopMovies>,
}

const RecommendationsCard = ({content}: RecommendationsCardProps) => {
    const {canScrollLeft, canScrollRight, containerRef, scrollContainerBy} = useScrollLine();

    return content.length > 0 ?
        <div className="relative">
            <div className="px-14 mb-2.5 text-white text-xl">
                You may be interested
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
                disabled={!canScrollRight}
                onClick={() => scrollContainerBy(297)}
                className={cn("flex justify-center items-center absolute top-12 right-0 z-10 h-full -mt-10 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]", {
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
                {content.map((movie) => {
                    return (
                        <li
                            key={movie.id}
                            className="flex items-center justify-center shrink-0"
                        >
                            <Link
                                to={`/list/${movie.name ? 'serials' : 'movies'}/${movie.id}`}
                                className="mr-4"
                            >
                                <div
                                    className="relative h-52 rounded cursor-pointer duration-300 hover:opacity-70 hover:scale-105 hover:drop-shadow-[0_4px_3px_black]">
                                    <img
                                        className="w-[283px] h-52 rounded"
                                        src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : NoImageAvailable}
                                        alt="logo"
                                    />
                                    <div
                                        className="absolute top-1.5 left-1.5 text-xs rounded-sm bg-[#8c8e95] opacity-80 px-1 text-white">
                                        {movie.adult ? '12+' : '18+'}
                                    </div>
                                </div>

                                <div
                                    className="max-w-[250px] overflow-hidden whitespace-nowrap overflow-ellipsis text-sm text-white opacity-80 mt-3.5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    {movie.title ? movie.title : movie.name}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div> : null;
};

export default RecommendationsCard;
