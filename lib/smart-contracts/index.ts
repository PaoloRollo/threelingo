import { ethers, Signer } from "ethers";
import { erc20abi, erc20bytecode } from "@/lib/smart-contracts/erc20";
import { formatUnits, parseUnits } from "@ethersproject/units";
import {useUserStore} from "@/lib/store/user-store";
import {useSmartContractStore} from "@/lib/store/smart-contract-store";

export const receiveFunds = async (): Promise<boolean> => {
  try {
    const userAccount = useUserStore.getState();

    const response = await fetch("/api/receive-funds", {
      method: "POST",
      body: JSON.stringify({
        address: userAccount.address,
        gasLimit: 100000,
      }),
    })
    const { txHash } = await response.json()
    return true
  } catch (error) {
    console.error("Error deploying Safe:", error);
    throw error;
  }
}

export const deployERC20SmartContract = async (
  signer?: Signer
): Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider({
    url: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL as string,
    skipFetchSetup: true,
  });
  const factory = new ethers.ContractFactory(erc20abi, erc20bytecode, signer?.connect(provider));
  // Deploy, setting total supply to 100 tokens (assigned to the deployer)
  const contract = await factory.deploy(parseUnits("100"));
  await contract.deployTransaction.wait();
  const smartContractStore = useSmartContractStore.getState()
  smartContractStore.contractAddress = contract.address;
  return true;
};

export const readERC20SmartContract = async (
  signer?: Signer
): Promise<boolean> => {
  const smartContractStore = useSmartContractStore.getState()
  const erc20 = new ethers.Contract(smartContractStore.contractAddress, erc20abi, signer);
  return true;
};

export const transferERC20ToSmartContract = async (
  signer?: Signer
): Promise<boolean> => {
  const smartContractStore = useSmartContractStore.getState()
  const erc20 = new ethers.Contract(smartContractStore.contractAddress, erc20abi, signer);
  const tx = await erc20.transfer("limone.eth", parseUnits("1.23"));
  await tx.wait();
  return true
};
