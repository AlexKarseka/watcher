import React from "react";
import css from "./components/styles.module.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

export interface PageBase {
    children: React.ReactNode
}

const PageBase = ({children}: PageBase) => {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default PageBase;
