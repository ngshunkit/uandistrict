-- Fix anonymous resume uploads by creating a shared applications folder

-- Drop ALL existing resume storage policies
DROP POLICY IF EXISTS "Authenticated users can upload resumes" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own resumes" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admins can view all resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admins can view resumes" ON storage.objects;
DROP POLICY IF EXISTS "Members can view resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete resumes" ON storage.objects;

-- Allow anyone to upload resumes to the applications/ folder
CREATE POLICY "Anyone can upload resumes to applications folder"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = 'applications'
);

-- Only admins can view resumes in the applications folder
CREATE POLICY "Admins can view resumes in applications folder"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = 'applications' AND
  has_role(auth.uid(), 'admin')
);

-- Only admins can delete resumes
CREATE POLICY "Admins can delete resumes from applications folder"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'resumes' AND
  (storage.foldername(name))[1] = 'applications' AND
  has_role(auth.uid(), 'admin')
);