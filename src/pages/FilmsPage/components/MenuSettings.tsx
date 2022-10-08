import React from 'react';

import ArrowDown from '../assets/ArrowDown.svg';
import Extended from '../assets/Extended.svg';
import Tiles from '../assets/Tiles.svg';

const MenuSettings = () => {
    return (
        <div className="pt-6 pb-10 px-14">
            <div className="flex justify-between items-center">
                <div
                    className="flex justify-between items-center cursor-pointer text-sm w-72 h-8 px-2.5 rounded bg-[rgba(86,92,103,.16)] hover:opacity-80"
                >
                    <div className="text-white opacity-80">All Genres</div>
                    <img src={ArrowDown} alt="ArrowDown" />
                </div>
                <div>
                    <div className="flex items-center h-8 p-2.5">
                        <div className="bg-[rgba(86,92,103,.16)] w-10">
                            <img src={Tiles} alt="Tiles" />
                        </div>
                        <div className="bg-[rgba(86,92,103,.16)] w-10">
                            <img src={Extended} alt="Extended" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuSettings;
