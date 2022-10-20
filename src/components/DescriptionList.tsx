import React from "react";
import {ICountriesName, IGenresName} from "../models";

interface DescriptionListProps {
    description: {
        vote_average: number,
        production_countries: Array<ICountriesName>,
        release_date: string,
        adult: boolean,
        genres: Array<IGenresName>,
        overview: string
    }
}

const DescriptionList = ({description}: DescriptionListProps) => {
    const elementsPerPage = 4;

    return (
        <div>
            <div className="flex items-center gap-6 mb-6">
                <div
                    className={`${description.vote_average <= 7 ? "text-red-600" : "text-green-500"} border border-[#565c67] rounded px-3 py-1`}
                >
                    {description.vote_average.toFixed(1)}
                </div>

                <div className="text-lg text-[#565c67]">
                    {description.production_countries.length !== 0 ?
                        description.production_countries[0].iso_3166_1
                        :
                        null
                    }
                </div>

                <div className="text-lg text-[#565c67]">
                    {description.release_date.slice(0, 4)}
                </div>

                <div className="text-lg text-[#565c67]">
                    {description.adult ? '12+' : '18+'}
                </div>

                <div className="flex gap-4">
                    {description.genres.slice(0, elementsPerPage).map((elem: any) => {
                        return (
                            <div
                                className="text-lg text-[#565c67]"
                                key={elem.id}
                            >
                                {elem.name}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="text-white text-sm leading-4">{description.overview}</div>
        </div>
    );
};

export default DescriptionList;
