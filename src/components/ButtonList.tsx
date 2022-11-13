import React from "react";
import useAuth from "../hooks/store/useAuth";

import FavouriteButton from "./FavouriteButton";

interface ButtonListProps {
    homepage: string,
    nameCategory: string,
    id_movie: number,
    backdrop_path: string,
    name: string,
}

const ButtonList = ({homepage, nameCategory, id_movie, backdrop_path, name}: ButtonListProps) => {
    const {isAuth} = useAuth();

    return (
        <div className="flex gap-6">
            <a
                href={homepage}
                className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg mb-8 h-10 hover:bg-amber-500"
            >
                <div className="ml-2 text-sm text-black">Go to the {nameCategory} homepage</div>
            </a>

            {isAuth ?
                <FavouriteButton
                    id_movie={id_movie}
                    backdrop_path={backdrop_path}
                    name={name}
                    genreSeparator={nameCategory}
                />
                :
                null
            }

        </div>
    );
};

export default ButtonList;
