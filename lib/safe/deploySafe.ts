
 import { ethers } from "ethers";
 import Safe, {
   EthersAdapter,
   SafeFactory,
   getSafeContract,
   AddOwnerTxParams,
 } from "@safe-global/protocol-kit";
 import { toEthersWeb3ProviderWithSigner } from "./providers-wtf";
 import { getPublicClient, getWalletClient } from "wagmi/actions";
 import {
   MetaTransactionData,
   OperationType,
 } from "@safe-global/safe-core-sdk-types";
 import SafeApiKit from "@safe-global/api-kit";
 import { GelatoRelayPack } from "@safe-global/relay-kit";
 import { RelayTransaction } from "@safe-global/safe-core-sdk-types";

 async function deploySafeAndReturnAddress(
   walletAddress: string,
   receiveFunds: boolean
 ): Promise<string> {
   try {
     const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL
     );

     const signerOrProvider = new ethers.Wallet(
       process.env.WALLET_PRIVATE_KEY as string,
       provider
     );

     const ethAdapterOwner1 = new EthersAdapter({
       ethers,
       signerOrProvider,
     });

     const safeFactory = await SafeFactory.create({
       ethAdapter: ethAdapterOwner1,
     });

     const safeAccountConfig = {
       owners: [walletAddress],
       threshold: 1,
     };

     const safe = await safeFactory.deploySafe({ safeAccountConfig });
     const safeAddress = await safe.getAddress();

     if (receiveFunds) {
       // Transfer 0.1 ETH to the Safe address
       const transferAmount = ethers.utils.parseEther("0.1");
       const tx = await signerOrProvider.sendTransaction({
         to: safeAddress,
         value: transferAmount,
       });
       await tx.wait();
     }

     return safeAddress;
   } catch (error) {
     console.error("Error deploying Safe:", error);
     throw error;
   }
 }

 async function makeSafeTransferSingleSign(
   addressReceiver: string,
   relayer: boolean
 ) {
   const amount = ethers.utils.parseUnits("0.001", "ether").toString();
   const chainId = 1442;

   const walletClient = await getWalletClient({ chainId });

    //TODO Check if we have a safe for this user on the db
   const safe = userAccount.safes.find((safe) => safe.chainId === chainId);

   if (safe) {
     const { address: safeAddress, id: safeId } = safe;

     if (walletClient !== null) {
       const ethersProvider = toEthersWeb3ProviderWithSigner(walletClient);

       if (ethersProvider) {
         const newSigner = ethersProvider.getSigner();

         const ethAdapter = new EthersAdapter({
           ethers,
           signerOrProvider: newSigner,
         });

         const safeSDK = await Safe.create({
           ethAdapter,
           safeAddress,
         });

          //for relayer purpose
         const safeTransactionData: MetaTransactionData[] = [];
         safeTransactionData.push({
           to: addressReceiver,
           value: amount,
           data: "0x",
           operation: OperationType.Call,
         });

          //Create a Safe transaction with the provided parameters
         const safeTransaction = await safeSDK.createTransaction({
           safeTransactionData,
         });

         const signedSafeTx = await safeSDK.signTransaction(safeTransaction);

         if (relayer) {
           const safeSingletonContract = await getSafeContract({
             ethAdapter,
             safeVersion: await safeSDK.getContractVersion(),
           });

           const encodedTransaction = safeSingletonContract.encode(
             "execTransaction",
             [
               signedSafeTx.data.to,
               signedSafeTx.data.value,
               signedSafeTx.data.data,
               signedSafeTx.data.operation,
               signedSafeTx.data.safeTxGas,
               signedSafeTx.data.baseGas,
               signedSafeTx.data.gasPrice,
               signedSafeTx.data.gasToken,
               signedSafeTx.data.refundReceiver,
               signedSafeTx.encodedSignatures(),
             ]
           );
           const relayKit = new GelatoRelayPack(
             process.env.GELATO_RELAY_API_KEY!
           );

           const relayTransaction: RelayTransaction = {
             target: safe.address,
             encodedTransaction,
             chainId,
             options: {
               gasLimit: "100000",
               isSponsored: true,
             },
           };

           const response = await relayKit.relayTransaction(relayTransaction);

           return response.taskId;
         } else if (!relayer) {
           const txServiceUrl =
             "https:safe-transaction-gnosis-chain.safe.global/";
           const safeService = new SafeApiKit({
             txServiceUrl,
             ethAdapter: ethAdapter,
           });

           const safeTxHash = await safeSDK.getTransactionHash(safeTransaction);
           const executeTxResponse = await safeSDK.executeTransaction(
             safeTransaction
           );
           const receipt = await executeTxResponse.transactionResponse?.wait();
         }
       }
     }
   }
 }

 async function addSignAndChangeThreashold(
   addressSigner: string,
   relayer: boolean
 ) {
   const chainId = 1442;

   const walletClient = await getWalletClient({ chainId });

    //TODO Check if we have a safe for this user on the db
   const safe = userAccount.safes.find((safe) => safe.chainId === chainId);

   if (safe) {
     const { address: safeAddress, id: safeId } = safe;

     if (walletClient !== null) {
       const ethersProvider = toEthersWeb3ProviderWithSigner(walletClient);

       if (ethersProvider) {
         const newSigner = ethersProvider.getSigner();

         const ethAdapter = new EthersAdapter({
           ethers,
           signerOrProvider: newSigner,
         });

         const safeSDK = await Safe.create({
           ethAdapter,
           safeAddress,
         });

         const params: AddOwnerTxParams = {
           ownerAddress: addressSigner,
           threshold: 2,
         };

         const safeTransaction = await safeSDK.createAddOwnerTx(params);

          //Create a Safe transaction with the provided parameters

         const signedSafeTx = await safeSDK.signTransaction(safeTransaction);

         if (relayer) {
           const safeSingletonContract = await getSafeContract({
             ethAdapter,
             safeVersion: await safeSDK.getContractVersion(),
           });

           const encodedTransaction = safeSingletonContract.encode(
             "execTransaction",
             [
               signedSafeTx.data.to,
               signedSafeTx.data.value,
               signedSafeTx.data.data,
               signedSafeTx.data.operation,
               signedSafeTx.data.safeTxGas,
               signedSafeTx.data.baseGas,
               signedSafeTx.data.gasPrice,
               signedSafeTx.data.gasToken,
               signedSafeTx.data.refundReceiver,
               signedSafeTx.encodedSignatures(),
             ]
           );
           const relayKit = new GelatoRelayPack(
             process.env.GELATO_RELAY_API_KEY!
           );

           const relayTransaction: RelayTransaction = {
             target: safe.address,
             encodedTransaction,
             chainId,
             options: {
               gasLimit: "100000",
               isSponsored: true,
             },
           };

           const response = await relayKit.relayTransaction(relayTransaction);

           return response.taskId;
         } else if (!relayer) {
           const txServiceUrl =
             "https:safe-transaction-gnosis-chain.safe.global/";
           const safeService = new SafeApiKit({
             txServiceUrl,
             ethAdapter: ethAdapter,
           });

           const safeTxHash = await safeSDK.getTransactionHash(safeTransaction);
           const executeTxResponse = await safeSDK.executeTransaction(
             safeTransaction
           );
           const receipt = await executeTxResponse.transactionResponse?.wait();
         }
       }
     }
   }
 }
