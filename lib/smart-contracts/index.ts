import {getWalletClient} from "wagmi/actions";
import {useUserStore} from "@/lib/store/user-store";
import {ContractFactory} from "ethers";

export const deploySmartContract = async (): Promise<string> => {
    const chainId = 1442;
    const walletClient = await getWalletClient({chainId});
    return "0xAddress"
}

export const readDataFromSmartContract = async (contractAddress: string, variableName: string): Promise<number> => {
    return 10
}

export const writeDataToSmartContract = async (contractAddress: string, variableName: string, value: number): Promise<string> => {
    return "txHash"
}