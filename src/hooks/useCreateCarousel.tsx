import React from "react";
import {ITopMovies} from "../models";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";

const useCreateCarousel = () => {
    const [carouselMovies, setCarouselMovies] = React.useState <Array<ITopMovies>>([]);

    const {data: carousel} = useQuery('carouselMovies', () =>
            MovieService.getTop('popular', 'tv', '1'), {
            onSuccess: ({results}) => {
                setCarouselMovies(results.slice(0, 5));
            }
        }
    );

    if (!carousel) return null;

    return carouselMovies;
};

export default useCreateCarousel;
