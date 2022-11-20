import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import css from "./style.module.css";

import useMainMovies from "../../../hooks/useMainMovies";
import useScrollLine from "../../../hooks/useScrollLine";

import ArrowLeft from "../../../assets/left.svg";
import ArrowRight from "../../../assets/right.svg";

const TopFilms = () => {
    const wrenchSet = useMainMovies();
    const {canScrollLeft, canScrollRight, containerRef, scrollContainerBy} = useScrollLine();

    if (!wrenchSet) return null;

    return (
        <div className="relative">
            <button
                type="button"
                disabled={!canScrollLeft}
                onClick={() => scrollContainerBy(-297)}
                className={cn("hidden sm:flex justify-center items-center absolute top-12 left-0 z-10 h-full -mt-10 w-24 transition sm:hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "sm:hidden": !canScrollLeft
                })}
            >
                <img src={ArrowLeft} alt="ArrowLeft"/>
            </button>

            <button
                type="button"
                disabled={!canScrollRight}
                onClick={() => scrollContainerBy(297)}
                className={cn("hidden sm:flex justify-center items-center absolute top-12 right-0 z-10 h-full -mt-10 w-24 transition sm:hover:scale-110 drop-shadow-[0_4px_3px_black]", {
                    "sm:hidden": !canScrollRight
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

            <nav className={`${css.scrollContainer} flex overflow-x-auto pl-4 sm:pl-14 py-3`} ref={containerRef}>
                {wrenchSet.map((movie) => {
                    return (
                        <li
                            key={movie.id}
                            className="flex items-center justify-center shrink-0 cursor-pointer will-change-transform duration-300 transition sm:hover:scale-105"
                        >
                            <Link to={`/list/movies/${movie.id}`} className="mr-4">
                                <img
                                    className="w-[277px] h-[390px] rounded-2xl"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt="logo"
                                />
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div>
    );
};

export default TopFilms;
