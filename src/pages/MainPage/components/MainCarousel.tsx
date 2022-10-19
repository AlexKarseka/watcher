import React from "react";
import {useQuery} from 'react-query';
import {Link} from "react-router-dom";
import MovieService from "../../../services/MovieService";
import {ITopMovies} from "../../../models";

import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowRight from '../assets/ArrowRight.svg';
import Play from "../assets/Play.svg";

const MainCarousel = () => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    const {data} = useQuery('topRated', () =>
        MovieService.getTopMovies("top_rated", "1")
    );

    if (!data) return null

    const topRated: Array<ITopMovies> = data.results.slice(0, 5);

    return (
        <div className="flex items-center">
            <button
                className="text-white text-4xl px-2"
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? topRated.length - 1 : activeSlide - 1)
                }}
            >
                <img className="w-20 hover:drop-shadow-[0_4px_3px_white]" src={ArrowLeft} alt="arrow"/>
            </button>
            <div className="relative w-full">
                <img
                    className="w-full h-[500px] rounded-2xl"
                    src={`https://image.tmdb.org/t/p/original${topRated[activeSlide].backdrop_path}`}
                    alt="image"
                />
                <div className="w-2/4 absolute bottom-10 left-10">
                    <div
                        className="uppercase text-5xl font-bold text-amber-200 drop-shadow-[0_4px_3px_gray] mb-6"
                    >
                        {topRated[activeSlide].title}
                    </div>
                    <Link
                        to={`/list/${topRated[activeSlide].id}`}
                        className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg h-10 hover:bg-amber-500"
                    >
                        <img className="h-3.5" src={Play} alt="Play" />
                        <div className="ml-2 text-sm">Watch</div>
                    </Link>
                </div>
            </div>

            <button
                className="text-white text-4xl px-2"
                onClick={() => {
                    setActiveSlide(activeSlide >= topRated.length - 1 ? 0 : activeSlide + 1)
                }}
            >
                <img className="w-20 hover:drop-shadow-[0_4px_3px_white]" src={ArrowRight} alt="arrow"/>
            </button>
        </div>
    );
};

export default MainCarousel;
