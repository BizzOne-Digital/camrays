import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import ProductForm from '@/components/ProductForm';
import { notFound } from 'next/navigation';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  const product = await Product.findById(id).lean();
  if (!product) notFound();

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Edit Product
      </h1>
      <ProductForm
        productId={id}
        initial={{
          id,
          name: product.name,
          category: product.category,
          price: product.price,
          desc: product.desc,
          img: product.img,
          badge: product.badge,
          uses: product.uses,
          inStock: product.inStock,
          variants: product.variants ?? [],
        }}
      />
    </div>
  );
}
