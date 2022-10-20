import React from "react";

interface ButtonListProps {
    homepage: string,
    nameCategory: string,
}

const ButtonList = ({homepage, nameCategory}: ButtonListProps) => {
    return (
        <div className="flex gap-6">
            <a
                href={homepage}
                className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg mb-8 h-10 hover:bg-amber-500"
            >
                <div className="ml-2 text-sm text-black">Go to the {nameCategory} homepage</div>
            </a>

            <button
                className="w-2/4 flex items-center justify-center bg-gray-700 rounded-lg mb-8 h-10 hover:bg-gray-800"
            >
                <div className="ml-2 text-sm text-white">Add to favourites</div>
            </button>
        </div>
    );
};

export default ButtonList;
