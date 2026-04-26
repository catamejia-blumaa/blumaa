import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  slug: string;
  title: string;
  client_name: string;
  project_type: string;
  tagline: string;
  description: string;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  year: number;
  industry: string | null;
  services: string[];
  website_url: string | null;
  featured: boolean;
  display_order: number;
  hero_image_url: string | null;
  thumbnail_url: string | null;
  color_primary: string | null;
  color_secondary: string | null;
  created_at: string;
  updated_at: string;
};

export type ProjectImage = {
  id: string;
  project_id: string;
  image_url: string;
  caption: string | null;
  display_order: number;
  created_at: string;
};

export type ProjectMetric = {
  id: string;
  project_id: string;
  metric_label: string;
  metric_value: string;
  display_order: number;
  created_at: string;
};
