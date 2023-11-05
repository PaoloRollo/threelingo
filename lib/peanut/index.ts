import {ethers, Signer} from "ethers";
import peanut from "@squirrel-labs/peanut-sdk"
const CHAINID = 1442; // Polygon zkEVM Testnet

export enum CourseTokenID {
  WEB3_INTRODUCTION = 0,
  EOA_SMART_ACCOUNTS = 1,
  SCALING_ETHEREUM = 2,
}

/**
 * Generate a peanut link to claim the course completion NFT and return it to the user (to claim it)
 * @param signer - threelingo wallet, owner of the ERC1155 contract
 * @param tokenAddress - address of the ERC1155 contract
 * @param tokenId - id of the token (0 = Web3 Introduction, 1 = EOA and Smart Accounts)
 */
export const getPeanutLink = async (signer: Signer, tokenId: CourseTokenID) => {
  return await peanut.createLink({
    structSigner: {
      signer,
    },
    linkDetails: {
      chainId: CHAINID,
      tokenAddress: process.env.COURSE_TOKEN_ADDRESS,
      tokenAmount: 1,
      tokenType: 3,
      tokenId,
    },
  });
};

/**
 * Claim a peanut link and send the token to the recipient address
 * @param link - valid peanut link to claim, obtained through getPeanutLink
 * @param recipientAddress - address where to send the tokens
 */
export const claimPeanutLinkGasless = async (
  link: string,
  recipientAddress: string
) => {
  return await peanut.claimLinkGasless({
    link,
    recipientAddress,
    APIKey: process.env.NEXT_PUBLIC_PEANUT_API_KEY as string,
  });
};

export const claimCompletionNFT = async (address: string, courseId: CourseTokenID) => {
  const threelingoWallet = new ethers.Wallet(
      process.env.WALLET_PRIVATE_KEY as string,
      new ethers.providers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL
      )
  );
  const link = await getPeanutLink(threelingoWallet, courseId - 1 as any);
  await claimPeanutLinkGasless(link.link, address)
  try {
    await fetch(
        "https://notify.walletconnect.com/62066586b5adc509f3304c9312077975/notify",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.WALLETCONNECT_NOTIFY_API_SECRET}`,
          },
          body: JSON.stringify({
            notification: {
              type: "ae0cbbe9-a59f-4e21-ac28-fbf4fad2e11d", // Notification type ID copied from Cloud
              title: "Peanut NFT inbound!",
              body: "You just received an NFT from threelingo via Peanut Protocol!",
              icon: "https://threelingo.vercel.app/threelingo_logo.png", // optional
              url: "https://threelingo.vercel.app", // optional
            },
            accounts: [
              `eip155:1:${address}`, // CAIP-10 account ID
            ],
          }),
        }
    );
  } catch (error) {
    console.error(error);
  }
}