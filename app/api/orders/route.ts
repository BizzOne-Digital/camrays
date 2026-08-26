import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';
import { sendOrderNotification } from '@/lib/email';

const OrderInput = z.object({
  customer: z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    address: z.string().min(1),
  }),
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        name: z.string().min(1),
        price: z.number().positive(),
        qty: z.number().int().positive(),
        size: z.string().optional(),
        scent: z.string().optional(),
      })
    )
    .min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = OrderInput.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const total = parsed.data.items.reduce((sum, item) => sum + item.price * item.qty, 0);

  await connectDB();
  const order = await Order.create({ ...parsed.data, total });

  sendOrderNotification({
    orderId: order._id.toString(),
    customer: parsed.data.customer,
    items: parsed.data.items,
    total,
  }).catch((err) => console.error('Order notification email failed:', err));

  return NextResponse.json(order, { status: 201 });
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const status = req.nextUrl.searchParams.get('status');
  await connectDB();
  const filter = status ? { status } : {};
  const orders = await Order.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json(orders);
}
