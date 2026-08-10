import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

const ProductInput = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().positive(),
  desc: z.string().min(1),
  img: z.string().min(1),
  badge: z.string().optional(),
  uses: z.array(z.string()).optional(),
  inStock: z.boolean().optional(),
});

export async function GET() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = ProductInput.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  await connectDB();
  const product = await Product.create(parsed.data);
  return NextResponse.json(product, { status: 201 });
}
