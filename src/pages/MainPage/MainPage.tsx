import React from "react";

import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";
import FilmsRow from "./components/FilmsRow";
import useGetMainPageContent from "../../hooks/useGetMainPageContent";
import TopPerson from "./components/TopPerson";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";
import Line from "./assets/Line.svg";

const MainPage = () => {
    const {mainPageContent} = useGetMainPageContent()

    return (
        <PageBase footerBg>
            <MainCarousel />

            <div className="flex items-center justify-center my-6">
                <img className="hidden sm:block mr-6 lg:mr-10 w-2/6" src={LeftLine} alt="leftLine"/>
                <div className="uppercase text-lg sm:text-[10px] md:text-[13px] lg:text-base text-[#e7bd99]">All Harry Potter episodes</div>
                <img className="hidden sm:block ml-6 lg:ml-10 w-2/6" src={RightLine} alt="rightLine"/>
            </div>

            <TopFilms/>

            <img className="mt-8 mb-10 w-full" src={Line} alt="Line"/>

            <div className="pb-11">
                <FilmsRow getMovies={mainPageContent.nowPlaying} nameCategory="Watching movies now" />
                <FilmsRow getMovies={mainPageContent.upcoming} nameCategory="New movies" />
                <FilmsRow getMovies={mainPageContent.popular} nameCategory="Best movies of the month" />

                <div className="mt-8 mb-10 px-4 sm:px-14">
                    <div className="flex items-center justify-between py-3.5 border-t border-b border-[#565c67]">
                        <div className="text-[7px] sm:text-sm text-white">
                            Watch the best films and TV series online - Watcher
                        </div>
                        <div className="text-[7px] sm:text-xs text-[#565c67]">
                            New movies and TV series in HD quality at Watcher online cinema. Watch the best TV series and films
                        </div>
                    </div>
                </div>

                <FilmsRow getMovies={mainPageContent.onTheAir} nameCategory="Watching serials now" />
                <FilmsRow getMovies={mainPageContent.airingToday} nameCategory="New serials" />
                <FilmsRow getMovies={mainPageContent.popularTV} nameCategory="Best serials of the month" />

                <TopPerson />
            </div>
        </PageBase>
    )
}

export default MainPage;
