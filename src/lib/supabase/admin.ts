import "server-only";
import { createClient } from "@supabase/supabase-js";

// Full-access client using the service_role key, which bypasses Row Level
// Security entirely. The `server-only` import makes it a build error to
// ever import this file from a Client Component — it must stay confined to
// Route Handlers and other server-side code (see src/app/api/**).
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
