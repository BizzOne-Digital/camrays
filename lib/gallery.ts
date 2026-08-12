import { connectDB } from '@/lib/mongodb';
import GalleryImage, { IGalleryImage } from '@/models/Gallery';

export type PlainGalleryImage = Omit<IGalleryImage, '_id' | 'createdAt' | 'updatedAt'> & { id: string };

export async function getGalleryImages(): Promise<PlainGalleryImage[]> {
  await connectDB();
  const images = await GalleryImage.find().sort({ createdAt: -1 }).lean();
  return images.map((g) => ({
    id: g._id.toString(),
    img: g.img,
    alt: g.alt,
    label: g.label,
    span: g.span,
  }));
}
