import { Signer } from "ethers";
import * as peanut from "@squirrel-labs/peanut-sdk";

const CHAINID = 1442; // Polygon zkEVM Testnet

export enum CourseTokenID {
  WEB3_INTRODUCTION = 0,
  EOA_SMART_ACCOUNTS = 1,
  SCALING_ETHEREUM = 2
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
