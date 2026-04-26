/*
  # Portfolio Projects Database Schema

  ## Overview
  Creates a comprehensive system for managing Blumaa's portfolio projects including case studies,
  project details, images, and client testimonials.

  ## New Tables
  
  ### `projects`
  Main project information table
  - `id` (uuid, primary key) - Unique project identifier
  - `slug` (text, unique) - URL-friendly project identifier
  - `title` (text) - Project name
  - `client_name` (text) - Client company name
  - `project_type` (text) - Type of work (Branding, Rebranding, etc.)
  - `tagline` (text) - Short project description
  - `description` (text) - Full project description
  - `challenge` (text) - Problem/challenge faced
  - `solution` (text) - How Blumaa solved it
  - `results` (text) - Outcomes and impact
  - `year` (integer) - Project year
  - `industry` (text) - Client industry
  - `services` (text[]) - Array of services provided
  - `website_url` (text) - Client website URL
  - `featured` (boolean) - Whether to feature on homepage
  - `display_order` (integer) - Sort order for display
  - `hero_image_url` (text) - Main project image
  - `thumbnail_url` (text) - Thumbnail for grid view
  - `color_primary` (text) - Brand primary color
  - `color_secondary` (text) - Brand secondary color
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `project_images`
  Additional images for each project
  - `id` (uuid, primary key)
  - `project_id` (uuid, foreign key) - References projects table
  - `image_url` (text) - Image URL
  - `caption` (text) - Image description
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz)

  ### `project_metrics`
  Quantifiable project results
  - `id` (uuid, primary key)
  - `project_id` (uuid, foreign key)
  - `metric_label` (text) - e.g., "Brand Awareness"
  - `metric_value` (text) - e.g., "+300%"
  - `display_order` (integer)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access (anyone can view portfolio)
  - No write access from public (content managed by admins only)
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  client_name text NOT NULL,
  project_type text NOT NULL DEFAULT 'Branding',
  tagline text NOT NULL,
  description text NOT NULL,
  challenge text,
  solution text,
  results text,
  year integer NOT NULL,
  industry text,
  services text[] DEFAULT ARRAY[]::text[],
  website_url text,
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  hero_image_url text,
  thumbnail_url text,
  color_primary text,
  color_secondary text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_images table
CREATE TABLE IF NOT EXISTS project_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  image_url text NOT NULL,
  caption text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create project_metrics table
CREATE TABLE IF NOT EXISTS project_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  metric_label text NOT NULL,
  metric_value text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_project_images_project_id ON project_images(project_id);
CREATE INDEX IF NOT EXISTS idx_project_metrics_project_id ON project_metrics(project_id);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_metrics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view project images"
  ON project_images FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view project metrics"
  ON project_metrics FOR SELECT
  TO public
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for projects table
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
