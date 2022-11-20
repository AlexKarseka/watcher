import React from "react";
import { ITopMovies } from "../models";
import { Link } from "react-router-dom";
import db from "../firebase";
import { deleteDoc, doc } from "@firebase/firestore";

import NoSuchGenre from "./NoSuchGenre";

interface SecondCardVersionProps {
    content: Array<ITopMovies>,
    year: boolean,
}

const SecondCardVersion = ({content, year}: SecondCardVersionProps) => {
    return content.length > 0 ?
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 lg:gap-y-6 gap-x-2 lg:gap-x-4 px-4 sm:px-14">
            {content.map((movie) => {
                return movie.backdrop_path ?
                    <div className="relative"  key={movie.id}>
                        {movie.list_id ?
                            <button
                                className="absolute z-50 bottom-10 right-1.5 text-xs rounded-sm bg-red-600 px-1 text-white w-2/5"
                                type="button"
                                onClick={
                                    async () => {
                                        const docRef = doc(db, "favourite", movie.list_id);
                                        await deleteDoc(docRef);
                                    }
                                }
                            >
                                Delete from favourites
                            </button> : null
                        }
                        <Link to={`/list/${movie.name ? 'serials' : 'movies'}/${movie.id}`}>
                            <div
                                className="relative h-32 sm:h-52 rounded cursor-pointer duration-300 sm:hover:opacity-70 sm:hover:scale-105 sm:hover:drop-shadow-[0_4px_3px_black]">
                                <img
                                    className="w-full h-32 sm:h-52 rounded"
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt="logo"
                                />
                                <div
                                    className="absolute top-1.5 left-1.5 text-xs rounded-sm bg-[#8c8e95] opacity-80 px-1 text-white">
                                    {movie.adult ? '12+' : '18+'}
                                </div>
                            </div>

                            <div
                                className="text-sm text-white opacity-80 mt-3.5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                {movie.title ? movie.title : movie.name}
                            </div>
                            {year ?
                                <div className="text-sm text-[#565c67]">
                                    {movie.release_date ? movie.release_date.slice(0, 4) : movie.first_air_date.slice(0, 4)}
                                </div> : ""
                            }
                        </Link>
                    </div> : null
            })}
        </div> : <NoSuchGenre/>
};

export default SecondCardVersion;