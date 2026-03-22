import { NextResponse } from 'next/server';

const GAS_BOOKING_URL = process.env.GAS_BOOKING_URL;

export async function POST(req: Request) {
    if (!GAS_BOOKING_URL) {
        return NextResponse.json(
            { error: 'GAS_BOOKING_URL is not configured' },
            { status: 500 }
        );
    }

    try {
        const body = await req.json();

        const gasRes = await fetch(GAS_BOOKING_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!gasRes.ok) {
            throw new Error(`GAS responded with status ${gasRes.status}`);
        }

        const data = await gasRes.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Booking API error:', error);
        return NextResponse.json(
            { error: 'リクエストの処理に失敗しました' },
            { status: 500 }
        );
    }
}
