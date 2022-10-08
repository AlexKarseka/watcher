import React from "react";
import {Link} from "react-router-dom";

import GitLogo from '../assets/gitHub.png';
import API from '../assets/API.svg';

const Footer = () => {
    return (
        <div className="flex items-center justify-between py-6 px-14">
            <div
                className="uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-2xl font-bold opacity-80 hover:opacity-100"
            >
                <Link to="/">Watcher</Link>
            </div>
            <div>
                <ul className="flex items-center justify-center">
                    <li className="mr-5 text-white text-base opacity-80 hover:opacity-100">
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className="mr-5 text-white text-base opacity-80 hover:opacity-100">
                        <Link to="/serials">Serials</Link>
                    </li>
                    <li className="text-white text-base opacity-80 hover:opacity-100">
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
                <ul className="flex items-center justify-center pt-8">
                    <li className="hover:scale-110 mr-5">
                        <a href="https://github.com/AlexKarseka/watcher">
                            <img src={GitLogo} alt="gitLogo" height={30} width={80} />
                        </a>
                    </li>
                    <li className="hover:scale-110">
                        <a href="https://developers.themoviedb.org/3/getting-started/introduction">
                            <img src={API} alt="APILogo" height={30} width={80} />
                        </a>
                    </li>
                </ul>
                <div className="mt-6 text-white text-xs opacity-80">
                    © 2022 Watcher, All rights reserved. Watcher® and all related service marks are the property of Alex Karseka.
                </div>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
                <div className="text-white opacity-80">
                    Support
                </div>
                <div className="text-white opacity-80 cursor-pointer hover:opacity-100">
                    alexkarseko@gmail.com
                </div>
            </div>
        </div>
    );
};

export default Footer;
