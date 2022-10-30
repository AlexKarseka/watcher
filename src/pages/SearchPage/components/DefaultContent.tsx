import React from "react";
import {ITopMovies} from "../../../models";
import {Link} from "react-router-dom";

interface DefaultContentProps {
    popular: Array<ITopMovies>,
}

const DefaultContent = ({popular}: DefaultContentProps) => {

    return (
        <div className="text-white px-14 pb-24">

            <div className="text-xl mb-4">
                Popular movies and series:
            </div>

            <div className="grid grid-cols-2 w-3/4 text-sm">
                {popular.splice(0, 12).map((movie) => {
                    return (
                        <Link
                            className="leading-7 hover:opacity-80"
                            key={movie.id}
                            to={`/list/${movie.title ? 'movies' : 'serials'}/${movie.id}`}
                        >
                            {movie.title ? movie.title : movie.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default DefaultContent;
