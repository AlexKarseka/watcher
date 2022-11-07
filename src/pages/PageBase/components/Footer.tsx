import React from "react";
import {Link} from "react-router-dom";

import GitLogo from "../assets/gitHub.png";
import API from "../assets/API.svg";
import Firebase from "../assets/Firebase.png";
import FooterBg from "../assets/footerBg.webp";

interface FooterProps {
    footerBg: boolean,
}

const Footer = ({footerBg}: FooterProps) => {
    const inputRef = React.useRef(null);

    const copyToClipboard = () => {
        // @ts-ignore
        inputRef.current.select();
        document.execCommand('copy');
    };

    return (
        <div className="relative z-20 flex items-center justify-between pt-32 pb-6 px-14">
            {footerBg ?
                <div className="absolute bottom-0 left-0 w-full h-full">
                    <img src={FooterBg} alt="footer"/>
                </div>
                :
                null
            }

            <div
                className="relative z-20 uppercase mr-8 text-white border-2 border-white rounded-md p-1.5 text-2xl font-bold opacity-80 hover:opacity-100"
            >
                <Link to="/">Watcher</Link>
            </div>

            <div className="relative z-20">
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
                            <img src={GitLogo} alt="gitLogo" height={30} width={80}/>
                        </a>
                    </li>
                    <li className="hover:scale-110 mr-5">
                        <a href="https://developers.themoviedb.org/3/getting-started/introduction">
                            <img src={API} alt="APILogo" height={30} width={80}/>
                        </a>
                    </li>
                    <li className="hover:scale-110">
                        <a href="https://console.firebase.google.com/">
                            <img src={Firebase} alt="Firebase" height={30} width={80}/>
                        </a>
                    </li>
                </ul>

                <div className="mt-6 text-white text-xs opacity-80">
                    © 2022 Watcher, All rights reserved. Watcher® and all related service marks are the property of Alex
                    Karseka.
                </div>
            </div>

            <div className="relative z-20 w-[200px] flex flex-col gap-2.5 text-sm">
                <div className="text-white opacity-80">
                    Support
                </div>
                <div className="flex items-center">
                    <input
                        className="w-[165px] text-white opacity-80 outline-none bg-inherit"
                        type="text"
                        ref={inputRef}
                        value="alexkarseko@gmail.com"
                        readOnly
                    />
                    <button
                        type="button"
                        onClick={copyToClipboard}
                    >
                        <div className="border border-gray-500 px-1 rounded text-white opacity-80 hover:opacity-100">
                            Copy
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
