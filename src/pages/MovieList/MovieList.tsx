import React from "react";
import {Link, useParams} from "react-router-dom";
import {IForTestList, IForTestListMovie} from "../../models";
import {useQuery} from "react-query";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";
import MovieService from "../../services/MovieService";

const MovieList = () => {
    const {id} = useParams();

    const {data: movieDetails} = useQuery('movie', () => MovieService.getDetails(id));

    if (!movieDetails) return null;

    return (
        <PageBase>
            <div key={movieDetails.id} className="relative px-14 pt-56 pb-16">
                <img className="absolute -top-20 left-0 opacity-20"
                     src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt="bg"/>
                <div className="relative z-20 flex text-sm mb-2 text-[#565c67] capitalize">
                    <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                    <Link className="mr-1 hover:text-[#868fa0]" to="/movies">/ movies </Link>
                    <div>/ {movieDetails.title}</div>
                </div>
                <div className="relative z-20 flex gap-20">
                    <div className="w-2/4">
                        <div className="text-lg text-white opacity-80 mb-6">
                            {movieDetails.title}
                        </div>
                        <div className="flex gap-6">
                            <a
                                href="https://ru.wikipedia.org/wiki/%D0%9C%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8:_%D0%A4%D0%B8%D0%BD%D0%B0%D0%BB"
                                className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg mb-8 h-10 hover:bg-amber-500"
                            >
                                <div className="ml-2 text-base text-black">Go to the film page</div>
                            </a>

                            <button
                                className="w-2/4 flex items-center justify-center bg-gray-700 rounded-lg mb-8 h-10 hover:bg-gray-800"
                            >
                                <div className="ml-2 text-base text-white">Add to favourites</div>
                            </button>
                        </div>
                        <div className="flex items-center gap-6 mb-6">
                            <div
                                className={`${movieDetails.vote_average <= 7 ? "text-red-600" : "text-green-500"} border border-[#565c67] rounded px-3 py-1`}
                            >
                                {movieDetails.vote_average}
                            </div>
                            <div className="text-lg text-[#565c67]">
                                ??USA
                            </div>
                            <div className="text-lg text-[#565c67]">
                                {movieDetails.release_date.slice(0, 4)}
                            </div>
                            <div className="text-lg text-[#565c67]">
                                {/*{movie.limits}*/}
                            </div>
                            <div className="text-lg text-[#565c67]">
                                {/*{movie.genres}*/}
                            </div>
                        </div>
                        <div className="text-white text-sm leading-4">{movieDetails.overview}</div>
                    </div>
                    <div>
                        <div className="text-3xl text-[#565c67] mt-14 mb-[86px]">
                            {movieDetails.title}
                        </div>
                        <div className="flex items-center mb-1.5 text-sm">
                            <div className="w-32 text-[#565c67]">Studio:</div>
                            <div className="text-white">{movieDetails.production_companies[0].name}</div>
                        </div>
                        <div className="flex items-center mb-1.5 text-sm">
                            <div className="w-32 text-[#565c67]">Budget:</div>
                            <div className="text-white">$ {movieDetails.budget}</div>
                        </div>
                        <div className="flex items-center mb-1.5 text-sm">
                            <div className="w-32 text-[#565c67]">Fees:</div>
                            <div className="text-white">$ {movieDetails.revenue}</div>
                        </div>
                        <div className="flex items-center mb-1.5 text-sm">
                            <div className="w-32 text-[#565c67]">Duration:</div>
                            <div className="text-white">{movieDetails.runtime} min</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-32">
                <div className="px-14 mb-2.5 text-white text-xl">You may be interested</div>
                {/*<SecondCardVersion content={forTestList} year={false}/>*/}
            </div>
        </PageBase>
    );
};

export default MovieList;
