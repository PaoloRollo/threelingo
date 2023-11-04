import {NextRequest} from "next/server";
import {ethers} from "ethers";
import {EthersAdapter, SafeFactory} from "@safe-global/protocol-kit";

export async function POST(
   req: NextRequest
 ) {
    const {address} = await req.json();
    // polygon zkevm
    const provider = new ethers.providers.JsonRpcProvider({
        url: process.env.NEXT_PUBLIC_POLYGON_ZKEVM_RPC_URL as string,
        skipFetchSetup: true
    })
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

    const safe = await safeFactory.deploySafe({ safeAccountConfig });
    console.log("deploy")
    const safeAddress = await safe.getAddress();
    return new Response(
        JSON.stringify({
            safeAddress
        }),
        { status: 404 }
    );
}