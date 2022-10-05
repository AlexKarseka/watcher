import React from "react";
import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";

import LeftLine from "./assets/Line-a.svg";
import RightLine from "./assets/Line-b.svg";

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
        </PageBase>
    )
}

export default MainPage;
