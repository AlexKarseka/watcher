import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface PageBaseProps {
    children: React.ReactNode,
    footerBg: boolean
}

const PageBase = ({children, footerBg}: PageBaseProps) => {
    return (
        <div className="overflow-hidden">
            <Header/>

            <div className="h-full">
                {children}
            </div>

            <Footer footerBg={footerBg}/>
        </div>
    )
}

export default PageBase;
