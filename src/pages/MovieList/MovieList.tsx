import React from "react";
import {Link} from "react-router-dom";
import {IForTestList, IForTestListMovie} from "../../models";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";

const forTestListMovie: Array<IForTestListMovie> = [
    {
        id: 1,
        year: 2019,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ed2fbb6e-c8ad-4bca-9bda-6884aac37779/1920x",
        nameFilm: "Avengers: Endgame",
        rating: 8.2,
        limits: "18+",
        genres: "Fantastic",
        description: "Грандиозное завершение супергеройской франшизы. «Мстители: Финал» ставит жирную точку в многолетней истории главных защитников человечества. Оставшиеся в живых члены команды по регулярному спасению мира и их союзники разрабатывают новый план против Таноса. У Мстителей нет права на ошибку: слишком многое поставлено на карту. Более того, им придется сразиться с призраками прошлого, разобраться в личных проблемах и отпустить многие обиды. В 2019 году фильм довольно быстро установил мировой рекорд и вошел в список самых кассовых кинолент в истории.",
        type: "movies",
        country: "USA",
        studios: "Marvel Studios",
        budget: 356000000,
        fees: 2797800564,
        duration: 182,
    }
]
const forTestList: Array<IForTestList> = [
    {
        id: 1,
        year: 2001,
        image: "https://images.kinorium.com/movie/poster/195927/w1500_50263483.jpg",
        nameFilm: 'Harry Potter and the Sorcerer\'s Stone',
        rating: 8.2,
        limits: "12+",
        genres: "Adventure",
        description: "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс.",
    },
    {
        id: 2,
        year: 2002,
        image: "https://cs10.pikabu.ru/post_img/2019/08/30/11/1567192276196750703.jpg",
        nameFilm: 'Harry Potter and the Chamber of Secrets',
        rating: 8.1,
        limits: "12+",
        genres: "Adventure",
        description: "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу.",
    },
    {
        id: 3,
        year: 2003,
        image: "https://www.kinofilms.ua/images/media/2020/11/18/1.jpg",
        nameFilm: 'Harry Potter and the Prisoner of Azkaban',
        rating: 8.2,
        limits: "12+",
        genres: "Adventure",
        description: "В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...",
    },
    {
        id: 4,
        year: 2004,
        image: "https://shkolazhizni.ru/img/content/i217/217389_intext.jpg",
        nameFilm: 'Harry Potter and the Goblet of Fire',
        rating: 7.9,
        limits: "16+",
        genres: "Adventure",
        description: "Гарри Поттер, Рон и Гермиона возвращаются на четвёртый курс школы чародейства и волшебства Хогвартс. При таинственных обстоятельствах Гарри был отобран в число участников опасного соревнования — Турнира Трёх Волшебников, однако проблема в том, что все его соперники — намного старше и сильнее.",
    },
    {
        id: 5,
        year: 2005,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/5f3fef90-4e22-440b-9bdb-656835fae445/1920x",
        nameFilm: 'Harry Potter and the Order of the Phoenix',
        rating: 7.8,
        limits: "12+",
        genres: "Adventure",
        description: "Гарри проводит свой пятый год в школе Хогвартс и обнаруживает, что многие из членов волшебного сообщества отрицают факт недавнего состязания юного волшебника с воплощением вселенского зла Волдемортом. Все делают вид, что не имеют ни малейшего представления о том, что злодей вернулся. Однако впереди волшебников ждет необычная схватка.",
    },
    {
        id: 6,
        year: 2006,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d5459129-ab94-4c9b-aa9b-c30184cafaf0/1920x",
        nameFilm: 'Harry Potter and the Half-Blood Prince',
        rating: 7.8,
        limits: "12+",
        genres: "Adventure",
        description: "Теперь не только мир волшебников, но и мир маглов ощущает на себе всевозрастающую силу Волан-де-Морта, а Хогвартс уже никак не назовешь надежным убежищем, каким он был раньше. Гарри подозревает, что в самом замке затаилась некая опасность, но Дамблдор больше сосредоточен на том, чтобы подготовить его к финальной схватке, которая, как он знает, уже не за горами.",
    },
    {
        id: 7,
        year: 2010,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8c9668c6-876e-4710-a3b3-a4a0a21a0887/1920x",
        nameFilm: 'Harry Potter and the Deathly Hallows: Part 1',
        rating: 7.9,
        limits: "16+",
        genres: "Adventure",
        description: "Гарри Поттера ждёт самое страшное испытание в жизни — смертельная схватка с Волан-де-Мортом. Ждать помощи не от кого — Гарри одинок, как никогда… Друзья и враги Гарри предстают в совершенно неожиданном свете. Граница между Добром и Злом становится всё призрачнее…",
    },
    {
        id: 8,
        year: 2012,
        image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f3a9f4b6-de82-40ce-b1ed-daa3829a04f3/1920x",
        nameFilm: 'Harry Potter and the Deathly Hallows: Part 2',
        rating: 8.1,
        limits: "12+",
        genres: "Adventure",
        description: "В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища — столь сложен. И, быть может, именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом.",
    },

]


const MovieList = () => {
    return (
        <PageBase>
            {forTestListMovie.map((movie) => {
                return (
                    <div key={movie.id} className="relative px-14 pt-56 pb-16">
                        <img className="absolute -top-20 left-0 opacity-20" src={movie.image} alt="bg" />
                        <div className="relative z-20 flex text-sm mb-2 text-[#565c67] capitalize">
                            <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                            <Link className="mr-1 hover:text-[#868fa0]" to={movie.type}>/ {movie.type} </Link>
                            <div>/ {movie.nameFilm}</div>
                        </div>
                        <div className="relative z-20 flex gap-20">
                            <div className="w-2/4">
                                <div className="text-lg text-white opacity-80 mb-6">
                                    {movie.nameFilm}
                                </div>
                                <div className="flex gap-6">
                                    <a
                                        href="https://ru.wikipedia.org/wiki/%D0%9C%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8:_%D0%A4%D0%B8%D0%BD%D0%B0%D0%BB"
                                        className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg mb-8 h-10 hover:bg-amber-500"
                                    >
                                        <div className="ml-2 text-base text-black">Go to the film page</div>
                                    </a>

                                    <button
                                        className="w-2/4 flex items-center justify-center bg-gray-700 rounded-lg mb-8 h-10 hover:bg-gray-800"
                                    >
                                        <div className="ml-2 text-base text-white">Add to favourites</div>
                                    </button>
                                </div>
                                <div className="flex items-center gap-6 mb-6">
                                    <div
                                        className={`${movie.rating <= 7 ? "text-red-600" : "text-green-500"} border border-[#565c67] rounded px-3 py-1`}
                                    >
                                        {movie.rating}
                                    </div>
                                    <div className="text-lg text-[#565c67]">
                                        {movie.country}
                                    </div>
                                    <div className="text-lg text-[#565c67]">
                                        {movie.year}
                                    </div>
                                    <div className="text-lg text-[#565c67]">
                                        {movie.limits}
                                    </div>
                                    <div className="text-lg text-[#565c67]">
                                        {movie.genres}
                                    </div>
                                </div>
                                <div className="text-white text-sm leading-4">{movie.description}</div>
                            </div>
                            <div>
                                <div className="text-3xl text-[#565c67] mt-14 mb-[86px]">
                                    {movie.nameFilm}
                                </div>
                                <div className="flex items-center mb-1.5 text-sm">
                                    <div className="w-32 text-[#565c67]">Studio:</div>
                                    <div className="text-white">{movie.studios}</div>
                                </div>
                                <div className="flex items-center mb-1.5 text-sm">
                                    <div className="w-32 text-[#565c67]">Budget:</div>
                                    <div className="text-white">$ {movie.budget}</div>
                                </div>
                                <div className="flex items-center mb-1.5 text-sm">
                                    <div className="w-32 text-[#565c67]">Fees:</div>
                                    <div className="text-white">$ {movie.fees}</div>
                                </div>
                                <div className="flex items-center mb-1.5 text-sm">
                                    <div className="w-32 text-[#565c67]">Duration:</div>
                                    <div className="text-white">{movie.duration} min</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="pb-32">
                <div className="px-14 mb-2.5 text-white text-xl">You may be interested</div>
                <SecondCardVersion content={forTestList} year={false}/>
            </div>
        </PageBase>
    );
};

export default MovieList;
