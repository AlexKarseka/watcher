import React from "react";
import PageBase from "../PageBase/PageBase";
import MainCarousel from "./components/MainCarousel";

const forTest = [
    {image: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHRR9tfaxryx8R_fpqXGXdRLjd1PBxgFKWBFOfhgs&s'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zLf5cJNoiWDsTIpcOkVuDwdVmiXNkSahw7nMJ9Dqjw&s'},
    {image: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScNhourL-NEEPP9KgMadS1h-TnRbpPNbYNQPsj6Og&s'},
]

const MainPage = () => {
    return (
        <PageBase>
            <MainCarousel sliderData={forTest}/>
        </PageBase>
    )
}

export default MainPage;
