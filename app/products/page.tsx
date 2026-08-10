import Image from 'next/image';
import { getProducts } from '@/lib/products';
import ProductsGrid from '@/components/ProductsGrid';

export const metadata = {
  title: "Shop Products | CamRay's Prodigious Pomade",
  description: "Browse our full range of organic hair, scalp, skin, and lip care products. Handcrafted with love from $1–$20."
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '52vh', minHeight: '420px', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=1400&q=80" alt="Products" fill style={{ objectFit: 'cover', opacity: 0.25 }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 32px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Our Products</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white' }}>
            Handcrafted<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Organic Formulas</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '20px auto 0', lineHeight: '1.8' }}>
            All products are made to order, priced from $1 to $20. Natural ingredients. Real results.
          </p>
        </div>
      </section>

      {/* Loyalty Banner */}
      <div style={{ background: 'var(--gold)', padding: '16px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--charcoal)', letterSpacing: '0.05em' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--charcoal)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Loyalty Rewards: Buy 5 of any item — get the 6th one <strong>FREE!</strong>
        </p>
      </div>

      <ProductsGrid products={products} />
    </>
  );
}
