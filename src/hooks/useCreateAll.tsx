import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useCreateAll = () => {
    const {data: page1} = useQuery('popularMovies', () =>
        MovieService.getTopMovies('popular', "1")
    );
    const {data: page2} = useQuery('popularMovies2', () =>
        MovieService.getTopMovies('popular', "2")
    );
    const {data: page3} = useQuery('popularMovies3', () =>
        MovieService.getTopMovies('popular', "3")
    );
    const {data: page4} = useQuery('popularMovies4', () =>
        MovieService.getTopMovies('popular', "4")
    );
    const {data: page5} = useQuery('popularMovies5', () =>
        MovieService.getTopMovies('popular', "5")
    );
    const {data: page6} = useQuery('popularMovies6', () =>
        MovieService.getTopMovies('popular', "6")
    );
    const {data: page7} = useQuery('popularMovies7', () =>
        MovieService.getTopMovies('popular', "7")
    );
    const {data: page8} = useQuery('popularMovies8', () =>
        MovieService.getTopMovies('popular', "8")
    );
    const {data: page9} = useQuery('popularMovies9', () =>
        MovieService.getTopMovies('popular', "9")
    );
    const {data: page10} = useQuery('popularMovies10', () =>
        MovieService.getTopMovies('popular', "10")
    );
    const {data: page11} = useQuery('popularSerials1', () =>
        MovieService.getTopSerials('popular', "1")
    );
    const {data: page12} = useQuery('popularSerials2', () =>
        MovieService.getTopSerials('popular', "2")
    );
    const {data: page13} = useQuery('popularSerials3', () =>
        MovieService.getTopSerials('popular', "3")
    );
    const {data: page14} = useQuery('popularSerials4', () =>
        MovieService.getTopSerials('popular', "4")
    );
    const {data: page15} = useQuery('popularSerials5', () =>
        MovieService.getTopSerials('popular', "5")
    );
    const {data: page16} = useQuery('popularSerials6', () =>
        MovieService.getTopSerials('popular', "6")
    );
    const {data: page17} = useQuery('popularSerials7', () =>
        MovieService.getTopSerials('popular', "7")
    );
    const {data: page18} = useQuery('popularSerials8', () =>
        MovieService.getTopSerials('popular', "8")
    );
    const {data: page19} = useQuery('popularSerials9', () =>
        MovieService.getTopSerials('popular', "9")
    );
    const {data: page20} = useQuery('popularSerials10', () =>
        MovieService.getTopSerials('popular', "10")
    );

    if (!page1 ||
        !page2 ||
        !page3 ||
        !page4 ||
        !page5 ||
        !page6 ||
        !page7 ||
        !page8 ||
        !page9 ||
        !page10 ||
        !page11 ||
        !page12 ||
        !page13 ||
        !page14 ||
        !page15 ||
        !page16 ||
        !page17 ||
        !page18 ||
        !page19 ||
        !page20
    ) return null;

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
        ...page11.results,
        ...page12.results,
        ...page13.results,
        ...page14.results,
        ...page15.results,
        ...page16.results,
        ...page17.results,
        ...page18.results,
        ...page19.results,
        ...page20.results,
    ];

    return bigArray;
}

export default useCreateAll;
