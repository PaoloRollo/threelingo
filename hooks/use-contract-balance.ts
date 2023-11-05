import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {useUserStore} from "@/lib/store/user-store";
import {CourseTokenID} from "@/lib/peanut";

function useContractBalance(contractAddress: string) {
  const [balance, setBalance] = useState<string | null>(null);
  const address = useUserStore((state) => state.address);
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL
  );

  useEffect(() => {
    async function fetchBalance() {
      if (contractAddress) {
        try {
          const contract = new ethers.Contract(
            contractAddress,
            [
              "function balanceOfBatch(address[], uint256[]) view returns (uint256[])",
            ],
            provider
          );
          const balance = await contract.balanceOfBatch(
            [address, address],
            [CourseTokenID.WEB3_INTRODUCTION, CourseTokenID.EOA_SMART_ACCOUNTS]
          );
          setBalance(balance.toString());
          console.log(balance.toString());
        } catch (error) {
          console.error("Error fetching balance:", error);
          setBalance(null);
        }
      }
    }

    fetchBalance();
  }, [address, contractAddress]);

  return balance
    ? balance.split(",").map((n, index) => ({
        tokenId: index,
        amount: parseInt(n),
      }))
    : [];
}

export default useContractBalance;
