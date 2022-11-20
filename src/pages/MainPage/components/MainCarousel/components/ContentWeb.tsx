import React from "react";
import {Link} from "react-router-dom";
import Play from "../../../assets/Play.svg";

import useMainCarousel from "../../../../../hooks/useMainCarousel";
import useFavouriteData from "../../../../../hooks/useFavouriteData";
import AddFavouriteButton from "../../../../../components/AddFavouriteButton";
import GoFavouriteButton from "../../../../../components/GoFavouriteButton";

interface ContentWebProps {
    activeSlide: number
}

const ContentWeb = ({activeSlide}: ContentWebProps) => {
    const {isAuth, userFilter} = useFavouriteData();
    const carouselList = useMainCarousel();

    return (
        <div className="relative w-full">
            <img
                className="w-full xl:h-[580px] rounded-b-2xl"
                src={`https://image.tmdb.org/t/p/original${carouselList[activeSlide].backdrop_path}`}
                alt="logo"
            />
            <div className="w-2/5 absolute bottom-10 left-10">
                <div
                    className="flex items-center justify-center whitespace-nowrap text-[10px] lg:text-xs xl:text-sm text-black uppercase bg-amber-400 h-5 px-1.5 rounded w-1/5 mb-3"
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

                <div
                    className="hidden md:block text-white text-sm mt-2">{carouselList[activeSlide].overview}</div>

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
                            <GoFavouriteButton location="h-10 rounded-lg text-sm"/>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
};

export default ContentWeb;
