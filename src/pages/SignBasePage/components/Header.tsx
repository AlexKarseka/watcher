import React from "react";
import {Link} from "react-router-dom";

import Reset from "../assets/Reset.svg";

const Header = () => {

    return (
        <div className="relative z-50 flex items-start justify-between px-20 pt-8">

            <div
                className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-2xl font-bold opacity-80 hover:opacity-100"
            >
                <Link to="/">Watcher</Link>
            </div>

            <div>
                <Link to="/">
                    <img src={Reset} alt="Reset" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
