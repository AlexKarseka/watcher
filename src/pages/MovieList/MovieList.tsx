import React from "react";
import {useParams} from "react-router-dom";
import {ITopMovies} from "../../models";
import {useQuery} from "react-query";
import MovieService from "../../services/MovieService";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";
import HeaderList from "../../components/HeaderList";
import LogoNameList from "../../components/LogoNameList";
import ButtonList from "../../components/ButtonList";
import DescriptionList from "../../components/DescriptionList";
import FounderList from "../../components/FounderList";
import BgList from "../../components/BgList";
import BudgetList from "./components/BudgetList";

const MovieList = () => {
    const {id} = useParams();

    const {data: movieDetails} = useQuery('movie', () =>
        MovieService.getDetails(id, 'movie'), {
        refetchInterval: 100,
    });

    const {data} = useQuery('recommendations', () =>
        MovieService.getRecommendations(id, 'movie'), {
        refetchInterval: 100,
    });

    if (!movieDetails || !data) return null;

    const recommendations: Array<ITopMovies> = data.results;

    return (
        <PageBase>
            <div className="relative px-14 pt-56 pb-16">
                <BgList poster={movieDetails.poster_path} />

                <HeaderList nameCategory='movies' nameMovie={movieDetails.title} />

                <LogoNameList logo={movieDetails.images.logos} nameMovie={movieDetails.title} />

                <div className="flex justify-between gap-10 relative z-20">
                    <div className="w-2/4">
                        <ButtonList homepage={movieDetails.homepage} nameCategory='movie' />
                        <DescriptionList description={movieDetails} elementsGenres={4} />
                    </div>

                    <div className="w-2/4">
                        <FounderList founder={movieDetails.production_companies} />
                        <BudgetList budget={movieDetails} />
                    </div>
                </div>
            </div>
            <div className="pb-24">
                <div className="px-14 mb-2.5 text-white text-xl">You may be interested</div>
                <SecondCardVersion content={recommendations.slice(0, 8)} year={false} />
            </div>
        </PageBase>
    );
};

export default MovieList;
