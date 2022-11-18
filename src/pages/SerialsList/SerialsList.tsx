import React from "react";
import { useParams } from "react-router-dom";
import { ITopMovies } from "../../models";

import PageBase from "../PageBase/PageBase";
import BgList from "../../components/BgList";
import HeaderList from "../../components/HeaderList";
import LogoNameList from "../../components/LogoNameList";
import ButtonList from "../../components/ButtonList";
import DescriptionList from "../../components/DescriptionList";
import FounderList from "../../components/FounderList";
import CreatorsList from "./components/CreatorsList";
import SeasonsList from "./components/SeasonsList";
import useGetFilmsDetails from "../../hooks/useGetFilmsDetails";
import RecommendationsCard from "../../components/RecommendationsCard";

const SerialsList = () => {
    const {id} = useParams();
    const {details, recommendations} = useGetFilmsDetails(id, 'tv', 'recommendationsSerial')

    if (!details || !recommendations) return null;

    const recommendationsSerial: Array<ITopMovies> = recommendations;

    return (
        <PageBase footerBg={false}>
            <div className="relative px-14 pt-56 pb-16">
                <BgList poster={details.poster_path}/>

                <HeaderList nameCategory='serials' nameMovie={details.name}/>

                <LogoNameList logo={details.images.logos} nameMovie={details.name}/>

                <div className="flex justify-between gap-10 relative z-20">
                    <div className="w-2/4">
                        <ButtonList
                            homepage={details.homepage}
                            id_movie={details.id}
                            name={details.name}
                            backdrop_path={details.backdrop_path}
                            nameCategory='serials'
                        />
                        <DescriptionList description={details} elementsGenres={3}/>
                    </div>

                    <div className="w-2/4">
                        <FounderList founder={details.networks}/>
                        <CreatorsList creators={details}/>
                    </div>
                </div>
            </div>

            <SeasonsList seasons={details.seasons}/>

            {recommendationsSerial.length === 0 ? null :  <RecommendationsCard content={recommendationsSerial} />}
        </PageBase>
    );
};

export default SerialsList;
