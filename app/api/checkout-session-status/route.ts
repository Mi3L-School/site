import { NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
    const secretKey = [
        process.env.STRIPE_SECRET_KEY,
        process.env.STRIPE_API_KEY,
        process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
        process.env.SUPABASE_STRIPE_SECRET_KEY,
        process.env.SUPABASE_ENV_STRIPE_SECRET_KEY,
    ].find((value) => typeof value === 'string' && value.trim())?.trim();

    if (!secretKey) {
        throw new Error('Missing Stripe secret key. Set STRIPE_SECRET_KEY (or another supported environment variable) before checking session status.');
    }
    return new Stripe(secretKey, {
        apiVersion: '2026-02-25.clover',
    });
}

export async function GET(req: Request) {
    try {
        const stripe = getStripe();
        const { searchParams } = new URL(req.url);
        const sessionId = searchParams.get('session_id');

        if (!sessionId) {
            return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.retrieve(sessionId);

        return NextResponse.json({
            status: session.status,
            paymentStatus: session.payment_status,
            paymentIntentId: session.payment_intent,
            amountTotal: session.amount_total,
        });
    } catch (err: any) {
        console.error('Session status error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
