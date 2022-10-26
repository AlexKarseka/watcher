import React from "react";
import {useQuery} from "react-query";
import MainPageService from "../services/MainPageService";

const useGetMainPageContent = () => {
    const {data: nowPlaying} = useQuery('nowPlaying', () =>
        MainPageService.getMoviesInfo('now_playing')
    );

    const {data: upcoming} = useQuery('upcoming', () =>
        MainPageService.getMoviesInfo('upcoming')
    );

    const {data: popular} = useQuery('popular', () =>
        MainPageService.getMoviesInfo('popular')
    );

    const {data: onTheAir} = useQuery('onTheAir', () =>
        MainPageService.getSerialsInfo('on_the_air')
    );

    const {data: airingToday} = useQuery('airingToday', () =>
        MainPageService.getSerialsInfo('airing_today')
    );

    const {data: popularTV} = useQuery('popularTV', () =>
        MainPageService.getSerialsInfo('popular')
    );

    return {
        nowPlaying,
        upcoming,
        popular,
        onTheAir,
        airingToday,
        popularTV
    }
};

export default useGetMainPageContent;
