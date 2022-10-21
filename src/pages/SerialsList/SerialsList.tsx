import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import MovieService from "../../services/MovieService";
import {ITopMovies} from "../../models";

import PageBase from "../PageBase/PageBase";
import BgList from "../../components/BgList";
import HeaderList from "../../components/HeaderList";
import LogoNameList from "../../components/LogoNameList";
import ButtonList from "../../components/ButtonList";
import DescriptionList from "../../components/DescriptionList";
import FounderList from "../../components/FounderList";
import CreatorsList from "./components/CreatorsList";
import SecondCardVersion from "../../components/SecondCardVersion";
import SeasonsList from "./components/SeasonsList";

const SerialsList = () => {
    const {id} = useParams();

    const {data: serialDetails} = useQuery('serial', () =>
        MovieService.getDetails(id, 'tv'), {
        refetchInterval: 100,
    });

    const {data} = useQuery('recommendationsSerial', () =>
        MovieService.getRecommendations(id, 'tv'), {
        refetchInterval: 100,
    });

    if (!serialDetails || !data) return null;

    const recommendations: Array<ITopMovies> = data.results;

    return (
        <PageBase>
            <div className="relative px-14 pt-56 pb-16">
                <BgList poster={serialDetails.poster_path} />

                <HeaderList nameCategory='serials' nameMovie={serialDetails.name} />

                <LogoNameList logo={serialDetails.images.logos} nameMovie={serialDetails.name} />

                <div className="flex justify-between gap-10 relative z-20">
                    <div className="w-2/4">
                        <ButtonList homepage={serialDetails.homepage} nameCategory='serials' />
                        <DescriptionList description={serialDetails} elementsGenres={3} />
                    </div>

                    <div className="w-2/4">
                        <FounderList founder={serialDetails.networks} />
                        <CreatorsList creators={serialDetails} />
                    </div>
                </div>
            </div>

            <SeasonsList seasons={serialDetails.seasons} />

            <div className="pb-24">
                <div className="px-14 mb-2.5 text-white text-xl">You may be interested</div>
                <SecondCardVersion content={recommendations.slice(0, 8)} year={false} />
            </div>
        </PageBase>
    );
};

export default SerialsList;
