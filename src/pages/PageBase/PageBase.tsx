import React from "react";
import css from "./components/styles.module.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

interface PageBaseProps {
    children: React.ReactNode
}

const PageBase = ({children}: PageBaseProps) => {
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
