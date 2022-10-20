import React from "react";
import {Link} from "react-router-dom";

interface HeaderListProps {
    nameCategory: string,
    nameMovie: string,
}

const HeaderList = ({nameCategory, nameMovie}: HeaderListProps) => {
    return (
        <div className="relative z-20 flex text-sm text-[#565c67] capitalize">
            <Link className="mr-1 hover:text-[#868fa0]" to="/">Watcher</Link>
            <div className="mx-1">/</div>
            <Link className="mr-1 hover:text-[#868fa0]" to={`/${nameCategory}`}>{nameCategory}</Link>
            <div className="mx-1">/</div>
            <div className="text-[#868fa0]">{nameMovie}</div>
        </div>
    );
};

export default HeaderList;
