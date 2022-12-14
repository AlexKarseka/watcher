import React from "react";
import { ICountriesName, IGenresName } from "../models";

interface DescriptionListProps {
    description: {
        vote_average: number,
        production_countries: Array<ICountriesName>,
        release_date: string,
        adult: boolean,
        genres: Array<IGenresName>,
        overview: string
    },
    elementsGenres: number,
}

const DescriptionList = ({description, elementsGenres}: DescriptionListProps) => {
    return (
        <div>
            <div className="flex sm:flex-wrap items-center gap-2 sm:gap-5 mb-2 sm:mb-6">
                <div
                    className={`${description.vote_average <= 7 ? "text-red-600" : "text-green-500"} border border-[#565c67] rounded px-1.5 sm:px-3 py-0 sm:py-1`}
                >
                    {description.vote_average.toFixed(1)}
                </div>

                <div className="text-xs sm:text-lg text-[#565c67]">
                    {description.production_countries.length !== 0 ?
                        description.production_countries[0].iso_3166_1
                        :
                        null
                    }
                </div>


                {description.release_date ?
                    <div className="text-xs sm:text-lg text-[#565c67]">
                        {description.release_date.slice(0, 4)}
                    </div> : null
                }

                <div className="text-xs sm:text-lg text-[#565c67]">
                    {description.adult ? '12+' : '18+'}
                </div>

                <div className="flex gap-1 sm:gap-5">
                    {description.genres.slice(0, elementsGenres).map((elem: any) => {
                        return (
                            <div
                                className="text-xs sm:text-lg text-[#565c67] whitespace-nowrap"
                                key={elem.id}
                            >
                                {elem.name}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="text-white text-xs sm:text-sm leading-4">{description.overview}</div>
        </div>
    );
};

export default DescriptionList;
