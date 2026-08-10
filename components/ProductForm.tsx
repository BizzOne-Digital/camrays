'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { PlainProduct } from '@/lib/products';

type FormState = {
  name: string;
  category: string;
  price: string;
  desc: string;
  img: string;
  badge: string;
  uses: string;
};

const emptyForm: FormState = { name: '', category: '', price: '', desc: '', img: '', badge: '', uses: '' };

export default function ProductForm({ productId, initial }: { productId?: string; initial?: PlainProduct }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(
    initial
      ? {
          name: initial.name,
          category: initial.category,
          price: String(initial.price),
          desc: initial.desc,
          img: initial.img,
          badge: initial.badge ?? '',
          uses: initial.uses.join(', '),
        }
      : emptyForm
  );
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    const body = new FormData();
    body.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setForm((f) => ({ ...f, img: data.url }));
    } catch {
      setError('Image upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.img) {
      setError('Please upload a product image.');
      return;
    }

    setSaving(true);
    setError('');

    const payload = {
      name: form.name,
      category: form.category,
      price: parseFloat(form.price),
      desc: form.desc,
      img: form.img,
      badge: form.badge,
      uses: form.uses.split(',').map((u) => u.trim()).filter(Boolean),
    };

    const res = await fetch(productId ? `/api/products/${productId}` : '/api/products', {
      method: productId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setError('Failed to save product.');
      setSaving(false);
      return;
    }

    router.push('/admin/products');
  };

  const inputStyle = { padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px', width: '100%' };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '520px' }}>
      <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
      <input required placeholder="Category (e.g. Hair Care)" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={inputStyle} />
      <input required type="number" step="0.01" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} style={inputStyle} />
      <textarea required placeholder="Description" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} rows={3} style={inputStyle} />
      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--charcoal)', marginBottom: '8px' }}>
          Product Image
        </label>
        {form.img && (
          // eslint-disable-next-line @next/next/no-img-element -- preview of an arbitrary Cloudinary URL, not worth Next/Image config here
          <img src={form.img} alt="Preview" style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} style={inputStyle} />
        {uploading && <p style={{ fontSize: '13px', color: 'var(--warm-gray)', marginTop: '6px' }}>Uploading...</p>}
      </div>
      <input placeholder="Badge (optional, e.g. Bestseller)" value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} style={inputStyle} />
      <input placeholder="Uses, comma separated" value={form.uses} onChange={(e) => setForm({ ...form, uses: e.target.value })} style={inputStyle} />

      {error && <p style={{ color: 'var(--crimson)', fontSize: '14px' }}>{error}</p>}

      <button type="submit" disabled={saving} className="btn-primary" style={{ justifyContent: 'center', border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
        {saving ? 'Saving...' : productId ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
}
