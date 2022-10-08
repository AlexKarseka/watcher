import React from 'react';

import PageBase from "../PageBase/PageBase";
import Header from "./components/Header";
import MenuSettings from "./components/MenuSettings";

const FilmsPage = () => {
    return (
        <PageBase>
            <Header />
            <MenuSettings />
        </PageBase>
    );
};

export default FilmsPage;
