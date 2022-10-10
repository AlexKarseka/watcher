import React from 'react';
import {IForTestList} from "../../models";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";

const forTestList: Array<IForTestList> = [
    {
        id: 1,
        image: "https://images.kinorium.com/movie/poster/195927/w1500_50263483.jpg",
        nameFilm: 'Harry Potter and the Sorcerer\'s Stone',
        rating: 8.2,
        limits: "12+",
        genres: "Adventure",
        description: "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс.",
    },
    {
        id: 2,
        image: "https://cs10.pikabu.ru/post_img/2019/08/30/11/1567192276196750703.jpg",
        nameFilm: 'Harry Potter and the Chamber of Secrets',
        rating: 8.1,
        limits: "12+",
        genres: "Adventure",
        description: "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу.",
    },
    {
        id: 3,
        image: "https://www.kinofilms.ua/images/media/2020/11/18/1.jpg",
        nameFilm: 'Harry Potter and the Prisoner of Azkaban',
        rating: 8.2,
        limits: "12+",
        genres: "Adventure",
        description: "В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...",
    },
    {
        id: 4,
        image: "https://shkolazhizni.ru/img/content/i217/217389_intext.jpg",
        nameFilm: 'Harry Potter and the Goblet of Fire',
        rating: 7.9,
        limits: "16+",
        genres: "Adventure",
        description: "Гарри Поттер, Рон и Гермиона возвращаются на четвёртый курс школы чародейства и волшебства Хогвартс. При таинственных обстоятельствах Гарри был отобран в число участников опасного соревнования — Турнира Трёх Волшебников, однако проблема в том, что все его соперники — намного старше и сильнее.",
    },
    {
        id: 5,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5f3fef90-4e22-440b-9bdb-656835fae445/1920x",
        nameFilm: 'Harry Potter and the Order of the Phoenix',
        rating: 7.8,
        limits: "12+",
        genres: "Adventure",
        description: "Гарри проводит свой пятый год в школе Хогвартс и обнаруживает, что многие из членов волшебного сообщества отрицают факт недавнего состязания юного волшебника с воплощением вселенского зла Волдемортом. Все делают вид, что не имеют ни малейшего представления о том, что злодей вернулся. Однако впереди волшебников ждет необычная схватка.",
    },
    {
        id: 6,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d5459129-ab94-4c9b-aa9b-c30184cafaf0/1920x",
        nameFilm: 'Harry Potter and the Half-Blood Prince',
        rating: 7.8,
        limits: "12+",
        genres: "Adventure",
        description: "Теперь не только мир волшебников, но и мир маглов ощущает на себе всевозрастающую силу Волан-де-Морта, а Хогвартс уже никак не назовешь надежным убежищем, каким он был раньше. Гарри подозревает, что в самом замке затаилась некая опасность, но Дамблдор больше сосредоточен на том, чтобы подготовить его к финальной схватке, которая, как он знает, уже не за горами.",
    },
    {
        id: 7,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8c9668c6-876e-4710-a3b3-a4a0a21a0887/1920x",
        nameFilm: 'Harry Potter and the Deathly Hallows: Part 1',
        rating: 7.9,
        limits: "16+",
        genres: "Adventure",
        description: "Гарри Поттера ждёт самое страшное испытание в жизни — смертельная схватка с Волан-де-Мортом. Ждать помощи не от кого — Гарри одинок, как никогда… Друзья и враги Гарри предстают в совершенно неожиданном свете. Граница между Добром и Злом становится всё призрачнее…",
    },
    {
        id: 8,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f3a9f4b6-de82-40ce-b1ed-daa3829a04f3/1920x",
        nameFilm: 'Harry Potter and the Deathly Hallows: Part 2',
        rating: 8.1,
        limits: "12+",
        genres: "Adventure",
        description: "В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища — столь сложен. И, быть может, именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом.",
    },

]


const FilmsPage = () => {
    return (
        <PageBase>
            <HeaderPage nameCategory="movies" />
            <MenuSettings />
            <FirstCardVersion content={forTestList} />
        </PageBase>
    );
};

export default FilmsPage;
