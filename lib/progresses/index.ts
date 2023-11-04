type Progress = {
    address: string;
    course_id: string;
    current_section: number;
    current_unit: number;
    current_step: number;
};

type AddressXP = {
    address: string;
    xp: number;
};

const calculateXP = (progress: Progress): number => {
    return 5 * progress.current_section + 3 * progress.current_unit + progress.current_step;
};

const sumXP = (accumulatedXP: { [key: string]: number }, progress: Progress): { [key: string]: number } => {
    if (accumulatedXP[progress.address]) {
        accumulatedXP[progress.address] += calculateXP(progress);
    } else {
        accumulatedXP[progress.address] = calculateXP(progress);
    }
    return accumulatedXP;
};

export const sortAddressesByXP = (progresses: Progress[]): AddressXP[] => {
    const xpByAddress = progresses.reduce(sumXP, {});

    const sortedAddresses: AddressXP[] = Object.keys(xpByAddress).map(address => ({
        address,
        xp: xpByAddress[address],
    }));

    sortedAddresses.sort((a, b) => a.xp - b.xp);

    return sortedAddresses;
};