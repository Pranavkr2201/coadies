import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctahfqoydzseunendckk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YWhmcW95ZHpzZXVuZW5kY2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDI1NTUsImV4cCI6MjA2NTU3ODU1NX0.7cxgjT3xIAoTVlGGhGKYH1SCDAZ9UIMIUZfArv-dPps';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const SUPABASE_INTEGRATION_MESSAGE = "Supabase is connected! You can now use Supabase features.";