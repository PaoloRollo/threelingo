import { NextRequest } from "next/server";
import { ethers } from "ethers";
import { EthersAdapter, SafeFactory } from "@safe-global/protocol-kit";

export async function POST(req: NextRequest) {
  const { address } = await req.json();
  // polygon zkevm
  const provider = new ethers.providers.JsonRpcProvider({
    url: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_RPC_URL as string,
    skipFetchSetup: true,
  });
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
    owners: [address],
    threshold: 1,
  };
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Example: Generate a random integer between 1 and 100
  const customNonce = getRandomInt(1, 100).toString();

  const safe = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce: customNonce,
  });

  const safeAddress = await safe.getAddress();
  const transferAmount = ethers.utils.parseEther("0.0002");
  const tx = await signerOrProvider.sendTransaction({
    to: safeAddress,
    value: transferAmount,
  });
  await tx.wait();
  return new Response(
    JSON.stringify({
      safeAddress,
    }),
    { status: 200 }
  );
}
