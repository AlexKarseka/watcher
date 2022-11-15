import React from "react";
import { IProduction } from "../models";

interface FounderListProps {
    founder: Array<IProduction>,
}

const FounderList = ({founder}: FounderListProps) => {
    return founder.length !== 0 ?
        <div className="relative flex items-start">

            <div className={`${founder[0].name.length > 14 ? 'mb-[58px]' : 'flex items-center gap-2 mb-[89px] mt-1'} text-3xl text-[#565c67]`}>
                <div>{founder[0].name}</div>
                <div>presents</div>
            </div>

            {founder[0].logo_path ?
                <img
                    className="absolute top-0 right-0 w-1/4 mt-[1%]"
                    src={`https://image.tmdb.org/t/p/w500${founder[0].logo_path}`}
                    alt="logo"
                />
                :
                null}
        </div>
        :
        null
};

export default FounderList;
