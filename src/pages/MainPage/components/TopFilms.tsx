import React from "react";
import {IForTestTop} from "../../../models";

import ArrowLeft from '../assets/left.svg';
import ArrowRight from '../assets/right.svg';

const forTestTop: Array<IForTestTop> = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/49/Game_of_Thrones.jpg/262px-Game_of_Thrones.jpg",
        nameFilm: 'Game of tron 01'
    },
    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/Game_of_Thrones_2.jpg/270px-Game_of_Thrones_2.jpg",
        nameFilm: 'Game of tron 02'
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/Game_of_Thrones_3.jpg/270px-Game_of_Thrones_3.jpg",
        nameFilm: 'Game of tron 03'
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Game_of_Thrones_4.jpg/270px-Game_of_Thrones_4.jpg",
        nameFilm: 'Game of tron 04'
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2a/Game_of_Thrones_5.jpg/270px-Game_of_Thrones_5.jpg",
        nameFilm: 'Game of tron 05'
    },
    {
        id: 6,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/GoT_season_6_official_poster.jpg/270px-GoT_season_6_official_poster.jpg",
        nameFilm: 'Game of tron 06'
    },
    {
        id: 7,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/04/Game_of_Thrones_Season_7.jpg/269px-Game_of_Thrones_Season_7.jpg",
        nameFilm: 'Game of tron 07'
    },
    {
        id: 8,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f6/GOT8_poster.jpg/274px-GOT8_poster.jpg",
        nameFilm: 'Game of tron 08'
    },

]

const TopFilms = () => {
    const [scroller, setScroller] = React.useState<number>(0);

    return (
        <div className="relative">
            {scroller === 0 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 left-0 z-10 h-[365px] mt-3 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller +295)
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
                        setScroller(scroller -295)
                    }}
                >
                    <img src={ArrowRight} alt="ArrowRight"/>
                </button>
            }

            <div className={`px-14 w-[2480px] ml-[${scroller}px]`}>
                <nav className="flex flex-nowrap p-2.5">
                    {forTestTop.map((film) => {
                        return (
                            <a
                                className="mr-4"
                                key={film.id}
                            >
                                <img
                                    className="w-80 h-[365px] rounded-2xl cursor-pointer will-change-transform duration-200 transition hover:scale-105"
                                    src={film.image}
                                    alt={film.nameFilm}
                                />
                                <div className="mt-3.5 text-base text-white opacity-80">{film.nameFilm}</div>
                            </a>
                        )
                    })}
                </nav>
            </div>
        </div>
    );
};

export default TopFilms;
