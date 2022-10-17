import React from "react";
import { useQuery } from 'react-query';

import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";
import FilmsRow from "./components/FilmsRow";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";
import Line from "./assets/Line.svg";

import MovieService from "../../services/MovieService"

const genres = ['Comedy', 'Cartoons', 'Horrors', 'Science fiction', 'Action', 'Melodramas', 'Drama', 'Detective', 'Adventure', 'Historical'];

const MainPage = () => {
    const { data } = useQuery('gameProfiles', () => MovieService.getTop(""));

    console.log(data);

    return (
        <PageBase>
            <MainCarousel />
            <div className="flex items-center justify-center my-6">
                <img className="mr-10 w-2/6" src={LeftLine} alt="leftLine" />
                <div className="uppercase text-base text-[#e7bd99]">most popular movies</div>
                <img className="ml-10 w-2/6" src={RightLine} alt="rightLine" />
            </div>
            <TopFilms />
            <img className="mt-8 mb-10" src={Line} alt="Line" />
            <div className="pb-32">
                {genres.map((genres, index) => {
                    return (
                        <FilmsRow key={index} nameCategory={genres} />
                    )
                })}
            </div>
        </PageBase>
    )
}

export default MainPage;
