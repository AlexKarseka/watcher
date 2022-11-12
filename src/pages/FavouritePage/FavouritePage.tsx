import React from "react";
import {Link} from "react-router-dom";
import {onSnapshot, collection} from "@firebase/firestore";
import db from "../../firebase";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";
import NoFavourite from "./components/NoFavourite";

const FavouritePage = () => {
    const [favourite, setFavourite] = React.useState<Array<any>>([]);

    React.useEffect(() => {
         onSnapshot(collection(db, "favourite"), (snapshot) => {
             setFavourite(snapshot.docs.map(doc => doc.data()))
        });
    }, [])

    return (
        <PageBase footerBg>
            <div className="px-14 mb-10">
                <div className="flex text-sm mb-2 text-[#565c67] capitalize">
                    <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                    <div>/ Favourite</div>
                </div>
                <div className="text-2xl text-white opacity-80 capitalize">Your Favourite List</div>
            </div>

            {favourite.length <= 0 ? <NoFavourite /> : <SecondCardVersion content={favourite} year={false}/>}

        </PageBase>
    );
};

export default FavouritePage;
