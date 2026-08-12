import GalleryForm from '@/components/GalleryForm';

export default function NewGalleryImagePage() {
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Add Gallery Image
      </h1>
      <GalleryForm />
    </div>
  );
}
