import React from "react";
import {ITopMovies} from "../models";

const useGetListGenres = (id: number, arrayAllMovies: Array<ITopMovies>) => {
    const getArray: Array<ITopMovies> = [];

    arrayAllMovies.map((elem) => {
        for(let i = 0; i < 15000; i++) {
            if (elem.genre_ids[i] === id) {
                getArray.push(elem);
            }
        }
    })

    return getArray;
}

export default useGetListGenres;
