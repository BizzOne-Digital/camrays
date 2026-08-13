'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import type { PlainProduct } from '@/lib/products';

const categories = ['All', 'Hair Care', 'Skin Care', 'Scalp Care', 'Lip Care'];

export default function ProductsGrid({ products }: { products: PlainProduct[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [added, setAdded] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
  const { addItem } = useCart();

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: PlainProduct) => {
    if (product.variants.length) {
      const size = selectedSize[product.id] ?? product.variants[0].size;
      const variant = product.variants.find((v) => v.size === size) ?? product.variants[0];
      addItem({ productId: product.id, name: product.name, price: variant.price, size: variant.size });
    } else {
      addItem({ productId: product.id, name: product.name, price: product.price });
    }
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <>
      {/* Categories */}
      <section style={{ padding: '48px 32px 0', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: '600',
                  letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                  background: cat === activeCategory ? 'var(--crimson)' : 'transparent',
                  color: cat === activeCategory ? 'white' : 'var(--charcoal)',
                  border: cat === activeCategory ? '2px solid var(--crimson)' : '2px solid rgba(0,0,0,0.15)',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '48px 0 100px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--warm-gray)', padding: '60px 0' }}>
              No products in this category yet.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
              {filtered.map((product) => {
                const { id, name, category, price, desc, img, badge, uses, variants } = product;
                const currentSize = selectedSize[id] ?? variants[0]?.size;
                const currentPrice = variants.length ? (variants.find((v) => v.size === currentSize)?.price ?? variants[0].price) : price;
                return (
                  <div key={id} className="card-hover" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '1.2', overflow: 'hidden' }}>
                      <Image src={img} alt={name} fill style={{ objectFit: 'cover' }} />
                      {badge && (
                        <div style={{ position: 'absolute', top: '16px', left: '16px', background: badge === 'Bestseller' ? 'var(--crimson)' : badge === 'New' ? 'var(--charcoal)' : 'var(--gold)', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '100px' }}>
                          {badge}
                        </div>
                      )}
                      <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', padding: '6px 14px', borderRadius: '100px' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: '700', color: 'var(--crimson)' }}>{variants.length ? `From $${Math.min(...variants.map((v) => v.price))}` : `$${currentPrice}`}</span>
                      </div>
                    </div>
                    <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '8px' }}>{category}</div>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '12px' }}>{name}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--warm-gray)', lineHeight: '1.8', marginBottom: '20px', flex: 1 }}>{desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                        {uses.map((use) => (
                          <span key={use} style={{ fontSize: '11px', padding: '4px 10px', background: 'var(--off-white)', color: 'var(--warm-gray)', borderRadius: '100px', fontWeight: '500' }}>{use}</span>
                        ))}
                      </div>
                      {variants.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <select
                            value={currentSize}
                            onChange={(e) => setSelectedSize((s) => ({ ...s, [id]: e.target.value }))}
                            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '13px', flex: 1, marginRight: '12px' }}
                          >
                            {variants.map((v) => (
                              <option key={v.size} value={v.size}>{v.size} — ${v.price}</option>
                            ))}
                          </select>
                          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', color: 'var(--crimson)', fontSize: '16px' }}>${currentPrice}</span>
                        </div>
                      )}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn-primary"
                        style={{ justifyContent: 'center', border: 'none', cursor: 'pointer' }}
                      >
                        {added === id ? 'Added!' : 'Add to Cart'}
                        {added !== id && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section style={{ padding: '80px 32px', background: 'var(--charcoal)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Custom Orders</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
            Don&apos;t See What<br /><em style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>You&apos;re Looking For?</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', marginBottom: '36px' }}>
            We specialize in custom orders. Whether you need a specific scent, strength, or formulation — reach out and we&apos;ll create something just for you.
          </p>
          <Link href="/services" className="btn-primary">Explore Custom Services</Link>
        </div>
      </section>
    </>
  );
}
