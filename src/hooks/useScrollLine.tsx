import React from "react";

const useScrollLine = () => {
    const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = React.useState<boolean>(false);

    const containerRef = React.useRef<HTMLUListElement>(null);
    const debounce = require('lodash.debounce');

    const checkForScrollPosition = () => {
        const {current} = containerRef;
        if (current) {
            const {scrollLeft, scrollWidth, clientWidth} = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance: number) =>
        containerRef.current?.scrollBy({left: distance, behavior: "smooth"});

    React.useEffect(() => {
        const {current} = containerRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
    }, []);

    return {
        canScrollLeft,
        canScrollRight,
        containerRef,
        scrollContainerBy
    }
};

export default useScrollLine;
