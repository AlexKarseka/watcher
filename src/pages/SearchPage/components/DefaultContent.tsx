import React from "react";
import {IForTestTopSearch} from "../../../models";
import {Link} from "react-router-dom";

interface DefaultContentProps {
    popular: Array<IForTestTopSearch>
}

const DefaultContent = ({popular}: DefaultContentProps) => {
    return (
        <div className="text-white px-14 pb-32">
            <div className="text-xl mb-4">
                Popular movies and series:
            </div>
            <div className="grid grid-cols-2 w-3/4 text-sm">
                {popular.map((movie) => {
                    return (
                        <Link
                            className="leading-7 hover:opacity-80"
                            key={movie.id}
                            to="/"
                        >
                            {movie.nameFilm}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default DefaultContent;
