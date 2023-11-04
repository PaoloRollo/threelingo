import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import {sortAddressesByXP} from "@/lib/progresses";

export async function GET(req: NextRequest, res: NextResponse) {
    const { data } = await supabase
        .from("progresses")
        .select("address, course_id, current_section, current_unit, current_step");

    const leaderboard = sortAddressesByXP(data as any)
    return new Response(
        JSON.stringify(leaderboard),
        { status: 200 }
    );
}
