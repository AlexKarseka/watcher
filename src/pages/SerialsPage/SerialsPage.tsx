import React from "react";
import {IForTestList} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";

const forTestList: Array<IForTestList> = [
    {
        id: 1,
        year: 2010,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/49/Game_of_Thrones.jpg/262px-Game_of_Thrones.jpg",
        nameFilm: 'Game of tron 01',
        rating: 9.8,
        limits: "18+",
        genres: "Horrors",
        description: "Внезапная гибель Роберта Баратеона, правителя Семи Королевств, рушит хрупкий мир между разными кланами и обнажает старые раны, погружая Вестерос в пучину жестокости и закручивая клубок политических интриг во вселенной «Игры престолов». Кто займет опустевший престол? Главный советник покойного короля, Нед Старк из благородного дома Старков? Или семейство Ланнистеров во главе с коварной вдовой Баратеона, Серсеей?",
    },
    {
        id: 2,
        year: 2011,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/Game_of_Thrones_2.jpg/270px-Game_of_Thrones_2.jpg",
        nameFilm: 'Game of tron 02',
        rating: 8.8,
        limits: "18+",
        genres: "Horrors",
        description: "Второй сезон «Игры престолов» показывает осень в Вестеросе. Неспокойное время года, предвестник долгой и страшной зимы, когда Белые Ходоки должны пробудиться ото сна и пойти войной на жителей континента. Но тем, кто мечтает занять Железный трон Семи Королевств, не до Стены с ее мифическими защитниками. О своем праве на власть заявили два брата умершего короля Баратеона, и теперь претендентов на звание правителя",
    },
    {
        id: 3,
        year: 2012,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/Game_of_Thrones_3.jpg/270px-Game_of_Thrones_3.jpg",
        nameFilm: 'Game of tron 03',
        rating: 9.8,
        limits: "18+",
        genres: "Horrors",
        description: "Судьба Вестероса переменчива: вчерашние единомышленники становятся врагами и обнажают клинки. Получив всю возможную выгоду от сотрудничества, теперь они готовы выступить друг против друга. Заключенные в попытке сохранить худой мир союзы утратили силу, и в гуще событий, помимо Баратеонов, Ланнистеров и Старков, оказываются Фреи, Тиреллы и Грейджои. Вместе с этим неожиданные потери после знакомства с",
    },
    {
        id: 4,
        year: 2013,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Game_of_Thrones_4.jpg/270px-Game_of_Thrones_4.jpg",
        nameFilm: 'Game of tron 04',
        rating: 8.8,
        limits: "18+",
        genres: "Horrors",
        description: "Драконы подросли и готовы воплощать в жизнь масштабные планы своей Матери. Ведомая своим желанием восстановить справедливость и отомстить за практически истребленный род Таргариенов, Дейенерис прокладывает путь к трону. Но не всем ее задумкам суждено сбываться. Тирион становится объектом масштабного преследования и рискует как никогда прежде.",
    },
    {
        id: 5,
        year: 2014,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2a/Game_of_Thrones_5.jpg/270px-Game_of_Thrones_5.jpg",
        nameFilm: 'Game of tron 05',
        rating: 5.8,
        limits: "18+",
        genres: "Horrors",
        description: "Этот сезон «Игры престолов» — рекордный по количеству премий «Эмми», выигранных одним сериалом за год: всего он получил 12 статуэток из 24 номинаций. И неудивительно, ведь экшна с каждым эпизодом становится только больше! Дружба между Ланнистерами, переживающими потерю Тайвина, и их недавними союзниками Тиреллами вот-вот закончится.",
    },
    {
        id: 6,
        year: 2015,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/GoT_season_6_official_poster.jpg/270px-GoT_season_6_official_poster.jpg",
        nameFilm: 'Game of tron 06',
        rating: 9.8,
        limits: "18+",
        genres: "Horrors",
        description: "Загадка: ни живой ни мертвый — кто такой? Правильно, Джон Сноу. Вокруг этого сезона «Игры престолов» прогнозы, планы и целые конспирологические теории строились фанатами еще задолго до премьеры. За время существования сериала создатели научились изощренно дразнить зрителей: то внезапным тизером, то «утечкой» со съемочной площадки, то целой коллекцией постеров с персонажами-мертвецами. ",
    },
    {
        id: 7,
        year: 2016,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/04/Game_of_Thrones_Season_7.jpg/269px-Game_of_Thrones_Season_7.jpg",
        nameFilm: 'Game of tron 07',
        rating: 6.8,
        limits: "18+",
        genres: "Horrors",
        description: "Укороченный (семь вместо традиционных десяти серий) и предпоследний сезон «Игры престолов» приближает грандиозную фэнтези-сагу к завершению. Но ключевые участники кровавой гонки за трон не собираются сдаваться. К битве готовы все: идущая по стопам Безумного Короля Серсея, Король Ночи с армией Ходоков, восставший из небытия новоявленный король Джон Сноу и, конечно, Дейенерис со своими драконами и внушительным полчищем солдат. Вестерос на пороге Великой войны.",
    },
    {
        id: 8,
        year: 2017,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f6/GOT8_poster.jpg/274px-GOT8_poster.jpg",
        nameFilm: 'Game of tron 08',
        rating: 7.8,
        limits: "18+",
        genres: "Horrors",
        description: "Шесть эпизодов эпического финала фэнтези-драмы. Затянувшееся ожидание восьмого сезона создатели «Игры престолов» искупили грандиозными съемками и шокирующими сценарными твистами. Это самый дорогой — под 100 миллионов долларов — сезон в истории саги, в котором каждая из шести серий фактически длится как полноценный полнометражный фильм. ",
    },

]

const SerialsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);
    return (
        <PageBase>
            <HeaderPage nameCategory="serials" />
            <MenuSettings styleCard={(card) => {setListStyle(card)}} />
            <div className="pb-32">
                {listStyle ?
                    <FirstCardVersion content={forTestList} />
                    :
                    <SecondCardVersion content={forTestList} />
                }
            </div>
        </PageBase>
    );
};

export default SerialsPage;
