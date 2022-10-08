import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="pt-6 px-14">
            <div className="flex text-sm mb-2 text-[#565c67]">
                <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                <div>/ Movies</div>
            </div>
            <div className="text-2xl text-white opacity-80">Online Movies</div>
            <div
                className="mt-2 text-[#565c67] text-xs"
            >
                The best movies in HD quality. Watch new movies online Watcher</div>
        </div>
    );
};

export default Header;
