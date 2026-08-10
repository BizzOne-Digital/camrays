'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { PlainProduct } from '@/lib/products';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<PlainProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.map((p: PlainProduct & { _id: string }) => ({ ...p, id: p._id }))))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)' }}>
          Products
        </h1>
        <Link href="/admin/products/new" className="btn-primary">+ Add Product</Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p style={{ color: 'var(--warm-gray)' }}>No products yet. Add your first one.</p>
      ) : (
        <div style={{ background: 'white', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          {products.map((p) => (
            <div key={p.id} style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong>{p.name}</strong>
                <span style={{ color: 'var(--warm-gray)', marginLeft: '12px', fontSize: '13px' }}>{p.category} · ${p.price}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href={`/admin/products/${p.id}/edit`} style={{ color: 'var(--crimson)', fontSize: '14px' }}>Edit</Link>
                <button onClick={() => handleDelete(p.id)} style={{ background: 'none', border: 'none', color: 'var(--warm-gray)', cursor: 'pointer', fontSize: '14px' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
