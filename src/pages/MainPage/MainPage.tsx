import React from "react";
import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";
import TopFilms from "./components/TopFilms";

const MainPage = () => {
    return (
        <PageBase>
            <MainCarousel />
            <TopFilms />
        </PageBase>
    )
}

export default MainPage;
