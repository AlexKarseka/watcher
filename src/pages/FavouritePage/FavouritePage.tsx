import React from "react";
import {Link} from "react-router-dom";
import {IForTestList} from "../../models";

import PageBase from "../PageBase/PageBase";
import SecondCardVersion from "../../components/SecondCardVersion";
import NoFavourite from "./components/NoFavourite";


const FavouritePage = () => {
    const [favouriteList, setFavouriteList] = React.useState<Array<IForTestList>>([]);

    return (
        <PageBase footerBg>
            <div className="px-14 mb-10">
                <div className="flex text-sm mb-2 text-[#565c67] capitalize">
                    <Link className="mr-1 hover:text-[#868fa0]" to="/"> Watcher </Link>
                    <div>/ Favourite</div>
                </div>
                <div className="text-2xl text-white opacity-80 capitalize">Your Favourite List</div>
            </div>

            {favouriteList.length <= 0 ? <NoFavourite /> : <SecondCardVersion content={favouriteList} year={false}/>}

        </PageBase>
    );
};

export default FavouritePage;
