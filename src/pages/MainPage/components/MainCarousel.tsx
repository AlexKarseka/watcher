import React from "react";
import {IFroTest} from "../../../models";

import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowRight from '../assets/ArrowRight.svg';


const forTest: Array<IFroTest> = [
    {
        image: 'https://images.kinorium.com/movie/poster/195927/w1500_50263483.jpg',
        altNumber: "1",
        nameFilm: 'Гарри Поттер и Филосовский Камень',
    },
    {
        image: 'https://cs10.pikabu.ru/post_img/2019/08/30/11/1567192276196750703.jpg',
        altNumber: "2",
        nameFilm: 'Гарри Поттер и Тайная комната',
    },
    {
        image: 'https://www.kinofilms.ua/images/media/2020/11/18/1.jpg',
        altNumber: "3",
        nameFilm: 'Гарри Поттер и Узник Азкабана',
    },
    {
        image: 'https://shkolazhizni.ru/img/content/i217/217389_intext.jpg',
        altNumber: "4",
        nameFilm: 'Гарри Поттер и Кубок огня',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5f3fef90-4e22-440b-9bdb-656835fae445/1920x',
        altNumber: "5",
        nameFilm: 'Гарри Поттер и Орден Феникса',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d5459129-ab94-4c9b-aa9b-c30184cafaf0/1920x',
        altNumber: "5",
        nameFilm: 'Гарри Поттер и Принц Полукровка',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8c9668c6-876e-4710-a3b3-a4a0a21a0887/1920x',
        altNumber: "5",
        nameFilm: 'Гарри Поттер и Дары Смерти 1',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f3a9f4b6-de82-40ce-b1ed-daa3829a04f3/1920x',
        altNumber: "5",
        nameFilm: 'Гарри Поттер и Орден Феникса',
    },
]

const MainCarousel = () => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    return (
        <div className="flex items-center">
            <button
                className="text-white text-4xl px-2"
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? forTest.length - 1 : activeSlide -1)
                }}
            >
                <img className="w-20 hover:drop-shadow-[0_4px_3px_white]" src={ArrowLeft} alt="arrow" />
            </button>
            <div className="relative w-full">
                <img
                    className="w-full h-[500px] rounded-2xl"
                    src={forTest[activeSlide].image}
                    alt={forTest[activeSlide].altNumber} />
                {/*<div*/}
                {/*    className="absolute uppercase text-5xl font-bold text-white bottom-10 left-10"*/}
                {/*>{forTest[activeSlide].nameFilm}*/}
                {/*</div>*/}
            </div>

            <button
                className="text-white text-4xl px-2"
                onClick={() => {
                    setActiveSlide(activeSlide >= forTest.length -1 ? 0 : activeSlide +1)
                }}
            >
                <img className="w-20 hover:drop-shadow-[0_4px_3px_white]" src={ArrowRight} alt="arrow" />
            </button>
        </div>
    );
};

export default MainCarousel;
