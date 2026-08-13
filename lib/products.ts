import { connectDB } from '@/lib/mongodb';
import Product, { IProduct } from '@/models/Product';

export type PlainProduct = Omit<IProduct, '_id' | 'createdAt' | 'updatedAt'> & { id: string };

export async function getProducts(): Promise<PlainProduct[]> {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();
  return products.map((p) => ({
    id: p._id.toString(),
    name: p.name,
    category: p.category,
    price: p.price,
    desc: p.desc,
    img: p.img,
    badge: p.badge,
    uses: p.uses,
    inStock: p.inStock,
    variants: p.variants ?? [],
  }));
}
