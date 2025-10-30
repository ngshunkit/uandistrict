-- Create signup_requests table for pending approvals
CREATE TABLE public.signup_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  approved_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.signup_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit signup requests
CREATE POLICY "Anyone can submit signup requests"
ON public.signup_requests
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Only admins can view all signup requests
CREATE POLICY "Admins can view all signup requests"
ON public.signup_requests
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can update signup requests
CREATE POLICY "Admins can update signup requests"
ON public.signup_requests
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Only admins can delete signup requests
CREATE POLICY "Admins can delete signup requests"
ON public.signup_requests
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_signup_requests_updated_at
BEFORE UPDATE ON public.signup_requests
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes for better query performance
CREATE INDEX idx_signup_requests_status ON public.signup_requests(status);
CREATE INDEX idx_signup_requests_email ON public.signup_requests(email);
CREATE INDEX idx_signup_requests_created_at ON public.signup_requests(created_at DESC);