import React from "react";

import useCopyText from "../../../hooks/useCopyText";

const Footer = () => {
    const {inputRef, copyToClipboard} = useCopyText();

    return (
        <div className="relative bottom-0 left-0 flex flex-col sm:flex-row justify-between items-center sm:h-20 pt-4 sm:pt-0 px-4 sm:px-14 bg-[#111113]">
            <div className="flex items-center text-[#565c67] text-xs">
                <div className="border border-[#565c67] rounded p-0.5 mr-4">18+</div>
                <div className="sm:max-w-sm leading-4">
                    © 2022 Watcher, All rights reserved. Watcher® and all related service marks are the property of Alex Karseka.
                </div>
            </div>

            <div className="flex items-center">
                <input
                    className="w-[190px] text-white opacity-80 outline-none bg-inherit"
                    type="text"
                    ref={inputRef}
                    value="alexkarseko@gmail.com"
                    readOnly
                />
                <button
                    type="button"
                    onClick={copyToClipboard}
                >
                    <div className="text-sm border border-gray-500 px-1 rounded text-white opacity-80 hover:opacity-100">
                        Copy
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Footer;
