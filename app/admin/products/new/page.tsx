import ProductForm from '@/components/ProductForm';

export default function NewProductPage() {
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Add Product
      </h1>
      <ProductForm />
    </div>
  );
}
