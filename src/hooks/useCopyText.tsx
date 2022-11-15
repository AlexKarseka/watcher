import React from "react";

const useCopyText = () => {
    const inputRef = React.useRef(null);

    const copyToClipboard = () => {
        // @ts-ignore
        inputRef.current.select();
        document.execCommand('copy');
    };

    return {
        inputRef,
        copyToClipboard
    };
};

export default useCopyText;
