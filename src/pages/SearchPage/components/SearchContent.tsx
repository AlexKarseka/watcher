import React from "react";
import {IForTestList} from "../../../models";

import SecondCardVersion from "../../../components/SecondCardVersion";

interface SearchContentProps {
    found: Array<IForTestList>
}

const SearchContent = ({found}: SearchContentProps) => {
    return (
        <div className="pb-32">
            <div className="text-xl text-white mb-4 px-14">
                Search results:
            </div>
            <SecondCardVersion content={found} year={false} />
        </div>
    );
};

export default SearchContent;
