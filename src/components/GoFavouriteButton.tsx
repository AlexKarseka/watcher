import React from "react";
import { Link } from "react-router-dom";

interface GoFavouriteButtonProps {
    location: string,
}

const GoFavouriteButton = ({location}: GoFavouriteButtonProps) => {
    return (
        <Link
            to="/favourite"
            className={`${location} w-2/4 flex items-center justify-center bg-amber-400 sm:hover:bg-amber-500`}
        >
            <div className="ml-2 text-black">Go to favourites</div>
        </Link>
    )
}

export default GoFavouriteButton;
