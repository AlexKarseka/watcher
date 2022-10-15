import React from "react";
import {IForTestList} from "../models";
import {Link} from "react-router-dom";

interface SecondCardVersionProps {
    content: Array<IForTestList>
    year: boolean
}

const SecondCardVersion = ({content, year}: SecondCardVersionProps) => {
    return (
        <div className="grid grid-cols-4 gap-y-6 gap-x-4 px-14">
            {content.map((movie) => {
                return (
                    <Link to="/list" key={movie.id}>
                        <div className="relative h-52 rounded cursor-pointer duration-300 hover:opacity-70 hover:scale-105 hover:drop-shadow-[0_4px_3px_black]">
                            <img
                                className="w-full h-52 rounded"
                                src={movie.image}
                                alt="image"
                            />
                            <div
                                className="absolute top-1.5 left-1.5 text-xs rounded-sm bg-[#8c8e95] opacity-80 px-1 text-white"
                            >
                                {movie.limits}
                            </div>
                        </div>
                        <div className="text-sm text-white opacity-80 mt-3.5 overflow-hidden whitespace-nowrap overflow-ellipsis">{movie.nameFilm}</div>
                        {year ? <div className="text-sm text-[#565c67] ">{movie.year}</div> : ""}
                    </Link>
                )
            })}
        </div>
    );
};

export default SecondCardVersion;