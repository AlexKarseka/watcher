import React from "react";
import { useParams } from "react-router-dom";

import PageBase from "../PageBase/PageBase";
import HeaderList from "../../components/HeaderList";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetPersonDetails from "../../hooks/useGetPersonDetails";
import PersonProfile from "./components/PersonProfile";
import PersonInfo from "./components/PersonInfo";

const PersonList = () => {
    const {id} = useParams();
    const {personDetails, personCastDup} = useGetPersonDetails(id);

    if (!personDetails || !personCastDup) return null;

    return (
        <PageBase footerBg={false}>
            <div className="relative sm:pt-32 px-4 sm:pb-16">
                <div className="px-4 sm:px-14">
                    <HeaderList nameCategory='movies' nameMovie={personDetails.name}/>
                </div>

                <div className="flex flex-col sm:flex-row items-start justify-between mt-4 gap-2 sm:gap-20 px-4 sm:px-14">
                    <PersonProfile photo={personDetails.profile_path} />

                    <PersonInfo info={personDetails} />
                </div>

                {personCastDup.length > 0 ?
                    <div className="pt-4 sm:pt-16">
                        <div className="px-4 sm:px-14 mb-2.5 text-white text-xl">Films with {personDetails.name}</div>
                        <SecondCardVersion content={personCastDup.slice(0, 9)} year={false}/>
                    </div> : null
                }
            </div>
        </PageBase>
    );
};

export default PersonList;
