import React from 'react';

import ArrowDown from '../assets/ArrowDown.svg';
import Extended from '../assets/Extended.svg';
import Tiles from '../assets/Tiles.svg';

const genres = ['Comedy', 'Cartoons', 'Horrors', 'Science fiction', 'Action', 'Melodramas', 'Drama', 'Detective', 'Adventure', 'Historical']

const MenuSettings = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    const [genresList, setGenresList] = React.useState<boolean>(true);
    const [genresName, setGenresName] = React.useState<string>('All Genres');

    return (
        <div className="relative pt-6 pb-10 px-14">
            <div
                className={`${genresList ? 'hidden' : ''} absolute w-full left-0 -bottom-10 py-6 px-14 z-50 bg-[#434852]`}
            >
                <div className="flex items-baseline gap-10 text-white text-sm">
                    {genres.map((genres, index) => {
                        return (

                            <button key={index}
                                    onClick={() => {
                                        setGenresName(genres);
                                        setGenresList(true);
                                    }}
                            >
                                {genres}
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
                        }}
                        className={`flex justify-center items-center h-8 w-10 rounded ${listStyle ? '' : 'bg-[#434852]'}`}
                    >
                        <img src={Tiles} alt="Tiles"/>
                    </button>
                    <button
                        onClick={() => {
                            setListStyle(true)
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
