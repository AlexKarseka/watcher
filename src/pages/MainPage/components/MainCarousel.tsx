import React from "react";
import { Link } from "react-router-dom";

import AddFavouriteButton from "../../../components/AddFavouriteButton";
import GoFavouriteButton from "../../../components/GoFavouriteButton";
import useFavouriteData from "../../../hooks/useFavouriteData";
import useMainCarousel from "../../../hooks/useMainCarousel";

import ArrowLeft from "../../../assets/left.svg";
import ArrowRight from "../../../assets/right.svg";
import Play from "../assets/Play.svg";

const MainCarousel = () => {
    const {isAuth, userFilter} = useFavouriteData();
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    const carouselList = useMainCarousel();

    return (
        <div className="flex items-center -mt-20">
            <button
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? carouselList.length - 1 : activeSlide - 1)
                }}
            >
                <img className="w-14 hover:drop-shadow-[0_4px_3px_white]" src={ArrowLeft} alt="arrow"/>
            </button>

            <div className="relative w-full">
                <img
                    className="w-full h-[580px] rounded-b-2xl"
                    src={`https://image.tmdb.org/t/p/original${carouselList[activeSlide].backdrop_path}`}
                    alt="logo"
                />
                <div className="w-2/5 absolute bottom-10 left-10">
                    <div
                        className="flex items-center justify-center text-sm text-black uppercase bg-amber-400 h-5 px-1.5 rounded w-1/5 mb-3"
                    >
                        new year
                    </div>
                    {carouselList[activeSlide].file_path === '' ?
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

                    <div className="text-white text-sm mt-2">{carouselList[activeSlide].overview}</div>

                    <div className="flex items-center gap-6 mt-6">
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
                                <GoFavouriteButton location="h-10 rounded-lg text-sm" />
                            :
                            null
                        }
                    </div>

                </div>
            </div>

            <button
                onClick={() => {
                    setActiveSlide(activeSlide >= carouselList.length - 1 ? 0 : activeSlide + 1)
                }}
            >
                <img className="w-14 hover:drop-shadow-[0_4px_3px_white]" src={ArrowRight} alt="arrow"/>
            </button>
        </div>
    );
};

export default MainCarousel;
