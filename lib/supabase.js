import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/* Null-safe: if env vars are missing the forms show a friendly error
   instead of crashing the build. */
export const supabase = url && anon ? createClient(url, anon) : null;
