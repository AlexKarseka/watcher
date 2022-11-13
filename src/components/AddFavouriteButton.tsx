import React from "react";
import {addDoc, collection} from "@firebase/firestore";
import db from "../firebase";
import useAuth from "../hooks/store/useAuth";

interface FavouriteButtonProps {
    id_movie: number,
    name: string,
    backdrop_path: string,
    genreSeparator: string
}

const AddFavouriteButton = ({id_movie, name, backdrop_path, genreSeparator}: FavouriteButtonProps) => {
    const {id} = useAuth();
    const collectionRef = collection(db, "favourite");
    let payload = {};

    if (genreSeparator === 'serials') {
        payload = {
            id: id_movie,
            name: name,
            backdrop_path: backdrop_path,
            user_id: id
        }
    } else if (genreSeparator === 'movies') {
        payload = {
            id: id_movie,
            title: name,
            backdrop_path: backdrop_path,
            user_id: id
        }
    }

    return (
        <button
            className="w-2/4 flex items-center justify-center bg-gray-700 rounded mt-2 h-8 hover:bg-gray-800"
            type="button"
            onClick={async () => {
                console.log(payload)
                await addDoc(collectionRef, payload);
            }}
        >
            <div className="ml-2 text-xs text-white">Add to favourites</div>
        </button>
    );
};

export default AddFavouriteButton;
