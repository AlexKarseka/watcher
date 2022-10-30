import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

const useGetAllGenres = (queryKey: string, type: string) => {
    const [allGenres, setAllGenres] = React.useState<Array<ITopMovies>>([]);

    const {} = useQuery(queryKey, () =>
            MovieService.getTop('popular', type, '1'), {
            onSuccess: ({results}) => {
                setAllGenres(results);
            }
        }
    );

    return allGenres;
}

export default useGetAllGenres;
