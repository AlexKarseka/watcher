const useClearDuplicates = (needCleaned: any[]) => {
    return needCleaned.reduce((firstDrive: any, secondDrive: any) => {
        if (!firstDrive.find((value: any) => value.id === secondDrive.id)) {
            firstDrive.push(secondDrive);
        }
        return firstDrive;
    }, [])
};

export default useClearDuplicates;