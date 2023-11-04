import { NextRequest } from "next/server";
import { ethers } from "ethers";
import { getPeanutLink } from "@/lib/peanut";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const body = await req.json();
  const threelingoWallet = new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY as string,
    new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_ZKEVM_TESTNET_RPC_URL
    )
  );
  const link = await getPeanutLink(threelingoWallet, params.courseId as any);

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
            `eip155:1:${body.address}`, // CAIP-10 account ID
          ],
        }),
      }
    );
  } catch (error) {
    console.error(error);
  }
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
