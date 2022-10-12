import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-between items-center h-20 px-14 bg-[#111113]">
            <div className="flex items-center text-[#565c67] text-xs">
                <div className="border border-[#565c67] rounded p-0.5 mr-4">18+</div>
                <div className="max-w-sm leading-4">
                    © 2022 Watcher, All rights reserved. Watcher® and all related service marks are the property of Alex Karseka.
                </div>
            </div>
            <div className="border border-[#565c67] rounded text-sm text-white py-2 px-4 cursor-pointer">
                alexkarseko@gmail.com
            </div>
        </div>
    );
};

export default Footer;
