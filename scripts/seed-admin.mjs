import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config({ path: '.env.local' });

const { MONGODB_URI, SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD } = process.env;

if (!MONGODB_URI || !SEED_ADMIN_EMAIL || !SEED_ADMIN_PASSWORD) {
  console.error('Missing MONGODB_URI, SEED_ADMIN_EMAIL, or SEED_ADMIN_PASSWORD in .env.local');
  process.exit(1);
}

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

async function main() {
  await mongoose.connect(MONGODB_URI);
  const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

  const passwordHash = await bcrypt.hash(SEED_ADMIN_PASSWORD, 10);
  const email = SEED_ADMIN_EMAIL.toLowerCase().trim();

  await Admin.findOneAndUpdate(
    { email },
    { email, passwordHash },
    { upsert: true, returnDocument: 'after' }
  );

  console.log(`Admin user ready: ${email}`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
