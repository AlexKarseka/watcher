import React from 'react';
import {Link} from 'react-router-dom';
import {IForTestList} from "../models";

import Play from '../assets/Play.svg';

interface FirstCardVersionProps {
    content: Array<IForTestList>
}

const FirstCardVersion = ({content}: FirstCardVersionProps) => {

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
                            src={movie.image}
                            alt="image"
                        />
                        <div className="relative pt-3.5 px-2.5">
                            <div className="absolute bottom-32 text-white uppercase">{movie.nameFilm}</div>
                            <div className="flex text-xs">
                                <div
                                    className={`${movie.rating <= 7 ? "text-red-600" : "text-green-500"} border border-[hsla(0,0%,100%,.24)] rounded-sm px-1`}
                                >
                                    {movie.rating}
                                </div>
                                <div
                                    className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                                >
                                    {movie.limits}
                                </div>
                                <div
                                    className="flex items-center justify-center rounded-sm bg-[hsla(0,0%,100%,.08)] ml-1 px-1 text-white"
                                >
                                    {movie.genres}
                                </div>
                            </div>
                            <div className="mt-3.5 text-xs text-white text-ellipsis h-12 w-full overflow-hidden">
                                {movie.description}
                            </div>
                            <div className="flex gap-2">
                                <Link className="w-2/4 flex items-center justify-center bg-amber-400 rounded mt-2 h-8 hover:bg-amber-500" to="/">
                                    <img className="h-3.5" src={Play} alt="Play" />
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
