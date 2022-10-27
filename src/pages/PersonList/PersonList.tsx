import React from "react";
import PageBase from "../PageBase/PageBase";
import {useParams} from "react-router-dom";

import HeaderList from "../../components/HeaderList";
import SecondCardVersion from "../../components/SecondCardVersion";
import useGetPersonDetails from "../../hooks/useGetPersonDetails";

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
                    <div className="w-1/4">
                        <img
                            className="w-full rounded"
                            src={`https://image.tmdb.org/t/p/original${personDetails.profile_path}`}
                            alt="bg"
                        />
                    </div>
                    <div className="w-3/4">
                        <div className="flex-col mb-3 text-sm">
                            <div className="mb-0.5 text-[#565c67]">Name:</div>
                            <div className="text-white">{personDetails.name}</div>
                        </div>

                        <div className="flex-col mb-3 text-sm">
                            <div className="mb-0.5 text-[#565c67]">Place of birth</div>
                            <div className="text-white">{personDetails.place_of_birth}</div>
                        </div>

                        <div className="flex-col mb-3 text-sm">
                            <div className="mb-0.5 text-[#565c67]">Birthday:</div>
                            <div className="text-white">{personDetails.birthday}</div>
                        </div>

                        {personDetails.deathday ?
                            <div className="flex-col mb-3 text-sm">
                                <div className="mb-0.5 text-[#565c67]">Death:</div>
                                <div className="text-white">{personDetails.deathday}</div>
                            </div>
                            :
                            null
                        }

                        <div className="flex-col mb-3 text-sm">
                            <div className="mb-0.5 text-[#565c67]">Biography</div>
                            <div className="text-white w-4/5">{personDetails.biography}</div>
                        </div>
                    </div>
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
