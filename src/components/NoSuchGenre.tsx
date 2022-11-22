import React from "react";
import Empty from "../assets/Empty.png";

const NoSuchGenre = () => {
    return (
        <div className="flex flex-col md:flex-row items-center px-4 sm:px-14 pb-16">
            <div className="max-w-sm text-white">
                <div className="text-lg lg:text-2xl leading-9">No such genre</div>
                <div className="text-xs lg:text-sm mt-3 leading-5 md:max-w-[250px] lg:max-w-none">
                    We're sorry, but we can't find films in this
                    category on our website yet, but we'll add them
                    in the future.
                </div>
            </div>
            <div className="ml-0 md:ml-2 lg:ml-4">
                <img className="h-52" src={Empty} alt="Empty" />
            </div>
        </div>
    );
};

export default NoSuchGenre;
