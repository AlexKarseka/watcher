import React from "react";

interface PersonProfileProps {
    photo: string,
}

const PersonProfile = ({photo}: PersonProfileProps) => {
    return (
        <div className="w-full sm:w-2/4 md:w-1/4">
            <img
                className="w-full rounded"
                src={`https://image.tmdb.org/t/p/original${photo}`}
                alt="bg"
            />
        </div>
    );
};

export default PersonProfile;
