'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { PlainGalleryImage } from '@/lib/gallery';

type FormState = {
  img: string;
  alt: string;
  label: string;
  span: string;
};

const emptyForm: FormState = { img: '', alt: '', label: '', span: '' };

export default function GalleryForm({ imageId, initial }: { imageId?: string; initial?: PlainGalleryImage }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(
    initial
      ? { img: initial.img, alt: initial.alt, label: initial.label, span: initial.span ?? '' }
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
    body.append('folder', 'camrays/gallery');

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
      setError('Please upload an image.');
      return;
    }

    setSaving(true);
    setError('');

    const payload = {
      img: form.img,
      alt: form.alt,
      label: form.label,
      span: form.span,
    };

    const res = await fetch(imageId ? `/api/gallery/${imageId}` : '/api/gallery', {
      method: imageId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setError('Failed to save image.');
      setSaving(false);
      return;
    }

    router.push('/admin/gallery');
  };

  const inputStyle = { padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '14px', width: '100%' };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '520px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--charcoal)', marginBottom: '8px' }}>
          Image
        </label>
        {form.img && (
          // eslint-disable-next-line @next/next/no-img-element -- preview of an arbitrary Cloudinary URL, not worth Next/Image config here
          <img src={form.img} alt="Preview" style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px', border: '1px solid rgba(0,0,0,0.1)' }} />
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} style={inputStyle} />
        {uploading && <p style={{ fontSize: '13px', color: 'var(--warm-gray)', marginTop: '6px' }}>Uploading...</p>}
      </div>
      <input required placeholder="Label (e.g. Classic Hair Pomade)" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} style={inputStyle} />
      <input required placeholder="Alt text (for accessibility)" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} style={inputStyle} />
      <select value={form.span} onChange={(e) => setForm({ ...form, span: e.target.value })} style={inputStyle}>
        <option value="">Normal size</option>
        <option value="col">Wide (spans column)</option>
        <option value="row">Tall (spans row)</option>
      </select>

      {error && <p style={{ color: 'var(--crimson)', fontSize: '14px' }}>{error}</p>}

      <button type="submit" disabled={saving} className="btn-primary" style={{ justifyContent: 'center', border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
        {saving ? 'Saving...' : imageId ? 'Update Image' : 'Add Image'}
      </button>
    </form>
  );
}
