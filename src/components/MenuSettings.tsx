import React from 'react';

import ArrowDown from '../assets/ArrowDown.svg';
import Extended from '../assets/Extended.svg';
import Tiles from '../assets/Tiles.svg';
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {IGenresList} from "../models";

interface MenuSettingsProps {
    styleCard: (card: boolean) => void,
}

const MenuSettings = ({styleCard}: MenuSettingsProps) => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresList, setGenresList] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<string>('All Genres');

    const {data} = useQuery('genres', () => MovieService.getGenres());

    if (!data) return null

    const genres: Array<IGenresList> = data.genres

    return (
        <div className="relative pt-6 pb-10 px-14">
            <div
                className={`${genresList ? 'hidden' : ''} absolute w-full left-0 -bottom-48 py-6 px-14 z-50 bg-[#434852]`}
            >
                <div className="grid grid-cols-4 gap-4 text-white text-sm">
                    {genres.map((genres) => {
                        return (
                            <button
                                className="text-left"
                                key={genres.id}
                                onClick={() => {
                                    setGenresName(genres.name);
                                    setGenresList(true);
                                }}
                            >
                                {genres.name}
                            </button>
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
                    <div className="text-white opacity-80">{genresName}</div>
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
