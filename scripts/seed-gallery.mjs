import mongoose from 'mongoose';
import { config } from 'dotenv';

config({ path: '.env.local' });

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in .env.local');
  process.exit(1);
}

const GalleryImageSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    alt: { type: String, required: true },
    label: { type: String, required: true },
    span: { type: String, default: '' },
  },
  { timestamps: true }
);

const images = [
  { img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Hair Pomade', label: 'Classic Hair Pomade', span: 'col' },
  { img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80', alt: 'Skin Butter', label: 'Nourishing Skin Butter', span: '' },
  { img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80', alt: 'Herbs', label: 'Fresh Botanicals', span: '' },
  { img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80', alt: 'Natural oils', label: 'Organic Oil Blends', span: 'row' },
  { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', alt: 'Lip balm', label: 'Healing Lip Balm', span: '' },
  { img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80', alt: 'Hair oil', label: 'Hair & Scalp Oil', span: '' },
  { img: 'https://images.unsplash.com/photo-1526399232581-2ab5608b6336?w=600&q=80', alt: 'Coconut oil', label: 'Ingredient: Coconut Oil', span: '' },
  { img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', alt: 'Deep conditioning', label: 'Deep Conditioning Mask', span: '' },
  { img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', alt: 'Herb butter', label: 'Multipurpose Herb Butter', span: '' },
  { img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80', alt: 'Skincare', label: 'Natural Skincare', span: 'col' },
  { img: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=600&q=80', alt: 'Product range', label: 'Product Collection', span: '' },
  { img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80', alt: 'Gift set', label: 'Gift Sets Available', span: '' },
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  const GalleryImage = mongoose.models.GalleryImage || mongoose.model('GalleryImage', GalleryImageSchema);

  const existing = await GalleryImage.countDocuments();
  if (existing > 0) {
    console.log(`Gallery already has ${existing} image(s). Skipping seed to avoid duplicates.`);
    await mongoose.disconnect();
    return;
  }

  await GalleryImage.insertMany(images);
  console.log(`Seeded ${images.length} gallery images.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
