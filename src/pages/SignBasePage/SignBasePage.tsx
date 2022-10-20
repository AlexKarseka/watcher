import React from "react";
import css from "./components/styles.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface SignBasePageProps {
    children: React.ReactNode,
}

const SignBasePage = ({children}: SignBasePageProps) => {

    return (
        <div className={css.sign_base_page}>
            <Header />
            <div className="h-full">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default SignBasePage;
