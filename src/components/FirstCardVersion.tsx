import React from 'react';
import {Link} from 'react-router-dom';
import {IGenresList, ITopMovies} from "../models";

import Play from '../assets/Play.svg';
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";

interface FirstCardVersionProps {
    content: Array<ITopMovies>
}

const FirstCardVersion = ({content}: FirstCardVersionProps) => {
    const {data} = useQuery('genres', () => MovieService.getGenres());

    if (!data) return null

    const genres: Array<IGenresList> = data.genres

    const genresRow = (tree: number) => {
        return genres.map((elem) => {
            if (tree === elem.id) {
                return (
                    <div
                        className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                        key={elem.id}>
                        {elem.name}
                    </div>
                )
            }
        })
    }

    return (
        <div className="grid grid-cols-3 gap-6 px-14">
            {content.map((movie) => {
                return (
                    <div
                        key={movie.id}
                        className="overflow-hidden bg-[#1f2125] h-[360px] border border-[hsla(0,0%,100%,.08)] border-b-2 border-b-amber-400 rounded cursor-pointer duration-300 hover:scale-110"
                    >
                        <img
                            className="w-full h-3/5 rounded-t drop-shadow-[0_9px_3px_black]"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt="image"
                        />
                        <div className="relative pt-3.5 px-2.5">
                            <div className="absolute bottom-32 text-white uppercase">{movie.title}</div>
                            <div className="flex text-xs">
                                <div
                                    className={`${movie.vote_average <= 7 ? "text-red-600" : "text-green-500"} border border-[hsla(0,0%,100%,.24)] rounded-sm px-1`}
                                >
                                    {movie.vote_average}
                                </div>
                                <div
                                    className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                                >
                                    {movie.adult ? '12+' : '18+'}
                                </div>
                                {movie.genre_ids.map(elem => genresRow(elem))}
                            </div>
                            <div className="mt-3.5 text-xs text-white text-ellipsis h-12 w-full overflow-hidden">
                                {movie.overview}
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    className="w-2/4 flex items-center justify-center bg-amber-400 rounded mt-2 h-8 hover:bg-amber-500"
                                    to="/list"
                                >
                                    <img className="h-3.5" src={Play} alt="Play"/>
                                    <div className="ml-2 text-xs">Watch</div>
                                </Link>
                                <button
                                    className="w-2/4 flex items-center justify-center bg-gray-700 rounded mt-2 h-8 hover:bg-gray-800"
                                    type="button"
                                >
                                    <div className="ml-2 text-xs text-white">Add to favourites</div>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default FirstCardVersion;
