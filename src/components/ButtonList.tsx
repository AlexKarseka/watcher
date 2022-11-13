import React from "react";
import useAuth from "../hooks/store/useAuth";
import {collection, onSnapshot} from "@firebase/firestore";
import db from "../firebase";

import AddFavouriteButton from "./AddFavouriteButton";
import GoFavouriteButton from "./GoFavouriteButton";

interface ButtonListProps {
    homepage: string,
    nameCategory: string,
    id_movie: number,
    backdrop_path: string,
    name: string,
}

const ButtonList = ({homepage, nameCategory, id_movie, backdrop_path, name}: ButtonListProps) => {
    const {isAuth, id} = useAuth();

    const [favourite, setFavourite] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        onSnapshot(collection(db, "favourite"), (snapshot) => {
            setFavourite(snapshot.docs.map(doc => doc.data()))
        });
    }, [])

    const userFilter = favourite
        .map(user => user.user_id === id ? {...user, logo: user.file_path} : user)
        .filter(user => user.user_id === id)

    return (
        <div className="flex gap-6">
            <a
                href={homepage}
                className="w-2/4 flex items-center justify-center bg-amber-400 rounded-lg mb-8 h-10 hover:bg-amber-500"
            >
                <div className="ml-2 text-sm text-black">Go to the {nameCategory} homepage</div>
            </a>

            {isAuth ?
                userFilter.map(id => id.id === id_movie ? {...id, id: id.id} : id)
                    .filter(id => id.id === id_movie).length <= 0 ?
                    <AddFavouriteButton
                        id_movie={id_movie}
                        backdrop_path={backdrop_path}
                        name={name}
                        genreSeparator={nameCategory}
                        location="mb-8 h-10 rounded-lg text-sm"
                    />
                    :
                    <GoFavouriteButton location="mb-8 h-10 rounded-lg text-sm" />
                :
                null
            }

        </div>
    );
};

export default ButtonList;
