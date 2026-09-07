import { createClient } from "@supabase/supabase-js";

// Read-only client, protected by Row Level Security. Safe to use anywhere,
// including in code that ends up in the browser bundle — it can only ever
// see the public data the RLS policies in 0001_init.sql expose (services,
// barbers, their weekly hours). It can never read or write `appointments`.
export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
