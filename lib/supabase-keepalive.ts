import { supabase } from './supabase';

/**
 * Supabase Keepalive
 * 
 * Runs a simple SELECT 1 query periodically (based on traffic) 
 * to prevent the Supabase database from pausing on the free tier.
 * 
 * Frequency: ~10% of visits
 */
export async function supabaseKeepAlive() {
  // Only run 10% of the time to minimize overhead
  if (Math.random() >= 0.1) return;

  try {
    // Query the registrations table with a limit of 1 to minimize data transfer
    await supabase.from('registrations').select('id').limit(1);
    
    // For now, let's just log that we triggered it (visible in server logs).

    console.log('[Supabase Keepalive] Ping triggered');
  } catch (err) {
    // We don't want to crash the request if the ping fails
    console.error('[Supabase Keepalive] Error during ping:', err);
  }
}
