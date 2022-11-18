import { useQuery } from "react-query";
import DetailsService from "../services/DetailsService";

const useGetFilmsDetails = (id: string | undefined, type: string, typeRecom: string) => {
    const {data: details} = useQuery(type, () =>
        DetailsService.getDetails(id, type), {
        refetchInterval: 100,
    });

    const {data: recommendations} = useQuery(typeRecom, () =>
        DetailsService.getRecommendations(id, type), {
        refetchInterval: 100,
    });

    return {
        details,
        recommendations
    };
};

export default useGetFilmsDetails;
