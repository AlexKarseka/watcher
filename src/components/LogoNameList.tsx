import React from "react";
import { ILogoNameList } from "../models";

interface LogoNameListProps {
    logo: Array<ILogoNameList>,
    nameMovie: string,
}

const LogoNameList = ({logo, nameMovie}: LogoNameListProps) => {
    const englishLogo = logo
        .map(logo => logo.iso_639_1 === "en" ? {...logo, logo: logo.file_path} : logo)
        .filter(logo => logo.iso_639_1 === "en")

    return (
        <div className="relative z-20 w-2/4">
            {logo.length !== 0 ?
                <img
                    className="w-full my-4"
                    src={`https://image.tmdb.org/t/p/w500${englishLogo.length <= 0 ? logo[0].file_path : englishLogo[0].file_path}`}
                    alt="bg"
                /> : null}

            <div className="text-white opacity-80 mb-6">{nameMovie}</div>
        </div>
    );
};

export default LogoNameList;
