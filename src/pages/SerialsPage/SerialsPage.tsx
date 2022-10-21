import React from "react";

import PageBase from "../PageBase/PageBase";
import HeaderPage from "../../components/HeaderPage";
import MenuSettings from "../../components/MenuSettings";
import FirstCardVersion from "../../components/FirstCardVersion";
import SecondCardVersion from "../../components/SecondCardVersion";
import useCreateSerials from "../../hooks/useCreateSerials";

const SerialsPage = () => {
    const [listStyle, setListStyle] = React.useState<boolean>(true);

    const getSerials = useCreateSerials();

    if (!getSerials) return null;

    return (
        <PageBase>
            <HeaderPage nameCategory="serials" />

            <MenuSettings styleCard={(card) => {setListStyle(card)}} />

            <div className="pb-24">
                {listStyle ?
                    <FirstCardVersion content={getSerials} />
                    :
                    <SecondCardVersion content={getSerials} year />
                }
            </div>
        </PageBase>
    );
};

export default SerialsPage;
