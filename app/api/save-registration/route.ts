import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

import { sendRegistrationReceipt } from '@/lib/email';

// Use service role key for admin-level bypass of RLS if necessary, 
// but for public registration, anon key + RLS is better.
// However, since we want a "service" to save this, we use the env vars.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            student,
            guardian1,
            guardian2,
            emergency,
            programs,
            paymentIntentId,
            amount,
            registrationId,
            status = paymentIntentId ? 'paid' : 'pending_payment',
        } = body;

        const summerCampWeeks = Array.isArray(programs?.summerCamp?.weeks)
            ? programs.summerCamp.weeks.map((week: any) => ({
                weekNumber: week?.id || null,
                weekLabel: week?.label || null,
                dayType: week?.type === 'fullday' ? 'fullday' : 'halfday',
            }))
            : [];

        const registrationRecord = {
            student_first_name: student.firstName,
            student_middle_name: student.middleName,
            student_last_name: student.lastName,
            student_dob: student.dob,
            student_gender: student.gender,
            student_address: student.address,
            student_address2: student.address2,
            student_city: student.city,
            student_province: student.province,
            student_postal_code: student.postalCode,
            guardian1_first_name: guardian1.firstName,
            guardian1_last_name: guardian1.lastName,
            guardian1_relationship: guardian1.relationship,
            guardian1_home_phone: guardian1.homePhone,
            guardian1_cell_phone: guardian1.cellPhone,
            guardian1_email: guardian1.email,
            guardian2_first_name: guardian2?.firstName || "",
            guardian2_last_name: guardian2?.lastName || "",
            guardian2_relationship: guardian2?.relationship || "",
            guardian2_home_phone: guardian2?.homePhone || "",
            guardian2_cell_phone: guardian2?.cellPhone || "",
            guardian2_email: guardian2?.email || "",
            emergency1_first_name: emergency?.firstName || "",
            emergency1_last_name: emergency?.lastName || "",
            emergency1_home_phone: emergency?.homePhone || "",
            emergency1_cell_phone: emergency?.cellPhone || "",
            emergency1_email: emergency?.email || "",
            emergency2_first_name: "", // Not collected in current frontend
            emergency2_last_name: "",
            emergency2_home_phone: "",
            emergency2_cell_phone: "",
            emergency2_email: "",
            program_summer_camp: Boolean(programs?.summerCamp?.selected),
            summer_camp_weeks: summerCampWeeks,
            program_team_training: programs?.teamTraining || false,
            program_vex_v5_robotics: programs?.vexTraining || false,
            payment_intent_id: paymentIntentId || null,
            amount_paid: amount !== undefined ? amount : null,
            status,
        };

        if (!supabase) {
            console.warn('Supabase credentials are not configured; skipping persistence for registration confirmation.');
            return NextResponse.json({
                success: true,
                registrationId: registrationId || null,
                skippedPersistence: true,
                message: 'Registration confirmed locally, but Supabase persistence is unavailable because credentials are not configured.',
            });
        }

        let request;
        if (registrationId) {
            request = supabase
                .from('registrations')
                .update(registrationRecord)
                .eq('id', registrationId)
                .select('id');
        } else {
            request = supabase
                .from('registrations')
                .insert([registrationRecord])
                .select('id');
        }

        const { data, error } = await request;

        if (error) throw error;

        const savedRegistration = data?.[0];

        // Send confirmation email via Resend once payment is complete
        if (paymentIntentId && guardian1?.email) {
            await sendRegistrationReceipt({
                email: guardian1.email,
                studentName: `${student.firstName} ${student.lastName}`,
                programs: programs,
                amount: amount,
            });
        }

        return NextResponse.json({ success: true, registrationId: savedRegistration?.id || registrationId || null, data });
    } catch (err: any) {
        console.error('Save Registration Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
