import React from "react";
import {ITopMovies} from "../models";
import {Link} from "react-router-dom";

interface SecondCardVersionProps {
    content: Array<ITopMovies>,
    year: boolean,
}

const SecondCardVersion = ({content, year}: SecondCardVersionProps) => {

    return (
        <div className="grid grid-cols-4 gap-y-6 gap-x-4 px-14">
            {content.map((movie) => {
                return movie.backdrop_path ?
                    <Link to={`/list/${movie.name ? 'serials' : 'movies'}/${movie.id}`} key={movie.id}>
                        <div
                            className="relative h-52 rounded cursor-pointer duration-300 hover:opacity-70 hover:scale-105 hover:drop-shadow-[0_4px_3px_black]">
                            <img
                                className="w-full h-52 rounded"
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt="logo"
                            />
                            <div className="absolute top-1.5 left-1.5 text-xs rounded-sm bg-[#8c8e95] opacity-80 px-1 text-white">
                                {movie.adult ? '12+' : '18+'}
                            </div>
                        </div>

                        <div className="text-sm text-white opacity-80 mt-3.5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                            {movie.title ? movie.title : movie.name}
                        </div>
                        {year ?
                            <div className="text-sm text-[#565c67]">
                                {movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)}
                            </div>
                            :
                            ""
                        }
                    </Link>
                    :
                    null
            })}
        </div>
    );
};

export default SecondCardVersion;