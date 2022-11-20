import React from "react";

interface PersonInfoProps {
    info: {
        name: string,
        place_of_birth: string,
        birthday: number,
        deathday: number,
        biography: string,
    }
}

const PersonInfo = ({info}: PersonInfoProps) => {
    return (
        <div className="w-full sm:w-3/4">
            <div className="flex-col mb-3 text-xs sm:text-lg">
                <div className="mb-0.5 text-[#565c67]">Name:</div>
                <div className="text-white">{info.name}</div>
            </div>

            <div className="flex-col mb-3 text-xs sm:text-lg">
                <div className="mb-0.5 text-[#565c67]">Place of birth</div>
                <div className="text-white">{info.place_of_birth}</div>
            </div>

            <div className="flex-col mb-3 text-xs sm:text-lg">
                <div className="mb-0.5 text-[#565c67]">Birthday:</div>
                <div className="text-white">{info.birthday}</div>
            </div>

            {info.deathday ?
                <div className="flex-col mb-3 text-xs sm:text-lg">
                    <div className="mb-0.5 text-[#565c67]">Death:</div>
                    <div className="text-white">{info.deathday}</div>
                </div>
                :
                null
            }

            <div className="flex-col mb-3 text-xs sm:text-sm">
                <div className="mb-0.5 text-[#565c67]">Biography</div>
                <div className="text-white w-full sm:w-4/5">{info.biography}</div>
            </div>
        </div>
    );
};

export default PersonInfo;
