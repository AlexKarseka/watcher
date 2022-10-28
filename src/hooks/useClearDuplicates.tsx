import React from "react";

const useClearDuplicates = (needCleaned: any[]) => {
    const clearDuplicates = needCleaned.reduce((firstDrive: any, secondDrive: any) => {
        if (!firstDrive.find((value: any) => value.id === secondDrive.id)) {
            firstDrive.push(secondDrive);
        }
        return firstDrive;
    }, []);

    return clearDuplicates
};

export default useClearDuplicates;