import React from "react";
import {useQuery} from "react-query";
import MovieService from "../services/MovieService";
import {ITopMovies} from "../models";

import useClearDuplicates from "./useClearDuplicates";

const useGetPersonDetails = (id: string | undefined) => {
    const [taggedImages, setTaggedImages] = React.useState <Array<ITopMovies>>([])

    const {data: personDetails} = useQuery('person', () =>
        MovieService.getDetails(id, 'person'), {
        refetchInterval: 100,
    });

    const {} = useQuery('taggedImages', () =>
        MovieService.getTaggedImages(id), {
        onSuccess: ({results}) => {
            const selectedArray: Array<ITopMovies> = [];

            for (let i = 0; i < results.length; i++) {
                selectedArray.push(results[i].media)
                setTaggedImages(selectedArray)
            }
        },
        refetchInterval: 100,
    });

    const noRepeatArray = useClearDuplicates(taggedImages);

    return {
        personDetails,
        noRepeatArray
    }
}

export default useGetPersonDetails;
