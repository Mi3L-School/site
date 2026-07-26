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
        throw new Error('Missing Stripe secret key. Set STRIPE_SECRET_KEY (or another supported environment variable) before creating checkout sessions.');
    }
    return new Stripe(secretKey, {
        apiVersion: '2026-02-25.clover',
    });
}

const PRICE_PER_PROGRAM = 500; // $5.00 in cents

export async function POST(req: Request) {
    try {
        const stripe = getStripe();
        const { programs, metadata, origin } = await req.json();

        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

        if (programs?.teamTraining) {
            lineItems.push({
                price_data: {
                    currency: 'cad',
                    product_data: { name: 'Aerial Drone Weekly Team Training (5 Weeks)' },
                    unit_amount: 45000, // $450.00 in cents
                },
                quantity: 1,
            });
        }

        if (programs?.vexTraining) {
            lineItems.push({
                price_data: {
                    currency: 'cad',
                    product_data: { name: 'VEX V5 Robotics Training (10 Courses)' },
                    unit_amount: 40000, // $400.00 in cents
                },
                quantity: 1,
            });
        }

        const summerCampWeeks = Array.isArray(programs?.summerCamp?.weeks)
            ? programs.summerCamp.weeks
            : [];

        type SelectedWeek = {
            id: string;
            label: string;
            type: 'halfday' | 'fullday';
        };

        const selectedWeeks: SelectedWeek[] = summerCampWeeks
            .map((week: any) => {
                if (typeof week === 'string') {
                    return {
                        id: week,
                        label: week,
                        type: (programs?.summerCamp?.type as 'halfday' | 'fullday') || 'halfday',
                    };
                }
                return {
                    id: week.id,
                    label: week.label || week.id,
                    type: (week.type as 'halfday' | 'fullday') || 'halfday',
                };
            })
            .filter(Boolean) as SelectedWeek[];

        // Aug 4-7 (week2) is a 4-day week (no Monday), so it's priced lower than the standard 5-day weeks.
        const SHORT_SUMMER_CAMP_WEEK_IDS = ['week2'];
        // Jul 27-31 (week1) is a single 1pm-4pm afternoon session, so it's always billed at the half-day rate.
        const HALF_DAY_ONLY_WEEK_IDS = ['week1'];
        const getWeekRateCents = (weekId: string, type: 'halfday' | 'fullday') => {
            const effectiveType = HALF_DAY_ONLY_WEEK_IDS.includes(weekId) ? 'halfday' : type;
            const isShortWeek = SHORT_SUMMER_CAMP_WEEK_IDS.includes(weekId);
            if (effectiveType === 'halfday') return isShortWeek ? 16000 : 20000;
            return isShortWeek ? 28000 : 35000;
        };

        if (programs?.summerCamp?.selected && selectedWeeks.length > 0) {
            const groups = new Map<string, { type: SelectedWeek['type']; unitAmount: number; count: number }>();
            for (const week of selectedWeeks) {
                const unitAmount = getWeekRateCents(week.id, week.type);
                const effectiveType: SelectedWeek['type'] = HALF_DAY_ONLY_WEEK_IDS.includes(week.id) ? 'halfday' : week.type;
                const key = `${effectiveType}-${unitAmount}`;
                const existing = groups.get(key);
                if (existing) {
                    existing.count += 1;
                } else {
                    groups.set(key, { type: effectiveType, unitAmount, count: 1 });
                }
            }

            for (const { type, unitAmount, count } of groups.values()) {
                const dayLabel = type === 'halfday' ? 'Half Day' : 'Full Day';
                lineItems.push({
                    price_data: {
                        currency: 'cad',
                        product_data: {
                            name: `Summer Camp ${dayLabel} (${count} week${count > 1 ? 's' : ''})`,
                        },
                        unit_amount: unitAmount,
                    },
                    quantity: count,
                });
            }
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
