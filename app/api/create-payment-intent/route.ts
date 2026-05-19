import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
    try {
        const { amount, metadata, promoCodeId } = await req.json();

        if (!amount || amount <= 0) {
            return NextResponse.json({ error: "Amount must be greater than zero" }, { status: 400 });
        }

        const paymentIntentParams: Stripe.PaymentIntentCreateParams = {
            amount: Math.round(amount * 100), // Stripe expects amount in cents
            currency: 'cad',
            metadata,
            automatic_payment_methods: {
                enabled: true,
            },
        };

        // Apply promotion code discount if provided
        if (promoCodeId) {
            (paymentIntentParams as any).discounts = [{ promotion_code: promoCodeId }];
        }

        const paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err: any) {
        console.error("Stripe Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
