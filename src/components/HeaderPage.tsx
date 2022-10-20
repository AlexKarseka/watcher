import React from 'react';
import {Link} from "react-router-dom";

interface HeaderPageProps {
    nameCategory: string,
}

const HeaderPage = ({nameCategory}: HeaderPageProps) => {

    return (
        <div className="pt-6 px-14">

            <div className="flex text-sm mb-2 text-[#565c67] capitalize">
                <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                <div>/ {nameCategory}</div>
            </div>

            <div className="text-2xl text-white opacity-80 capitalize">
                Online {nameCategory}
            </div>

            <div className="mt-2 text-[#565c67] text-xs">
                The best {nameCategory} in HD quality. Watch new {nameCategory} online Watcher
            </div>
        </div>
    );
};

export default HeaderPage;
