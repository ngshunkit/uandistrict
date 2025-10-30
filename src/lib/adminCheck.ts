import { supabase } from "@/integrations/supabase/client";

/**
 * Server-side admin verification via edge function
 * This is more secure than direct client-side table queries
 */
export const verifyAdminStatus = async (): Promise<boolean> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return false;
    }

    const { data, error } = await supabase.functions.invoke('verify-admin', {
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });

    if (error) {
      console.error('Admin verification error:', error);
      return false;
    }

    return data?.isAdmin === true;
  } catch (error) {
    console.error('Failed to verify admin status:', error);
    return false;
  }
};
