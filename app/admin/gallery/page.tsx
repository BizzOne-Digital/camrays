'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { PlainGalleryImage } from '@/lib/gallery';

export default function AdminGalleryPage() {
  const [images, setImages] = useState<PlainGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => setImages(data.map((g: PlainGalleryImage & { _id: string }) => ({ ...g, id: g._id }))))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this image?')) return;
    await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)' }}>
          Gallery
        </h1>
        <Link href="/admin/gallery/new" className="btn-primary">+ Add Image</Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : images.length === 0 ? (
        <p style={{ color: 'var(--warm-gray)' }}>No gallery images yet. Add your first one.</p>
      ) : (
        <div style={{ background: 'white', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          {images.map((g) => (
            <div key={g.id} style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- small admin thumbnail preview */}
                <img src={g.img} alt={g.alt} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} />
                <strong>{g.label}</strong>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href={`/admin/gallery/${g.id}/edit`} style={{ color: 'var(--crimson)', fontSize: '14px' }}>Edit</Link>
                <button onClick={() => handleDelete(g.id)} style={{ background: 'none', border: 'none', color: 'var(--warm-gray)', cursor: 'pointer', fontSize: '14px' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
