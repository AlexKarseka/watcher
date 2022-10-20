import React from "react";
import {IDirectors} from "../../../models";

interface CreatorsListProps {
    creators: {
        created_by: Array<IDirectors>,
        first_air_date: string,
        last_air_date: string,
        episode_run_time: Array<number>,
    },
}

const CreatorsList = ({creators}: CreatorsListProps) => {

    return (
        <div>
            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Directors:</div>
                {creators.created_by.map((dir) => {
                    return (
                        <div key={dir.id} className="text-white mr-1.5">
                            {dir.name}
                        </div>
                    )
                })}
            </div>

            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">First air:</div>
                <div className="text-white">{creators.first_air_date.slice(0, 4)}</div>
            </div>

            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Last air:</div>
                <div className="text-white">{creators.last_air_date.slice(0, 4)}</div>
            </div>

            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Series duration:</div>
                <div className="text-white">{creators.episode_run_time[0]} min</div>
            </div>
        </div>
    );
};

export default CreatorsList;
