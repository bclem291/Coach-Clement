-- Supabase Schema for Coach Clement Website

-- 1. Courses Table
CREATE TABLE public.courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL, -- Used for the URL-friendly id (e.g., 'facebook-ads-training')
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    is_custom BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Testimonials (Reviews) Table
CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    image_url TEXT,
    review_text TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. App Configuration (Admin Content) Table
-- Used to store single-value configurations like the Coach's profile photo
CREATE TABLE public.app_config (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key TEXT UNIQUE NOT NULL, -- e.g., 'coach_photo_url'
    value TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Function to automatically update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Attach trigger to courses table
CREATE TRIGGER update_courses_modtime
    BEFORE UPDATE ON public.courses
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Attach trigger to app_config table
CREATE TRIGGER update_app_config_modtime
    BEFORE UPDATE ON public.app_config
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- ============================================================================
-- Row Level Security (RLS) Policies
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_config ENABLE ROW LEVEL SECURITY;

-- Allow public read access (so anyone can see courses, testimonials, and config)
CREATE POLICY "Public read access for courses" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Public read access for testimonials" ON public.testimonials FOR SELECT USING (is_approved = true);
CREATE POLICY "Public read access for app_config" ON public.app_config FOR SELECT USING (true);

-- NOTE: To restrict edits to only authenticated admins, you will need to create 
-- corresponding INSERT, UPDATE, and DELETE policies that check your auth schema, e.g.:
-- CREATE POLICY "Admin write access" ON public.courses FOR ALL USING (auth.role() = 'authenticated');
