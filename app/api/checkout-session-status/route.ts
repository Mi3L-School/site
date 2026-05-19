import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
});

export async function GET(req: Request) {
    try {
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
