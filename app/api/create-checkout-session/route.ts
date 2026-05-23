import { NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        throw new Error('Missing STRIPE_SECRET_KEY');
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

        const halfDayCount = selectedWeeks.filter((week: SelectedWeek) => week.type === 'halfday').length;
        const fullDayCount = selectedWeeks.filter((week: SelectedWeek) => week.type === 'fullday').length;

        if (programs?.summerCamp?.selected && selectedWeeks.length > 0) {
            if (halfDayCount > 0) {
                lineItems.push({
                    price_data: {
                        currency: 'cad',
                        product_data: {
                            name: `Summer Camp Half Day (${halfDayCount} week${halfDayCount > 1 ? 's' : ''})`,
                        },
                        unit_amount: 20000,
                    },
                    quantity: halfDayCount,
                });
            }
            if (fullDayCount > 0) {
                lineItems.push({
                    price_data: {
                        currency: 'cad',
                        product_data: {
                            name: `Summer Camp Full Day (${fullDayCount} week${fullDayCount > 1 ? 's' : ''})`,
                        },
                        unit_amount: 35000,
                    },
                    quantity: fullDayCount,
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
