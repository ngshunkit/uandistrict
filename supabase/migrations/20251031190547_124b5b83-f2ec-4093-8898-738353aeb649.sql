-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  cover_letter TEXT,
  resume_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Admins can view all applications
CREATE POLICY "Admins can view all applications" 
ON public.job_applications 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Members can view all applications
CREATE POLICY "Members can view all applications" 
ON public.job_applications 
FOR SELECT 
USING (has_role(auth.uid(), 'member'::app_role));

-- Anyone can submit applications
CREATE POLICY "Anyone can submit applications" 
ON public.job_applications 
FOR INSERT 
WITH CHECK (true);

-- Admins can update applications
CREATE POLICY "Admins can update applications" 
ON public.job_applications 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete applications
CREATE POLICY "Admins can delete applications" 
ON public.job_applications 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_job_applications_updated_at
BEFORE UPDATE ON public.job_applications
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false);

-- Storage policies for resumes
CREATE POLICY "Anyone can upload resumes" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Admins can view resumes" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Members can view resumes" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes' AND has_role(auth.uid(), 'member'::app_role));