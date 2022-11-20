import React from "react";
import {Link} from "react-router-dom";
import css from "../../style.module.css";

import useMainCarousel from "../../../../../hooks/useMainCarousel";
import AddFavouriteButton from "../../../../../components/AddFavouriteButton";
import GoFavouriteButton from "../../../../../components/GoFavouriteButton";
import useFavouriteData from "../../../../../hooks/useFavouriteData";

import Play from "../../../assets/Play.svg";

interface ContentMobiProps {
    windowWidth: number
}

const ContentMobi = ({windowWidth}: ContentMobiProps) => {
    const {isAuth, userFilter} = useFavouriteData();
    const carouselList = useMainCarousel();

    return (
        <nav className={`${css.scrollContainer} flex overflow-x-auto`}>
            {carouselList.map((movie) => {
                return (
                    <li key={movie.id} className="relative flex items-center justify-center shrink-0">
                        <img
                            className={`w-[${windowWidth}px] max-h-[840px]`}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt="logo"
                        />
                        <div className="w-3/4 absolute bottom-5 left-5">
                            <div className="flex items-center gap-2 mt-6">
                                <Link
                                    to={`/list/movies/${movie.id}`}
                                    className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg h-10 hover:bg-amber-500"
                                >
                                    <img className="h-3.5" src={Play} alt="Play"/>
                                    <div className="ml-2 text-sm">Watch</div>
                                </Link>

                                {isAuth ?
                                    userFilter.map(id => id.id === movie.id ? {...id, id: id.id} : id)
                                        .filter(id => id.id === movie.id).length <= 0 ?
                                        <AddFavouriteButton
                                            id_movie={movie.id}
                                            backdrop_path={movie.backdrop_path}
                                            name={movie.title}
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
                    </li>
                )
            })}
        </nav>
    );
};

export default ContentMobi;
