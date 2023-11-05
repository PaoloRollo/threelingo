import { createClient } from "@supabase/supabase-js";
import {Database} from "./interfaces/database.types";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);
