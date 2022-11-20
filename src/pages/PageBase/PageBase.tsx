import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderMobi from "./components/HeaderMobi";

interface PageBaseProps {
    children: React.ReactNode,
    footerBg: boolean
}

const PageBase = ({children, footerBg}: PageBaseProps) => {
    const windowWidth: number = document.documentElement.clientWidth;

    return (
        <div className="overflow-hidden">
            {windowWidth < 550 ? <HeaderMobi /> : <Header/>}

            <div className="h-full">
                {children}
            </div>

            <Footer footerBg={footerBg}/>
        </div>
    )
}

export default PageBase;
