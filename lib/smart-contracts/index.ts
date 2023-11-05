import {ethers, Signer} from "ethers";
import {erc20abi, erc20bytecode} from "@/lib/smart-contracts/erc20";
import {formatUnits, parseUnits} from "@ethersproject/units";


export const deployERC20SmartContract = async (signer?: Signer): Promise<string> => {
    const factory = new ethers.ContractFactory(erc20abi, erc20bytecode, signer)
    // Deploy, setting total supply to 100 tokens (assigned to the deployer)
    const contract = await factory.deploy(parseUnits("100"));
    await contract.deployTransaction.wait();
    return contract.address;
}

export const readERC20SmartContract = async (contractAddress: string, signer?: Signer): Promise<string> => {
    const erc20 = new ethers.Contract(contractAddress, erc20abi, signer);
    return formatUnits(await erc20.balanceOf(signer?.getAddress()));
}

export const transferERC20ToSmartContract = async (contractAddress: string, signer?: Signer): Promise<string> => {
    const erc20 = new ethers.Contract(contractAddress, erc20abi, signer);
    const tx = await erc20.transfer("limone.eth", parseUnits("1.23"));
    await tx.wait()
    return formatUnits(await erc20.balanceOf(signer?.getAddress()));
}