import { availableCourses } from "@/lib/courses";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return new Response(
    JSON.stringify({
      result: availableCourses.map((course) => ({ ...course, sections: [] })),
    }),
    { status: 200 }
  );
}
