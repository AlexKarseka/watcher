import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useGetFilmsDetails = (id: string | undefined, type: string, typeRecom: string) => {
    const {data: details} = useQuery(type, () =>
        MovieService.getDetails(id, type), {
        refetchInterval: 100,
    });

    const {data: recommendations} = useQuery(typeRecom, () =>
        MovieService.getRecommendations(id, type), {
        refetchInterval: 100,
    });

    return {
        details,
        recommendations
    }
};

export default useGetFilmsDetails;
