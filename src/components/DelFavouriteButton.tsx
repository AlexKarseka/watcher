import React from "react";

const DelFavouriteButton = () => {
    return (
        <button
            className="w-2/4 flex items-center justify-center bg-gray-700 rounded mt-2 h-8 hover:bg-gray-800"
            type="button"
        >
            <div className="ml-2 text-xs text-white">Delete from favourites</div>
        </button>
    )
}

export default DelFavouriteButton;
