import React from "react";

interface BgListProps {
    poster: string,
}

const BgList = ({poster}: BgListProps) => {

    return (
        <img
            className="absolute -top-20 left-0 opacity-20 w-full"
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="bg"
        />
    );
};

export default BgList;
