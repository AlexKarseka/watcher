import React from "react";

import Empty from "../assets/Empty.png";

const NoFavourite = () => {
    return (
        <div className="flex items-center px-14">
            <div className="max-w-sm text-white">
                <div className="text-2xl leading-9">Your favourites list is empty</div>
                <div className="text-sm mt-3 leading-5">
                    Add your favourite series and films to your favourites,
                    so you can keep track of new episodes
                    so they're always at your fingertips
                </div>
            </div>
            <div className="ml-4">
                <img className="h-52" src={Empty} alt="Empty" />
            </div>
        </div>
    );
};

export default NoFavourite;
