import React from "react";

import Empty from "../assets/Empty.png";

const NoFavourite = () => {
    return (
        <div className="flex flex-col md:flex-row items-center px-4 sm:px-14">
            <div className="max-w-sm text-white">
                <div className="text-lg lg:text-2xl leading-9">Your favourites list is empty</div>
                <div className="text-xs lg:text-sm mt-3 leading-5 md:max-w-[250px] lg:max-w-none">
                    Add your favourite series and films to your favourites,
                    so you can keep track of new episodes
                    so they're always at your fingertips
                </div>
            </div>
            <div className="ml-0 md:ml-2 lg:ml-4">
                <img className="h-52" src={Empty} alt="Empty" />
            </div>
        </div>
    );
};

export default NoFavourite;
