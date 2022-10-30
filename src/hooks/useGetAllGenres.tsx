import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

import useClearDuplicates from "./useClearDuplicates";

const useGetAllGenres = (queryKey: string, type: string) => {
    const [allGenres, setAllGenres] = React.useState<Array<ITopMovies>>([]);

    const {} = useQuery(queryKey, () =>
            MovieService.getTop('popular', type, '1'), {
            onSuccess: ({results}) => {
                setAllGenres(results);
            }
        }
    );

    const allGenresDup = useClearDuplicates(allGenres);

    return allGenresDup;
}

export default useGetAllGenres;
