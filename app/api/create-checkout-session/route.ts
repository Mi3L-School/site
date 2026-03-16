import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
});

const PRICE_PER_PROGRAM = 500; // $5.00 in cents

export async function POST(req: Request) {
    try {
        const { programs, metadata, origin } = await req.json();

        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

        if (programs?.marchBreakAndDrone) {
            lineItems.push({
                price_data: {
                    currency: 'cad',
                    product_data: { name: 'March Break Classes (Tuition Only)' },
                    unit_amount: 30000, // $300.00 in cents
                },
                quantity: 1,
            });
        }

        if (programs?.v5rcCamp) {
            lineItems.push({
                price_data: {
                    currency: 'cad',
                    product_data: { name: 'V5RC Camp (March 17-19)' },
                    unit_amount: 20000, // $200.00 in cents
                },
                quantity: 1,
            });
        }

        if (lineItems.length === 0) {
            return NextResponse.json({ error: 'No programs selected.' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: lineItems,
            allow_promotion_codes: true,
            return_url: `${origin}/registration?session_id={CHECKOUT_SESSION_ID}`,
            metadata: metadata || {},
        });

        return NextResponse.json({ clientSecret: session.client_secret });
    } catch (err: any) {
        console.error('Checkout session error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
