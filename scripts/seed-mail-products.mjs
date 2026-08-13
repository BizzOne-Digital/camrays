import mongoose from 'mongoose';
import { config } from 'dotenv';

config({ path: '.env.local' });

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in .env.local');
  process.exit(1);
}

const ProductVariantSchema = new mongoose.Schema(
  { size: { type: String, required: true }, price: { type: Number, required: true } },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    badge: { type: String, default: '' },
    uses: { type: [String], default: [] },
    inStock: { type: Boolean, default: true },
    variants: { type: [ProductVariantSchema], default: [] },
  },
  { timestamps: true }
);

const products = [
  {
    name: 'Shave Kit',
    category: 'Shave Care',
    price: 5,
    desc: 'Handmade shaving soap with brush, available in tin sizes with optional display stand.',
    img: '/mail1.jpg',
    uses: ['Shaving', 'Grooming'],
    variants: [
      { size: '2oz Tin', price: 5 },
      { size: '4oz Tin', price: 10 },
      { size: 'Plastic Stand (1)', price: 17 },
      { size: 'Plastic Stand (2)', price: 30 },
      { size: 'Metal Stand (1)', price: 20 },
      { size: 'Metal Stand (2)', price: 35 },
    ],
  },
  {
    name: 'Natural Deodorant',
    category: 'Skin Care',
    price: 2,
    desc: 'Natural deodorant available in Unscented, Fresh Linen, or a custom scent — specify with or without baking soda.',
    img: '/mail2.jpg',
    uses: ['Unscented', 'Fresh Linen', 'Custom Scent'],
    variants: [
      { size: 'Small', price: 2 },
      { size: 'Large', price: 5 },
    ],
  },
  {
    name: 'Lip Salve',
    category: 'Lip Care',
    price: 5,
    desc: 'Nourishing lip salve available in tin or squeeze tube, in regular or mint.',
    img: '/mail3.jpg',
    uses: ['Regular', 'Mint'],
    variants: [
      { size: 'Tin', price: 5 },
      { size: 'Squeeze Tube', price: 5 },
    ],
  },
  {
    name: 'Shiny Lip Salve',
    category: 'Lip Care',
    price: 5,
    desc: 'Glossy tinted lip salve available as a wand or squeeze tube — regular, mint, or tinted (bronze, peach red, chocolate).',
    img: '/mail3.jpg',
    uses: ['Regular', 'Mint', 'Bronze Tint', 'Peach Red Tint', 'Chocolate Tint'],
    variants: [
      { size: 'Wand', price: 5 },
      { size: 'Squeeze Tube', price: 5 },
    ],
  },
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

  for (const p of products) {
    const existing = await Product.findOne({ name: p.name });
    if (existing) {
      console.log(`Skipping "${p.name}" — already exists.`);
      continue;
    }
    await Product.create(p);
    console.log(`Added "${p.name}".`);
  }

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
