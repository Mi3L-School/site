-- Create the registrations table
CREATE TABLE registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    student_first_name TEXT NOT NULL,
    student_middle_name TEXT,
    student_last_name TEXT NOT NULL,
    student_dob TEXT NOT NULL,
    student_gender TEXT NOT NULL,
    student_address TEXT NOT NULL,
    student_address2 TEXT,
    student_city TEXT NOT NULL,
    student_province TEXT NOT NULL,
    student_postal_code TEXT NOT NULL,
    guardian1_first_name TEXT NOT NULL,
    guardian1_last_name TEXT NOT NULL,
    guardian1_relationship TEXT NOT NULL,
    guardian1_home_phone TEXT,
    guardian1_cell_phone TEXT NOT NULL,
    guardian1_email TEXT NOT NULL,
    guardian2_first_name TEXT,
    guardian2_last_name TEXT,
    guardian2_relationship TEXT,
    guardian2_home_phone TEXT,
    guardian2_cell_phone TEXT,
    guardian2_email TEXT,
    emergency1_first_name TEXT NOT NULL,
    emergency1_last_name TEXT NOT NULL,
    emergency1_home_phone TEXT,
    emergency1_cell_phone TEXT NOT NULL,
    emergency1_email TEXT NOT NULL,
    emergency2_first_name TEXT NOT NULL,
    emergency2_last_name TEXT NOT NULL,
    emergency2_home_phone TEXT,
    emergency2_cell_phone TEXT NOT NULL,
    emergency2_email TEXT,
    program_aerial_drone BOOLEAN DEFAULT FALSE,
    program_v5rc BOOLEAN DEFAULT FALSE,
    program_vex_v5_robotics BOOLEAN DEFAULT FALSE,
    payment_intent_id TEXT,
    amount_paid DECIMAL(10, 2),
    status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all access for the service role
CREATE POLICY "Service Role Full Access" ON registrations 
FOR ALL USING (auth.role() = 'service_role');
