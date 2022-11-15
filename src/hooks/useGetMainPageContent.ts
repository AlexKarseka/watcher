import React from "react";
import { useQuery } from "react-query";
import MainPageService from "../services/MainPageService";
import { ITopMovies } from "../models";
import useClearDuplicates from "./useClearDuplicates";

const useGetMainPageContent = () => {
    const [nowPlaying, setNowPlaying] = React.useState <Array<ITopMovies>>([]);
    const [upcoming, setUpcoming] = React.useState <Array<ITopMovies>>([]);
    const [popular, setPopular] = React.useState <Array<ITopMovies>>([]);
    const [onTheAir, setOnTheAir] = React.useState <Array<ITopMovies>>([]);
    const [airingToday, setAiringToday] = React.useState <Array<ITopMovies>>([]);
    const [popularTV, setPopularTV] = React.useState <Array<ITopMovies>>([]);

    const {} = useQuery('nowPlaying', () =>
            MainPageService.getMoviesInfo('now_playing'), {
            onSuccess: ({results}) => {
                setNowPlaying(results)
            }
        }
    );

    const {} = useQuery('upcoming', () =>
            MainPageService.getMoviesInfo('upcoming'), {
            onSuccess: ({results}) => {
                setUpcoming(results)
            }
        }
    );

    const {} = useQuery('popular', () =>
            MainPageService.getMoviesInfo('popular'), {
            onSuccess: ({results}) => {
                setPopular(results)
            }
        }
    );

    const {} = useQuery('onTheAir', () =>
            MainPageService.getSerialsInfo('on_the_air'), {
            onSuccess: ({results}) => {
                setOnTheAir(results)
            }
        }
    );

    const {} = useQuery('airingToday', () =>
            MainPageService.getSerialsInfo('airing_today'), {
            onSuccess: ({results}) => {
                setAiringToday(results)
            }
        }
    );

    const {} = useQuery('popularTV', () =>
            MainPageService.getSerialsInfo('popular'), {
            onSuccess: ({results}) => {
                setPopularTV(results)
            }
        }
    );

    const nowPlayingDup = useClearDuplicates(nowPlaying);
    const upcomingDup = useClearDuplicates(upcoming);
    const popularDup = useClearDuplicates(popular);
    const onTheAirDup = useClearDuplicates(onTheAir);
    const airingTodayDup = useClearDuplicates(airingToday);
    const popularTVDup = useClearDuplicates(popularTV);

    return {
        mainPageContent: {
            nowPlaying: nowPlayingDup,
            upcoming: upcomingDup,
            popular: popularDup,
            onTheAir: onTheAirDup,
            airingToday: airingTodayDup,
            popularTV: popularTVDup
        }
    }
};

export default useGetMainPageContent;
