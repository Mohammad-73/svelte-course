import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { Database } from "./lib/types/database.types";

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      safeGetSession: () => Promise<{
        session: Session | null;
        user: User | null;
      }>;
      session: Session | null;
      user: User | null;
    }
    interface PageData {
      session: Session | null;
    }
  }
}

export {};
