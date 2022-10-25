import React from "react";
import {useQuery} from "react-query";
import MovieService from "../../services/MovieService";
import {IGenresList, ITopMovies} from "../../models";

import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";
import FilmsRow from "./components/FilmsRow";
import useCreateAll from "../../hooks/useCreateAll";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";
import Line from "./assets/Line.svg";
import useCreateCarousel from "../../hooks/useCreateCarousel";

const MainPage = () => {
    const {data} = useQuery('genres', () => MovieService.getGenres());

    const carouselMovies = useCreateCarousel();

    // const getMovies = useCreateAll();
    const getMovies: any = [];

    if (!data || !carouselMovies) return null;

    const genres: Array<IGenresList> = data.genres;

    return (
        <PageBase>
            <MainCarousel carouselMovies={carouselMovies} />

            <div className="flex items-center justify-center my-6">
                <img className="mr-10 w-2/6" src={LeftLine} alt="leftLine"/>
                <div className="uppercase text-base text-[#e7bd99]">most popular movies</div>
                <img className="ml-10 w-2/6" src={RightLine} alt="rightLine"/>
            </div>

            <TopFilms/>

            <img className="mt-8 mb-10" src={Line} alt="Line"/>

            <div className="pb-24">
                {genres.map((genres) => {
                    return (
                        <FilmsRow
                            key={genres.id}
                            id={genres.id}
                            getMovies={getMovies}
                            nameCategory={genres.name}
                        />
                    )
                })}
            </div>
        </PageBase>
    )
}

export default MainPage;
