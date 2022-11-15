import React from "react";
import { useParams } from "react-router-dom";
import { ITopMovies } from "../../models";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";
import HeaderList from "../../components/HeaderList";
import LogoNameList from "../../components/LogoNameList";
import ButtonList from "../../components/ButtonList";
import DescriptionList from "../../components/DescriptionList";
import FounderList from "../../components/FounderList";
import BgList from "../../components/BgList";
import BudgetList from "./components/BudgetList";
import useGetFilmsDetails from "../../hooks/useGetFilmsDetails";

const MovieList = () => {
    const {id} = useParams();

    const {details, recommendations} = useGetFilmsDetails(id, 'movie', 'recommendationsMovie')

    if (!details || !recommendations) return null;

    const recommendationsMovie: Array<ITopMovies> = recommendations;

    return (
        <PageBase footerBg={false}>
            <div className="relative px-14 pt-56 pb-16">
                <BgList poster={details.poster_path} height='' />

                <HeaderList nameCategory='movies' nameMovie={details.title}/>

                <LogoNameList logo={details.images.logos} nameMovie={details.title}/>

                <div className="flex justify-between gap-10 relative z-20">
                    <div className="w-2/4">
                        <ButtonList
                            homepage={details.homepage}
                            id_movie={details.id}
                            name={details.title}
                            backdrop_path={details.backdrop_path}
                            nameCategory='movies'
                        />
                        <DescriptionList description={details} elementsGenres={4}/>
                    </div>

                    <div className="w-2/4">
                        <FounderList founder={details.production_companies}/>
                        <BudgetList budget={details}/>
                    </div>
                </div>
            </div>

            {recommendationsMovie.length === 0 ?
                null
                :
                <div>
                    <div className="px-14 mb-2.5 text-white text-xl">You may be interested</div>
                    <SecondCardVersion content={recommendationsMovie.slice(0, 8)} year={false}/>
                </div>
            }

        </PageBase>
    );
};

export default MovieList;
