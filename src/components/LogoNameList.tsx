import React from "react";
import {ILogoNameList} from "../models";

interface LogoNameListProps {
    logo: Array<ILogoNameList>,
    nameMovie: string,
}

const LogoNameList = ({logo, nameMovie}: LogoNameListProps) => {

    return (
        <div className="relative z-20 w-2/4">
            {logo.length !== 0 ?
                <img
                    className="w-full my-4"
                    src={`https://image.tmdb.org/t/p/w500${logo[0].file_path}`}
                    alt="bg"
                /> : null}

            <div className="text-white opacity-80 mb-6">{nameMovie}</div>
        </div>
    );
};

export default LogoNameList;
