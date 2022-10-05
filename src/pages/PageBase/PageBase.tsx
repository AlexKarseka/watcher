import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface PageBaseProps {
    children: React.ReactNode
}

const PageBase = ({children}: PageBaseProps) => {
    return (
        <div className="overflow-hidden">
            <Header/>
            <div className="h-full">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default PageBase;
