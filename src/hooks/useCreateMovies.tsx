import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useCreateMovies = () => {
    const {data: page1} = useQuery('topRatedMovies', () =>
        MovieService.getTopMovies('popular', "1")
    );
    const {data: page2} = useQuery('topRatedMovies2', () =>
        MovieService.getTopMovies('popular', "2")
    );
    const {data: page3} = useQuery('topRatedMovies3', () =>
        MovieService.getTopMovies('popular', "3")
    );
    const {data: page4} = useQuery('topRatedMovies4', () =>
        MovieService.getTopMovies('popular', "4")
    );
    const {data: page5} = useQuery('topRatedMovies5', () =>
        MovieService.getTopMovies('popular', "5")
    );
    const {data: page6} = useQuery('topRatedMovies6', () =>
        MovieService.getTopMovies('popular', "6")
    );
    const {data: page7} = useQuery('topRatedMovies7', () =>
        MovieService.getTopMovies('popular', "7")
    );
    const {data: page8} = useQuery('topRatedMovies8', () =>
        MovieService.getTopMovies('popular', "8")
    );
    const {data: page9} = useQuery('topRatedMovies9', () =>
        MovieService.getTopMovies('popular', "9")
    );
    const {data: page10} = useQuery('topRatedMovies10', () =>
        MovieService.getTopMovies('popular', "10")
    );

    if (!page1 || !page2 || !page3 || !page4 || !page5 || !page6 || !page7 || !page8 || !page9 || !page10)
        return null;

    const bigArray: Array<ITopMovies> = [
        ...page1.results,
        ...page2.results,
        ...page3.results,
        ...page4.results,
        ...page5.results,
        ...page6.results,
        ...page7.results,
        ...page8.results,
        ...page9.results,
        ...page10.results,
    ];

    return bigArray;
}

export default useCreateMovies;
