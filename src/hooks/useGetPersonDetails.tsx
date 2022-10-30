import React from "react";
import {useQuery} from "react-query";
import DetailsService from "../services/DetailsService";
import {ITopMovies} from "../models";

import useClearDuplicates from "./useClearDuplicates";

const useGetPersonDetails = (id: string | undefined) => {
    const [personCast, setPersonCast] = React.useState <Array<ITopMovies>>([])

    const {data: personDetails} = useQuery('person', () =>
        DetailsService.getDetails(id, 'person'), {
        refetchInterval: 100,
    });

    const {} = useQuery('personCast', () =>
        DetailsService.getPersonCast(id), {
        onSuccess: ({cast}) => {
            setPersonCast(cast);
        },
        refetchInterval: 100,
    });

    const personCastDup = useClearDuplicates(personCast);

    return {
        personDetails,
        personCastDup
    }
}

export default useGetPersonDetails;
