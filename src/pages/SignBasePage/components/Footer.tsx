import React from "react";

const Footer = () => {
    const inputRef = React.useRef(null);

    const copyToClipboard = () => {
        // @ts-ignore
        inputRef.current.select();
        document.execCommand('copy');
    };

    return (
        <div className="flex justify-between items-center h-20 px-14 bg-[#111113]">

            <div className="flex items-center text-[#565c67] text-xs">
                <div className="border border-[#565c67] rounded p-0.5 mr-4">18+</div>
                <div className="max-w-sm leading-4">
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
                    <div className="border border-gray-500 px-1 rounded text-white opacity-80 hover:opacity-100">
                        Copy
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Footer;
