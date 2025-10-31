-- Fix 1: Drop the overly permissive member access policy for job applications
DROP POLICY IF EXISTS "Members can view all applications" ON public.job_applications;

-- Fix 2: Update storage bucket policy to restrict resume uploads to authenticated users only
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;

-- Create new policy requiring authentication for resume uploads
CREATE POLICY "Authenticated users can upload resumes"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow authenticated users to update their own resumes
CREATE POLICY "Users can update their own resumes"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to delete their own resumes
CREATE POLICY "Users can delete their own resumes"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow admins to view all resumes
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Admins can view all resumes'
  ) THEN
    CREATE POLICY "Admins can view all resumes"
    ON storage.objects
    FOR SELECT
    TO authenticated
    USING (
      bucket_id = 'resumes' AND
      EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = auth.uid() AND role = 'admin'
      )
    );
  END IF;
END $$;