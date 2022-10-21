import React from "react";
import Empty from "../assets/Empty.png";

const NoSuchGenre = () => {
    return (
        <div className="flex items-center px-14 pb-16">
            <div className="max-w-sm text-white">
                <div className="text-2xl leading-9">No such genre</div>
                <div className="text-sm mt-3 leading-5">
                    We're sorry, but we can't find films in this
                    category on our website yet, but we'll add them
                    in the future.
                </div>
            </div>
            <div className="ml-4">
                <img className="h-52" src={Empty} alt="Empty" />
            </div>
        </div>
    );
};

export default NoSuchGenre;
