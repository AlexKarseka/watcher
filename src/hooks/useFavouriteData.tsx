import React from "react";
import useAuth from "../hooks/store/useAuth";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../firebase";

const useFavouriteData = () => {
    const {isAuth, id} = useAuth();

    const [favourite, setFavourite] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        onSnapshot(collection(db, "favourite"), (snapshot) => {
            setFavourite(snapshot.docs.map((doc) => ({...doc.data(), list_id: doc.id})))
        });
    }, []);

    const userFilter = favourite
        .map(user => user.user_id === id ? {...user, logo: user.file_path} : user)
        .filter(user => user.user_id === id);

    return {
        isAuth,
        userFilter
    }
};

export default useFavouriteData;
