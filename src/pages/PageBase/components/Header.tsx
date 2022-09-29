import React from "react";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full h-20 px-20">
            <ul className="flex items-center justify-center">
                <li
                    className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-2xl font-bold opacity-80 hover:opacity-100"
                >
                    <a href="/">Watcher</a>
                </li>
                <li className="mr-5 text-white text-base opacity-80 hover:opacity-100">
                    <a href="/movies">Movies</a>
                </li>
                <li className="mr-5 text-white text-base opacity-80 hover:opacity-100">
                    <a href="/serials">Serials</a>
                </li>
                <li className="text-white text-base opacity-80 hover:opacity-100">
                    <a href="/search">Search</a>
                </li>
            </ul>
            <div className="flex gap-3">
                <a
                    className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#565c67] border border-[#565c67] text-white text-sm opacity-80 hover:opacity-100"
                    href="/signin"
                >
                   Log in
                </a>
                <a
                    className="inline-flex items-center justify-center rounded-lg px-3 h-8 bg-[#feba2b] border border-[#feba2b] text-[#111113] text-sm opacity-80 hover:opacity-100"
                    href="/signup">
                    Sign up
                </a>
            </div>
        </div>
    );
};

export default Header;
