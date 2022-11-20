import React from 'react';
import { Link } from 'react-router-dom';
import { IGenresList, ITopMovies } from "../models";
import { useQuery } from "react-query";
import MovieService from "../services/MovieService";

import AddFavouriteButton from "./AddFavouriteButton";
import GoFavouriteButton from "./GoFavouriteButton";
import useFavouriteData from "../hooks/useFavouriteData";

import Play from '../assets/Play.svg';

interface FirstCardVersionProps {
    content: Array<ITopMovies>,
    typeGenres: string,
}

const FirstCardVersion = ({content, typeGenres}: FirstCardVersionProps) => {
    const {data} = useQuery(`genres${typeGenres}`, () => MovieService.getGenres(typeGenres));
    const {isAuth, userFilter} = useFavouriteData();

    if (!data) return null;

    const genres: Array<IGenresList> = data;

    const elementsPerPage = typeGenres === 'movie' ? 3 : 2;

    const genresRow = (tree: number) => {
        return genres.map((elem) => {
            if (tree === elem.id) {
                return (
                    <div
                        className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                        key={elem.id}>
                        {elem.name}
                    </div>
                );
            }
        });
    };

    return content.length > 0 ?
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-14">
            {content.map((movie) => {
                return movie.backdrop_path ?
                    <div
                        key={movie.id}
                        className="overflow-hidden bg-[#1f2125] h-[360px] border border-[hsla(0,0%,100%,.08)] border-b-2 border-b-amber-400 rounded cursor-pointer duration-300 sm:hover:scale-110"
                    >
                        <img
                            className="w-full h-3/5 rounded-t drop-shadow-[0_9px_3px_black]"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt="logo"
                        />

                        <div className="relative pt-3.5 px-2.5">
                            <div
                                className="absolute bottom-32 text-white uppercase drop-shadow-[0_1px_2px_white]"
                            >
                                {movie.title ? movie.title : movie.name}
                            </div>
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
                                <div
                                    className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                                >
                                    {movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)}
                                </div>
                                {movie.genre_ids.slice(0, elementsPerPage).map(elem => genresRow(elem))}
                            </div>
                            <div className="mt-3.5 text-xs text-white text-ellipsis h-12 w-full overflow-hidden">
                                {movie.overview}
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    className={`${isAuth ? 'w-2/4' : 'w-full'} flex items-center justify-center bg-amber-400 rounded mt-2 h-8 hover:bg-amber-500`}
                                    to={`/list/${movie.name ? 'serials' : 'movies'}/${movie.id}`}
                                >
                                    <img className="h-3.5" src={Play} alt="Play"/>
                                    <div className="ml-2 text-xs">Watch</div>
                                </Link>

                                {isAuth ?
                                    userFilter.map(id => id.id === movie.id ? {...id, id: id.id} : id)
                                        .filter(id => id.id === movie.id).length <= 0 ?
                                        <AddFavouriteButton
                                            id_movie={movie.id}
                                            backdrop_path={movie.backdrop_path}
                                            name={movie.title ? movie.title : movie.name}
                                            genreSeparator={movie.name ? 'serials' : 'movies'}
                                            location="mt-2 h-8 rounded text-xs"
                                        /> : <GoFavouriteButton location="mt-2 h-8 rounded text-xs" />
                                    : null
                                }
                            </div>
                        </div>
                    </div> : null
            })}
        </div>
        :
        <div className="flex items-center justify-center px-14">
            <div className="text-white py-36">
                Wait for the download...
            </div>
        </div>
};

export default FirstCardVersion;
