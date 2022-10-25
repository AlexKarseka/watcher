import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useCreateSerials = () => {
    const {data: page1} = useQuery('topRatedSerials', () =>
        MovieService.getTopSerials('popular', "1")
    );
    const {data: page2} = useQuery('topRatedSerials2', () =>
        MovieService.getTopSerials('popular', "2")
    );
    const {data: page3} = useQuery('topRatedSerials3', () =>
        MovieService.getTopSerials('popular', "3")
    );
    const {data: page4} = useQuery('topRatedSerials4', () =>
        MovieService.getTopSerials('popular', "4")
    );
    const {data: page5} = useQuery('topRatedSerials5', () =>
        MovieService.getTopSerials('popular', "5")
    );
    const {data: page6} = useQuery('topRatedSerials6', () =>
        MovieService.getTopSerials('popular', "6")
    );
    const {data: page7} = useQuery('topRatedSerials7', () =>
        MovieService.getTopSerials('popular', "7")
    );
    const {data: page8} = useQuery('topRatedSerials8', () =>
        MovieService.getTopSerials('popular', "8")
    );
    const {data: page9} = useQuery('topRatedSerials9', () =>
        MovieService.getTopSerials('popular', "9")
    );
    const {data: page10} = useQuery('topRatedSerials10', () =>
        MovieService.getTopSerials('popular', "10")
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

export default useCreateSerials;
