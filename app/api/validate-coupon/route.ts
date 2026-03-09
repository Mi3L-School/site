import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
    try {
        const { code, amount } = await req.json();

        if (!code || typeof code !== 'string') {
            return NextResponse.json({ valid: false, error: 'No code provided.' }, { status: 400 });
        }

        // Look up the promotion code by its user-facing code string
        const promoCodes = await stripe.promotionCodes.list({
            code: code.trim().toUpperCase(),
            active: true,
            limit: 1,
        });

        if (promoCodes.data.length === 0) {
            return NextResponse.json({ valid: false, error: 'Invalid or expired coupon code.' });
        }

        const promoCode = promoCodes.data[0];
        const coupon = promoCode.coupon;

        // Check coupon is still valid
        if (!coupon.valid) {
            return NextResponse.json({ valid: false, error: 'This coupon is no longer valid.' });
        }

        // Calculate discount
        let discountAmount = 0;
        let discountType: 'percent' | 'fixed' = 'percent';
        let discountValue = 0;

        if (coupon.percent_off) {
            discountType = 'percent';
            discountValue = coupon.percent_off;
            discountAmount = (amount * coupon.percent_off) / 100;
        } else if (coupon.amount_off) {
            discountType = 'fixed';
            discountValue = coupon.amount_off / 100; // convert cents to dollars
            discountAmount = Math.min(coupon.amount_off / 100, amount);
        }

        const finalAmount = Math.max(0, amount - discountAmount);

        return NextResponse.json({
            valid: true,
            promoCodeId: promoCode.id,
            discountType,
            discountValue,
            discountAmount: parseFloat(discountAmount.toFixed(2)),
            finalAmount: parseFloat(finalAmount.toFixed(2)),
            couponName: coupon.name || code.trim().toUpperCase(),
        });
    } catch (err: any) {
        console.error('Coupon validation error:', err);
        return NextResponse.json({ valid: false, error: 'Failed to validate coupon.' }, { status: 500 });
    }
}
