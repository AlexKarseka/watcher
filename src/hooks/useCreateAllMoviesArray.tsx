import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useCreateAllMoviesArray = (grading: string) => {
    const {data: page1} = useQuery('popularMovies', () =>
        MovieService.getTop(grading, "1")
    );
    const {data: page2} = useQuery('popularMovies2', () =>
        MovieService.getTop(grading, "2")
    );
    const {data: page3} = useQuery('popularMovies3', () =>
        MovieService.getTop(grading, "3")
    );
    const {data: page4} = useQuery('popularMovies4', () =>
        MovieService.getTop(grading, "4")
    );
    const {data: page5} = useQuery('popularMovies5', () =>
        MovieService.getTop(grading, "5")
    );
    const {data: page6} = useQuery('popularMovies6', () =>
        MovieService.getTop(grading, "6")
    );
    const {data: page7} = useQuery('popularMovies7', () =>
        MovieService.getTop(grading, "7")
    );
    const {data: page8} = useQuery('popularMovies8', () =>
        MovieService.getTop(grading, "8")
    );
    const {data: page9} = useQuery('popularMovies9', () =>
        MovieService.getTop(grading, "9")
    );
    const {data: page10} = useQuery('popularMovies10', () =>
        MovieService.getTop(grading, "10")
    );
    const {data: page11} = useQuery('popularMovies11', () =>
        MovieService.getTop(grading, "11")
    );
    const {data: page12} = useQuery('popularMovies12', () =>
        MovieService.getTop(grading, "12")
    );
    const {data: page13} = useQuery('popularMovies13', () =>
        MovieService.getTop(grading, "13")
    );
    const {data: page14} = useQuery('popularMovies14', () =>
        MovieService.getTop(grading, "14")
    );
    const {data: page15} = useQuery('popularMovies15', () =>
        MovieService.getTop(grading, "15")
    );
    const {data: page16} = useQuery('popularMovies16', () =>
        MovieService.getTop(grading, "16")
    );
    const {data: page17} = useQuery('popularMovies17', () =>
        MovieService.getTop(grading, "17")
    );
    const {data: page18} = useQuery('popularMovies18', () =>
        MovieService.getTop(grading, "18")
    );
    const {data: page19} = useQuery('popularMovies19', () =>
        MovieService.getTop(grading, "19")
    );
    const {data: page20} = useQuery('popularMovies20', () =>
        MovieService.getTop(grading, "20")
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

export default useCreateAllMoviesArray;
