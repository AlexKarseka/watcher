import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useCreateMovies = () => {
    const {data: page1} = useQuery('topRatedMovies', () =>
        MovieService.getTop('popular', 'movie',"1")
    );
    const {data: page2} = useQuery('topRatedMovies2', () =>
        MovieService.getTop('popular', 'movie',"2")
    );
    const {data: page3} = useQuery('topRatedMovies3', () =>
        MovieService.getTop('popular', 'movie',"3")
    );
    const {data: page4} = useQuery('topRatedMovies4', () =>
        MovieService.getTop('popular', 'movie',"4")
    );
    const {data: page5} = useQuery('topRatedMovies5', () =>
        MovieService.getTop('popular', 'movie',"5")
    );
    const {data: page6} = useQuery('topRatedMovies6', () =>
        MovieService.getTop('popular', 'movie',"6")
    );
    const {data: page7} = useQuery('topRatedMovies7', () =>
        MovieService.getTop('popular', 'movie',"7")
    );
    const {data: page8} = useQuery('topRatedMovies8', () =>
        MovieService.getTop('popular', 'movie',"8")
    );
    const {data: page9} = useQuery('topRatedMovies9', () =>
        MovieService.getTop('popular', 'movie',"9")
    );
    const {data: page10} = useQuery('topRatedMovies10', () =>
        MovieService.getTop('popular', 'movie',"10")
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
