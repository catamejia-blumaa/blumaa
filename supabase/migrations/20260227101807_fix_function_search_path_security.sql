/*
  # Fix Function Search Path Security Issue

  ## Security Fix
  - Drop and recreate the `update_updated_at_column` function with a stable search_path
  - This prevents potential SQL injection attacks through search_path manipulation

  ## Changes
  1. Drop trigger first
  2. Drop the existing function
  3. Recreate function with SECURITY DEFINER and explicit search_path set to 'public'
  4. Recreate the trigger
*/

-- Drop the trigger first
DROP TRIGGER IF EXISTS update_projects_updated_at ON public.projects;

-- Drop the existing function
DROP FUNCTION IF EXISTS public.update_updated_at_column();

-- Recreate with proper security settings
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
