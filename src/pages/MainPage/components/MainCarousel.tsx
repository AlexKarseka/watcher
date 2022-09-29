import React from "react";
import {IFroTest} from "../../../models";

const forTest: Array<IFroTest> = [
    {
        image: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
        altNumber: "1",
        nameFilm: 'HaryPotter',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHRR9tfaxryx8R_fpqXGXdRLjd1PBxgFKWBFOfhgs&s',
        altNumber: "2",
        nameFilm: 'Honki',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zLf5cJNoiWDsTIpcOkVuDwdVmiXNkSahw7nMJ9Dqjw&s',
        altNumber: "3",
        nameFilm: 'Godila',
    },
    {
        image: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
        altNumber: "4",
        nameFilm: 'Mudila',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScNhourL-NEEPP9KgMadS1h-TnRbpPNbYNQPsj6Og&s',
        altNumber: "5",
        nameFilm: 'Ololo',
    },
]

const MainCarousel = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);

    return (
        <div>
            <button onClick={() => {setActiveSlide(activeSlide <= 0 ? forTest.length - 1 : activeSlide -1)}}>{"<"}</button>
            <img src={forTest[activeSlide].image} alt={forTest[activeSlide].altNumber} width={600} height={300}/>
            <button onClick={() => {setActiveSlide(activeSlide >= forTest.length -1 ? 0 : activeSlide +1)}}>{">"}</button>
        </div>
    );
};

export default MainCarousel;
