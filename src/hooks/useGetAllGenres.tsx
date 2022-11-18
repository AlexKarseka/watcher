import React from "react";
import { useQuery } from "react-query";
import MovieService from "../services/MovieService";
import { ITopMovies } from "../models";

import useClearDuplicates from "./useClearDuplicates";

const useGetAllGenres = (queryKey: string, type: string, page: number) => {
    const [allGenres, setAllGenres] = React.useState<Array<ITopMovies>>([]);

    const {} = useQuery(queryKey, () =>
            MovieService.getTop('top_rated', type, page), {
            onSuccess: ({results}) => {
                setAllGenres(results);
            },
            refetchInterval: 100,
        }
    );

    return useClearDuplicates(allGenres);
}

export default useGetAllGenres;
