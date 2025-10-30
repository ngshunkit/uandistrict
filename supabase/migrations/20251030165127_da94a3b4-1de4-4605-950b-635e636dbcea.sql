-- Fix INPUT_VALIDATION: Add database constraints for length limits

-- Contact submissions constraints
ALTER TABLE contact_submissions 
  ADD CONSTRAINT name_length CHECK (length(name) <= 100),
  ADD CONSTRAINT email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT phone_length CHECK (length(phone) <= 20),
  ADD CONSTRAINT message_length CHECK (length(message) <= 2000);

-- Signup requests constraints  
ALTER TABLE signup_requests
  ADD CONSTRAINT signup_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT signup_name_length CHECK (length(full_name) <= 100),
  ADD CONSTRAINT signup_phone_length CHECK (length(phone) <= 20),
  ADD CONSTRAINT signup_message_length CHECK (length(message) <= 1000);

-- Profiles constraints
ALTER TABLE profiles
  ADD CONSTRAINT profile_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT profile_name_length CHECK (length(full_name) <= 100),
  ADD CONSTRAINT profile_phone_length CHECK (length(phone) <= 20);