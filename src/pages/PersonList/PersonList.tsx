import React from "react";
import PageBase from "../PageBase/PageBase";
import {useParams} from "react-router-dom";

import HeaderList from "../../components/HeaderList";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetPersonDetails from "../../hooks/useGetPersonDetails";
import PersonProfile from "./components/PersonProfile";
import PersonInfo from "./components/PersonInfo";

const PersonList = () => {
    const {id} = useParams();

    const {personDetails, noRepeatArray} = useGetPersonDetails(id);

    if (!personDetails || !noRepeatArray) return null;

    return (
        <PageBase>
            <div className="relative pt-32 pb-16">
                <div className="px-14">
                    <HeaderList nameCategory='movies' nameMovie={personDetails.name}/>
                </div>

                <div className="flex items-start justify-between mt-4 gap-20 px-14">
                    <PersonProfile photo={personDetails.profile_path} />

                    <PersonInfo info={personDetails} />
                </div>

                {noRepeatArray.length > 0 ?
                    <div className="py-16">
                        <div className="px-14 mb-2.5 text-white text-xl">Films with {personDetails.name}</div>
                        <SecondCardVersion content={noRepeatArray} year={false}/>
                    </div>
                    :
                    null
                }
            </div>
        </PageBase>
    );
};

export default PersonList;
