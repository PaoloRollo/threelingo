import { NextRequest } from "next/server";
import {claimCompletionNFT} from "@/lib/peanut";

export async function POST(
  req: NextRequest,
) {
  await claimCompletionNFT("0x1358155a15930f89eBc787a34Eb4ccfd9720bC62", 2)
  return new Response(
    JSON.stringify({
      message: "DONE"
    }),
    { status: 200 }
  );
}
