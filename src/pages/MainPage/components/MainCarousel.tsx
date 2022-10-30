import React from "react";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import DetailsService from "../../../services/DetailsService";
import {ILogoNameList, ITopMovies} from "../../../models";

import ArrowLeft from "../assets/left.svg";
import ArrowRight from "../assets/right.svg";
import Play from "../assets/Play.svg";

interface MainCarouselProps {
    carouselMovies: Array<ITopMovies>,
}

const MainCarousel = ({carouselMovies}: MainCarouselProps) => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    const {data: details} = useQuery('details', () =>
            DetailsService.getDetails(!carouselMovies ? '' : carouselMovies[activeSlide].id, 'tv'),
        {
            refetchInterval: 100,
        }
    );

    if (!details) return null;

    const logoVariants: Array<ILogoNameList> = details.images.logos

    const englishLogo = logoVariants
        .map(logo => logo.iso_639_1 === "en" ? {...logo, logo: logo.file_path} : logo)
        .filter(logo => logo.iso_639_1 === "en")

    return (
        <div className="flex items-center -mt-20">
            <button
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? carouselMovies.length - 1 : activeSlide - 1)
                }}
            >
                <img className="w-14 hover:drop-shadow-[0_4px_3px_white]" src={ArrowLeft} alt="arrow"/>
            </button>

            <div className="relative w-full">
                <img
                    className="w-full h-[500px] rounded-b-2xl"
                    src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
                    alt="logo"
                />
                <div className="w-2/5 absolute bottom-10 left-10">
                    <div
                        className="flex items-center justify-center text-sm text-black uppercase bg-amber-400 h-5 px-1.5 rounded w-1/5 mb-3"
                    >
                        premiere
                    </div>
                    {englishLogo.length === 0 ?
                        <div className="text-amber-200 text-9xl uppercase">
                            {details.name}
                        </div>
                        :
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${englishLogo[0].file_path}`} alt="logo" />
                        </div>
                    }

                    <div className="text-white text-sm mt-2">{details.last_episode_to_air.overview}</div>

                    <div
                        className="uppercase text-5xl font-bold text-amber-200 drop-shadow-[0_4px_3px_gray] mb-6"
                    >
                        {details.title}
                    </div>
                    <Link
                        to={`/list/serials/${details.id}`}
                        className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg h-10 hover:bg-amber-500"
                    >
                        <img className="h-3.5" src={Play} alt="Play"/>
                        <div className="ml-2 text-sm">Watch</div>
                    </Link>
                </div>
            </div>

            <button
                onClick={() => {
                    setActiveSlide(activeSlide >= carouselMovies.length - 1 ? 0 : activeSlide + 1)
                }}
            >
                <img className="w-14 hover:drop-shadow-[0_4px_3px_white]" src={ArrowRight} alt="arrow"/>
            </button>
        </div>
    );
};

export default MainCarousel;
