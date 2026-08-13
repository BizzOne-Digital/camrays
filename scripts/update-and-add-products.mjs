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

// Existing products that just need variants/description filled in (image left as-is)
const updates = [
  {
    name: 'Pomade, Hair & Scalp',
    variants: [
      { size: '3oz', price: 10 },
      { size: '8oz', price: 20 },
    ],
    uses: ['Unscented', 'Scented', 'Mint', 'Scented Mint'],
    desc: "CamRay's signature pomade for hair and scalp, available in 3oz and 8oz sizes with a choice of scent.",
  },
  {
    name: 'Pomade Paste',
    variants: [
      { size: '2oz Tin/Glider', price: 5 },
      { size: '4oz Tin/Glider', price: 10 },
    ],
    desc: 'Thicker paste-style pomade that slicks down stray strands without making hair stiff. Also addresses areas of concern, saturated with cocoa butter.',
  },
  {
    name: 'Lotion Salve Set',
    variants: [
      { size: '2oz Jar', price: 10 },
      { size: '8oz Jar', price: 10 },
      { size: '25oz Refill Bag (Pump)', price: 20 },
    ],
    desc: 'Lotion salve set available in 8oz or 2oz jars, or as a 25oz pump refill bag. Scented upon request.',
  },
  {
    name: 'CamRay’s Magnesium-Infused Lotion',
    price: 3,
    variants: [
      { size: 'Roll-On (1)', price: 3 },
      { size: 'Roll-On (2)', price: 5 },
      { size: 'Refill Bag', price: 6 },
      { size: '8oz Spray Bottle', price: 6 },
    ],
    desc: 'Lotion infused with Magnesium. Relieves aches and pains and induces sleep when applied to the soles of the feet.',
  },
];

// Brand-new products from the latest batch of photos
const newProducts = [
  {
    name: 'Solid Shampoo Bars',
    category: 'Skin Care',
    price: 5,
    desc: 'Handmade solid shampoo bars, available in Rice & Clove or Coffee, Honey & Cinnamon.',
    img: '/mail7.jpg',
    uses: ['Rice & Clove', 'Coffee, Honey & Cinnamon'],
    variants: [{ size: 'Round Bar', price: 5 }],
  },
  {
    name: 'Pomade Fizz',
    category: 'Skin Care',
    price: 5,
    desc: 'Soak for body, hands, and feet made with Epsom salt — relaxes and moisturizes.',
    img: '/mail11.jpg',
    uses: ['Body Soak', 'Hand Soak', 'Foot Soak'],
    variants: [
      { size: '3 Tablets', price: 5 },
      { size: 'Container', price: 5 },
    ],
  },
  {
    name: 'Intensive Face Salve',
    category: 'Skin Care',
    price: 10,
    desc: 'A concentrated face salve made from only the butters of the pomade formula, with added vitamin C.',
    img: '/mail12.jpg',
    uses: ['Face Care', 'Vitamin C'],
    variants: [{ size: '8oz', price: 10 }],
  },
  {
    name: 'Gentle Sudsing Face Scrub',
    category: 'Skin Care',
    price: 10,
    desc: 'A light exfoliating face scrub that gently sudses away dullness without over-drying skin.',
    img: '/mail12.jpg',
    uses: ['Light Exfoliation', 'Face Care'],
    variants: [{ size: '8oz', price: 10 }],
  },
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

  for (const u of updates) {
    const { name, ...rest } = u;
    const result = await Product.findOneAndUpdate({ name }, rest, { new: true });
    console.log(result ? `Updated "${name}".` : `Could not find "${name}" to update.`);
  }

  for (const p of newProducts) {
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
