import React from "react";

interface PersonProfileProps {
    photo: string,
}

const PersonProfile = ({photo}: PersonProfileProps) => {
    return (
        <div className="w-1/4">
            <img
                className="w-full rounded"
                src={`https://image.tmdb.org/t/p/original${photo}`}
                alt="bg"
            />
        </div>
    );
};

export default PersonProfile;
