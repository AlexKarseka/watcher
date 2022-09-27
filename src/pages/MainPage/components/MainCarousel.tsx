import React from "react";
import css from "./styles.module.css";

export interface MainCarouselProps {
    sliderData: Array<object>
}

const MainCarousel = ({ sliderData }: MainCarouselProps) => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0)

    if (activeSlide >= sliderData.length) {
        setActiveSlide(0)
    } else if (activeSlide < 0) {
        setActiveSlide(sliderData.length - 1)
    }

    return (
        <div className={css.slider_wrapper}>
            <button onClick={() => {setActiveSlide(activeSlide +1)}}>{"<"}</button>
            <img src={sliderData[activeSlide]} alt="2" width={600} height={300}/>
            <button onClick={() => {setActiveSlide(activeSlide -1)}}>{">"}</button>
        </div>
    );
};

export default MainCarousel;
