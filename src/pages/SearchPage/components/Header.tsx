import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex text-sm mb-4 text-[#565c67] capitalize px-14">
            <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
            <div>/ Search</div>
        </div>
    );
};

export default Header;
