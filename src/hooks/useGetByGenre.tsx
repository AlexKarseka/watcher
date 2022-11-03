import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

import useClearDuplicates from "./useClearDuplicates";

const useGetByGenre = (queryKey: string, type: string, genresName: string | number, page: number) => {
    const [byGenres, setByGenres] = React.useState<Array<ITopMovies>>([]);

    const {} = useQuery('topByGenMovies', () =>
            MovieService.getGenresList(type, genresName, page), {
            onSuccess: ({results}) => {
                setByGenres(results);
            },
            refetchInterval: 100,
        }
    );

    const byGenresDup = useClearDuplicates(byGenres);

    return byGenresDup;
}

export default useGetByGenre;
