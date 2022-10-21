import React from "react";
import {Link} from "react-router-dom";
import {ITopMovies} from "../../../models";

import useGetListGenres from "../../../hooks/useGetListGenres";

import ArrowLeft from "../assets/left.svg";
import ArrowRight from "../assets/right.svg";

interface FilmsRowProps {
    nameCategory: string,
    getMovies: Array<ITopMovies>,
    id: number,
}

const FilmsRow = ({nameCategory, getMovies, id}: FilmsRowProps) => {
    const [scroller, setScroller] = React.useState<number>(0);

    const getMoviesGen = useGetListGenres(id, getMovies)

    return (
        <div className="relative mb-8">
            <div className="text-xl text-white px-20 opacity-80 font-extralight">
                {nameCategory}
            </div>

            {scroller === 0 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 left-0 z-10 h-[201px] mt-10 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
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
                    className="flex justify-center items-center absolute top-0 right-0 z-10 h-[201px] mt-10 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller - 295)
                    }}
                >
                    <img src={ArrowRight} alt="ArrowRight"/>
                </button>
            }

            <div className={`px-14 w-[2480px] ml-[${scroller}px]`}>
                <nav className="flex flex-nowrap p-2.5">
                    {getMoviesGen.slice(0, 8).map((movie) => {
                        return (
                            <Link
                                className="mr-4 w-80"
                                key={movie.id}
                                to={`/list/${movie.id}`}
                            >
                                <img
                                    className="w-80 h-[201px] rounded-2xl cursor-pointer will-change-transform duration-300 transition hover:scale-105 hover:opacity-80 hover:drop-shadow-[0_4px_3px_black]"
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt="image"
                                />
                                <div className="mt-3.5 text-base text-white opacity-80">{movie.title}</div>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    );
};

export default FilmsRow;
