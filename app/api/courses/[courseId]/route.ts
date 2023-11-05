import { NextRequest } from "next/server";
import {supabase} from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  const { data } = await supabase
    .from("courses")
    .select("*")
    .eq("id", params.courseId);
  return new Response(
    JSON.stringify({
      result: data && data.length > 0 ? data[0] : null,
    }),
    { status: 200 }
  );
}
