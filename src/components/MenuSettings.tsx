import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import MovieService from "../services/MovieService";
import { IGenresList, ITopMovies } from "../models";

import ArrowDown from '../assets/ArrowDown.svg';
import Extended from '../assets/Extended.svg';
import Tiles from '../assets/Tiles.svg';


interface MenuSettingsProps {
    styleCard: (card: boolean) => void,
    paginationCount: (count: number) => void,
    cleaningData: (data: Array<ITopMovies>) => void,
    typeGenres: string,
    typeLink: string,
    buttonName: string
}

const MenuSettings = ({styleCard, typeGenres, paginationCount, cleaningData, typeLink, buttonName}: MenuSettingsProps) => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresList, setGenresList] = React.useState<boolean>(true);
    const {data} = useQuery(`genres${typeGenres}`, () => MovieService.getGenres(typeGenres));

    if (!data) return null

    const genres: Array<IGenresList> = data

    return (
        <div className="relative pt-6 pb-10 px-14">
            <div
                className={`${genresList ? 'hidden' : ''} absolute w-full left-0 -bottom-48 py-6 px-14 z-50 bg-[#434852]`}
            >
                <div className="grid grid-cols-4 gap-4 text-white text-sm">
                    <Link
                        to={`/${typeLink}`}
                        className="text-left"
                        onClick={() => {
                            paginationCount(1);
                            cleaningData([]);
                            setGenresList(true);
                        }}
                    >
                        All Genres
                    </Link>
                    {genres.map((genres) => {
                        return (
                            <Link
                                to={`/${typeLink}/${genres.name.toLowerCase()}`}
                                className="text-left"
                                key={genres.id}
                                onClick={() => {
                                    paginationCount(1);
                                    cleaningData([])
                                    setGenresList(true);
                                }}
                            >
                                {genres.name}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setGenresList(!genresList)
                    }}
                    className="flex justify-between items-center text-sm w-72 h-8 px-2.5 rounded bg-[rgba(86,92,103,.16)] hover:opacity-80"
                >
                    <div className="text-white opacity-80">{buttonName}</div>
                    {genresList ?
                        <img src={ArrowDown} alt="ArrowDown"/>
                        :
                        <img className="rotate-180" src={ArrowDown} alt="ArrowDown"/>
                    }
                </button>

                <div className="flex items-center rounded bg-[rgba(86,92,103,.16)]">
                    <button
                        onClick={() => {
                            setListStyle(false);
                            styleCard(false);
                        }}
                        className={`flex justify-center items-center h-8 w-10 rounded ${listStyle ? '' : 'bg-[#434852]'}`}
                    >
                        <img src={Tiles} alt="Tiles"/>
                    </button>
                    <button
                        onClick={() => {
                            setListStyle(true);
                            styleCard(true);
                        }}
                        className={`flex justify-center items-center h-8 w-10 rounded ${listStyle ? 'bg-[#434852]' : ''}`}
                    >
                        <img src={Extended} alt="Extended"/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MenuSettings;
