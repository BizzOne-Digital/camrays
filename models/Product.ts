import { Schema, models, model } from 'mongoose';

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  price: number;
  desc: string;
  img: string;
  badge?: string;
  uses: string[];
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    badge: { type: String, default: '' },
    uses: { type: [String], default: [] },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Product || model<IProduct>('Product', ProductSchema);
