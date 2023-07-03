import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return NextResponse.json({ data });
}

export async function POST() {
    return NextResponse.json({ data: {} });
}
