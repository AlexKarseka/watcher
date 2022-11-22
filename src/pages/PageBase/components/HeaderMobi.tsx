import React from "react";
import {Link} from "react-router-dom";

import MenuMobi from "./MenuMobi";

import Menu from "../assets/Menu.svg";

const HeaderMobi = () => {
    const [menuModalOpen, setMenuModalOpen] = React.useState<boolean>(false);

    return (
        <div className="relative z-50 flex items-center justify-between w-full h-14 px-4">
            <div
                className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-sm sm:text-2xl font-bold opacity-80 drop-shadow-[0_4px_3px_black] hover:opacity-100">
                <Link to="/">Watcher</Link>
            </div>

            <MenuMobi
                onClose={() => {
                    setMenuModalOpen(false);
                }}
                isOpen={menuModalOpen}
            />

            <button
                type="button"
                onClick={() => {
                    setMenuModalOpen(true);
                }}
            >
                <img src={Menu} alt="Menu"/>
            </button>
        </div>
    );
};

export default HeaderMobi;
