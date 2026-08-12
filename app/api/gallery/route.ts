import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import { connectDB } from '@/lib/mongodb';
import GalleryImage from '@/models/Gallery';

const GalleryInput = z.object({
  img: z.string().min(1),
  alt: z.string().min(1),
  label: z.string().min(1),
  span: z.string().optional(),
});

export async function GET() {
  await connectDB();
  const images = await GalleryImage.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = GalleryInput.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  await connectDB();
  const image = await GalleryImage.create(parsed.data);
  return NextResponse.json(image, { status: 201 });
}
