import React from "react";

interface BgListProps {
    poster: string,
    height: string,
}

const BgList = ({poster, height}: BgListProps) => {

    return (
        <img
            className={`absolute -top-20 left-0 opacity-20 ${height}`}
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="bg"
        />
    );
};

export default BgList;
