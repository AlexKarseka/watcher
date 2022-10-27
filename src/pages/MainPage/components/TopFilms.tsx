import React from "react";
import {Link} from "react-router-dom";

import ArrowLeft from "../assets/left.svg";
import ArrowRight from "../assets/right.svg";
import useMainMovies from "../../../hooks/useMainMovies";

const TopFilms = () => {
    const [scroller, setScroller] = React.useState<number>(0);

    const wrenchSet = useMainMovies();

    if (!wrenchSet) return null;

    return (
        <div className="relative">
            {scroller === 0 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 left-0 z-10 h-[365px] mt-3 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller + 295)
                    }}
                >
                    <img src={ArrowLeft} alt="ArrowLeft"/>
                </button>
            }

            {scroller === -1180 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 right-0 z-10 h-[365px] mt-3 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller - 295)
                    }}
                >
                    <img className="" src={ArrowRight} alt="ArrowRight"/>
                </button>
            }

            <div className={`px-14 w-[2480px] ml-[${scroller}px]`}>
                <nav className="flex flex-nowrap p-2.5">
                    {wrenchSet.slice(0, 8).map((movie) => {
                        return (
                            <Link
                                className="mr-4"
                                key={movie.id}
                                to={`/list/movies/${movie.id}`}
                            >
                                <img
                                    className="w-80 h-[365px] rounded-2xl cursor-pointer will-change-transform duration-300 transition hover:scale-105"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt="logo"
                                />
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    );
};

export default TopFilms;
