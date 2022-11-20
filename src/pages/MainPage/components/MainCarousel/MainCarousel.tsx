import React from "react";

import useMainCarousel from "../../../../hooks/useMainCarousel";
import ContentMobi from "./components/ContentMobi";
import ContentWeb from "./components/ContentWeb";

import ArrowLeft from "../../../../assets/left.svg";
import ArrowRight from "../../../../assets/right.svg";

const MainCarousel = () => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0);

    const carouselList = useMainCarousel();
    const windowWidth: number = document.documentElement.clientWidth;

    return (
        <div className="flex items-center -mt-20">
            <button
                onClick={() => {
                    setActiveSlide(activeSlide <= 0 ? carouselList.length - 1 : activeSlide - 1)
                }}
            >
                <img
                    className="hidden sm:block w-8 lg:w-10 xl:w-14 hover:drop-shadow-[0_4px_3px_white]"
                    src={ArrowLeft}
                    alt="arrow"
                />
            </button>

            {windowWidth < 640 ?
                <ContentMobi windowWidth={windowWidth} />
                :
                <ContentWeb activeSlide={activeSlide} />
            }

            <button
                onClick={() => {
                    setActiveSlide(activeSlide >= carouselList.length - 1 ? 0 : activeSlide + 1)
                }}
            >
                <img
                    className="hidden sm:block w-8 lg:w-10 xl:w-14 hover:drop-shadow-[0_4px_3px_white]"
                    src={ArrowRight}
                    alt="arrow"
                />
            </button>
        </div>
    );
};

export default MainCarousel;
