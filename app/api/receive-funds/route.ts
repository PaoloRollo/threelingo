import { NextRequest } from "next/server";
import { ethers } from "ethers";
import { EthersAdapter, SafeFactory } from "@safe-global/protocol-kit";

export async function POST(req: NextRequest) {
    const { address } = await req.json();
    // polygon zkevm
    const provider = new ethers.providers.JsonRpcProvider({
        url: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL as string,
        skipFetchSetup: true,
    });
    const wallet = new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY as string,
        provider
    );
    // Ether amount to send
    const amountInEther = '0.005'

    // Create a transaction object
    let tx = {
        to: address,
        // Convert currency unit from ether to wei
        value: ethers.utils.parseEther(amountInEther)
    }

    const txExec = await wallet.sendTransaction(tx);

    await txExec.wait()

    return new Response(
        JSON.stringify({
            txHash: txExec.hash,
        }),
        { status: 200 }
    );
}
