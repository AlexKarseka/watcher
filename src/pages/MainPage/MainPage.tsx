import React from "react";

import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";
import FilmsRow from "./components/FilmsRow";
import useCreateCarousel from "../../hooks/useCreateCarousel";
import useGetMainPageContent from "../../hooks/useGetMainPageContent";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";
import Line from "./assets/Line.svg";
import TopPerson from "./components/TopPerson";


const MainPage = () => {
    const carouselMovies = useCreateCarousel();

    const {nowPlaying, upcoming, popular, onTheAir, airingToday, popularTV} = useGetMainPageContent()

    if (!carouselMovies || !nowPlaying || !upcoming || !popular || !onTheAir || !airingToday || !popularTV) return null;

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
                <FilmsRow getMovies={nowPlaying} nameCategory="Watching movies now" />
                <FilmsRow getMovies={upcoming} nameCategory="New movies" />
                <FilmsRow getMovies={popular} nameCategory="Best movies of the month" />

                <div className="mt-8 mb-10 px-14">
                    <div className="flex items-center justify-between py-3.5 border-t border-b border-[#565c67]">
                        <div className="text-sm text-white">
                            Watch the best films and TV series online - Watcher
                        </div>
                        <div className="text-xs text-[#565c67]">
                            New movies and TV series in HD quality at Watcher online cinema. Watch the best TV series and films
                        </div>
                    </div>
                </div>

                <FilmsRow getMovies={onTheAir} nameCategory="Watching serials now" />
                <FilmsRow getMovies={airingToday} nameCategory="New serials" />
                <FilmsRow getMovies={popularTV} nameCategory="Best serials of the month" />

                <TopPerson />
            </div>
        </PageBase>
    )
}

export default MainPage;
