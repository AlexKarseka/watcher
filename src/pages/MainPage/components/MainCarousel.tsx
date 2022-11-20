import React from "react";
import {Link} from "react-router-dom";
import Play from "../assets/Play.svg";

import useMainCarousel from "../../../hooks/useMainCarousel";
import useFavouriteData from "../../../hooks/useFavouriteData";
import AddFavouriteButton from "../../../components/AddFavouriteButton";
import GoFavouriteButton from "../../../components/GoFavouriteButton";

import ArrowLeft from "../../../assets/left.svg";
import ArrowRight from "../../../assets/right.svg";

const MainCarousel = () => {
    const {isAuth, userFilter} = useFavouriteData();
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    const carouselList = useMainCarousel();
    const windowWidth: number = document.documentElement.clientWidth;

    return (
        <div className="flex items-center sm:-mt-20">
            <button
                className={`${windowWidth < 550 ? 'absolute left-0 top-2 h-full z-50' : ''}`}
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? carouselList.length - 1 : activeSlide - 1)
                }}
            >
                <img
                    className="w-6 sm:w-8 lg:w-10 xl:w-14 hover:drop-shadow-[0_4px_3px_white]"
                    src={ArrowLeft}
                    alt="arrow"
                />
            </button>

            <div className="relative w-full">
                <img
                    className="w-full xl:h-[580px] rounded-none sm:rounded-b-2xl"
                    src={`https://image.tmdb.org/t/p/original${windowWidth < 550 ? carouselList[activeSlide].poster_path : carouselList[activeSlide].backdrop_path}`}
                    alt="logo"
                />
                <div className="w-3/4 md:w-2/5 absolute bottom-5 sm:bottom-10 left-5 sm:left-10">
                    <div
                        className="hidden sm:flex items-center justify-center whitespace-nowrap text-[8px] md:text-[10px] lg:text-xs xl:text-sm text-black uppercase bg-amber-400 h-5 px-1.5 rounded w-1/5 mb-3">
                        new year
                    </div>

                    {windowWidth < 550 ? null :
                        carouselList[activeSlide].file_path === '' ?
                            <div className="text-amber-200 text-5xl uppercase">
                                {carouselList[activeSlide].title}
                            </div>
                            :
                            <div>
                                <img
                                    className="max-h-60"
                                    src={`https://image.tmdb.org/t/p/w500${carouselList[activeSlide].file_path}`}
                                    alt="logo"
                                />
                            </div>
                    }

                    <div className="hidden md:block text-white text-sm mt-2">{carouselList[activeSlide].overview}</div>

                    <div className="flex items-center gap-2 sm:gap-6 mt-6">
                        <Link
                            to={`/list/movies/${carouselList[activeSlide].id}`}
                            className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg h-10 hover:bg-amber-500"
                        >
                            <img className="h-3.5" src={Play} alt="Play"/>
                            <div className="ml-2 text-sm">Watch</div>
                        </Link>

                        {isAuth ?
                            userFilter.map(id => id.id === carouselList[activeSlide].id ? {...id, id: id.id} : id)
                                .filter(id => id.id === carouselList[activeSlide].id).length <= 0 ?
                                <AddFavouriteButton
                                    id_movie={carouselList[activeSlide].id}
                                    backdrop_path={carouselList[activeSlide].backdrop_path}
                                    name={carouselList[activeSlide].title}
                                    genreSeparator='movies'
                                    location="h-10 rounded-lg text-sm"
                                />
                                :
                                <GoFavouriteButton location="h-10 rounded-lg text-sm"/>
                            :
                            null
                        }
                    </div>
                </div>
            </div>

            <button
                className={`${windowWidth < 550 ? 'absolute right-0 top-0 h-full z-50' : ''}`}
                onClick={() => {
                    setActiveSlide(activeSlide >= carouselList.length - 1 ? 0 : activeSlide + 1)
                }}
            >
                <img
                    className="w-6 sm:w-8 lg:w-10 xl:w-14 hover:drop-shadow-[0_4px_3px_white]"
                    src={ArrowRight}
                    alt="arrow"
                />
            </button>
        </div>
    );
};

export default MainCarousel;
