import { providers } from "ethers";
import { PublicClient } from "viem";
import { WalletClient } from "viem";

export declare const toEthersJsonRpcProvider: (
  client: PublicClient
) => providers.JsonRpcProvider | null;

export declare const toEthersWeb3Provider: (
  client: PublicClient
) => providers.Web3Provider;

export declare const toEthersWeb3ProviderWithSigner: (
  walletClient: WalletClient
) => providers.Web3Provider;

export declare const toEthersWsProvider: (
  client: PublicClient
) => providers.WebSocketProvider | null;

export {};