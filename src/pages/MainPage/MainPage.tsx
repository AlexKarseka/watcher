import React from "react";
import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";
import FilmsRow from "./components/FilmsRow";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";
import Line from "./assets/Line.svg";

const genres = ['Comedy', 'Cartoons', 'Horrors', 'Science fiction', 'Action', 'Melodramas', 'Drama', 'Detective', 'Adventure', 'Historical'];

const MainPage = () => {
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

            {genres.map((genres) => {
                return (
                    <FilmsRow nameCategory={genres} />
                )
            })}
        </PageBase>
    )
}

export default MainPage;
