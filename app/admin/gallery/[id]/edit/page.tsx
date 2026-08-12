import { connectDB } from '@/lib/mongodb';
import GalleryImage from '@/models/Gallery';
import GalleryForm from '@/components/GalleryForm';
import { notFound } from 'next/navigation';

export default async function EditGalleryImagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  const image = await GalleryImage.findById(id).lean();
  if (!image) notFound();

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '24px' }}>
        Edit Gallery Image
      </h1>
      <GalleryForm
        imageId={id}
        initial={{
          id,
          img: image.img,
          alt: image.alt,
          label: image.label,
          span: image.span,
        }}
      />
    </div>
  );
}
