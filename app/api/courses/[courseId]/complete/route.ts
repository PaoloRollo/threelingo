// import { NextRequest } from "next/server";
// import { ethers } from "ethers";
// import { getPeanutLink } from "@/lib/peanut";

import { getPeanutLink } from "@/lib/peanut";
import { ethers } from "ethers";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const threelingoWallet = new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY as string,
    new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL
    )
  );
  const link = await getPeanutLink(threelingoWallet, params.courseId as any);
  return new Response(
    JSON.stringify({
      link,
    }),
    { status: 200 }
  );
}

// export async function GET(req: NextRequest) {
//   return new Response(
//     JSON.stringify({
//       result: "Hello world!",
//     }),
//     { status: 200 }
//   );
// }
