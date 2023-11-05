import {useUserStore} from "../store/user-store";
import Safe, {EthersAdapter, AddOwnerTxParams} from "@safe-global/protocol-kit";
import {ethers, Signer} from "ethers";
import {MetaTransactionData, OperationType} from "@safe-global/safe-core-sdk-types";
import SafeApiKit from "@safe-global/api-kit";
import {useWeb3Auth} from "@/hooks/use-web3-auth";

export async function deploySafeAndReturnAddress(): Promise<boolean> {

  try {
    const userAccount = useUserStore.getState();

    const response = await fetch("/api/deploy-safe", {
      method: "POST",
      body: JSON.stringify({
          address: userAccount.address,
          gasLimit: 100000,
        }),
      })
      const { safeAddress } = await response.json()
      userAccount.setSafes([safeAddress])
      return true

    } catch (error) {
        console.error("Error deploying Safe:", error);
        throw error;
    }
}

export async function makeSafeTransferSingleSign(signer?: Signer): Promise<boolean> {
  try {
    const amount = ethers.utils.parseUnits("0.00001", "ether").toString();

    const userAccount = useUserStore.getState();
    const safes = userAccount.safes;
    const safe = safes[safes.length-1];

    if (safe) {
          const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer as Signer,
          });

          const safeSdk = await Safe.create({
            ethAdapter: ethAdapter,
            safeAddress: safe
          })
          //const safeSdk = await safeSdkOwner2.connect({ ethAdapter, safeAddress: safe })
          console.log(safe, "here")

          // for relayer purpose
          const safeTransactionData: MetaTransactionData[] = [];
          safeTransactionData.push({
            to: userAccount.address,
            value: amount,
            data: "0x",
            operation: OperationType.Call,
          });

          // Create a Safe transaction with the provided parameters
          const safeTransaction = await safeSdk.createTransaction({
            safeTransactionData,
          });
          console.log("here")

          const signedSafeTx = await safeSdk.signTransaction(safeTransaction);

          const txServiceUrl =
            "https://safe-transaction-gnosis-chain.safe.global/";
          const safeService = new SafeApiKit({
            txServiceUrl,
            ethAdapter: ethAdapter,
          });
          console.log("here")

          const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
          const executeTxResponse = await safeSdk.executeTransaction(
            safeTransaction
          );
          const receipt = await executeTxResponse.transactionResponse?.wait();
    }
    return true
  } catch (error) {
    console.error("Error deploying Safe:", error);
    throw error;
  }
}

export async function addSignAndChangeThreshold(signer?: Signer): Promise<boolean> {
  try {

    const userAccount = useUserStore.getState();
    const safes = userAccount.safes;
    const safe = safes[safes.length-1];

    if (safe) {

          const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer as Signer,
          });

          const safeSdk = await Safe.create({
            ethAdapter,
            safeAddress: safe,
          });

          const params: AddOwnerTxParams = {
            ownerAddress: "0xce15bb3758550e2feee57eb99a241d3762d9a34c",
            threshold: 2,
          };

          const safeTransaction = await safeSdk.createAddOwnerTx(params);

          // Create a Safe transaction with the provided parameters

          const signedSafeTx = await safeSdk.signTransaction(safeTransaction);

          const txServiceUrl =
            "https://safe-transaction-gnosis-chain.safe.global/";
          const safeService = new SafeApiKit({
            txServiceUrl,
            ethAdapter: ethAdapter,
          });

          const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
          const executeTxResponse = await safeSdk.executeTransaction(
            safeTransaction
          );
          const receipt = await executeTxResponse.transactionResponse?.wait();
    }
    return true;
  }
  catch (error) {
    console.error("Error deploying Safe:", error);
    throw error;
  }
}