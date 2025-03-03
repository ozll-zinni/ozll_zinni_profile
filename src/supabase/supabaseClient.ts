import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export default supabaseClient;
