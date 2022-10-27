import React from "react";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import MainPageService from "../../../services/MainPageService";
import {ITopActors} from "../../../models";

import ArrowLeft from "../assets/left.svg";
import ArrowRight from "../assets/right.svg";

const TopPerson = () => {
    const [scroller, setScroller] = React.useState<number>(0);

    const {data} = useQuery('bestActor', () => MainPageService.getBestActor());

    if (!data) return null;

    const bestActor: Array<ITopActors> = data

    return (
        <div className="relative">
            {scroller === 0 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 left-0 z-10 h-[365px] mt-3 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller + 295)
                    }}
                >
                    <img src={ArrowLeft} alt="ArrowLeft"/>
                </button>
            }

            {scroller === -1180 ?
                null
                :
                <button
                    className="flex justify-center items-center absolute top-0 right-0 z-10 h-[365px] mt-3 w-24 transition hover:scale-110 drop-shadow-[0_4px_3px_black]"
                    onClick={() => {
                        setScroller(scroller - 295)
                    }}
                >
                    <img className="" src={ArrowRight} alt="ArrowRight"/>
                </button>
            }

            <div className={`px-14 w-[2480px] ml-[${scroller}px]`}>
                <div className="text-xl text-white px-6 opacity-80 font-extralight">
                    Popular persons
                </div>
                <nav className="flex flex-nowrap p-2.5">
                    {bestActor.slice(0, 9).map((actor) => {
                        return actor.profile_path ?
                            <Link
                                className="relative mr-4"
                                key={actor.id}
                                to={`/list/person/${actor.id}`}
                            >
                                <img
                                    className="w-80 h-[365px] rounded-2xl cursor-pointer will-change-transform duration-300 transition hover:scale-105"
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                    alt="logo"
                                />
                                <div
                                    className="absolute bottom-2 left-3.5 text-white drop-shadow-[0_2px_2px_black]"
                                >
                                    {actor.name}
                                </div>
                            </Link>
                            :
                            null
                    })}
                </nav>
            </div>
        </div>
    );
};

export default TopPerson;
