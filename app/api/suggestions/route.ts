import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const suggestions = await prisma.suggestion.findMany();

    return NextResponse.json({ data: suggestions });
}

export async function POST(request: Request) {
    const res = await request.json();
    const suggestion = await prisma.suggestion.create({
        data: {
            title: res.title as string,
            description: res.description as string,
            user_email: res.user_email as string,
        },
    });
    return NextResponse.json({ data: suggestion });
}
