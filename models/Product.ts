import { Schema, models, model } from 'mongoose';

export interface IProductVariant {
  size: string;
  price: number;
}

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
  variants: IProductVariant[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductVariantSchema = new Schema<IProductVariant>(
  {
    size: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

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
    variants: { type: [ProductVariantSchema], default: [] },
  },
  { timestamps: true }
);

export default models.Product || model<IProduct>('Product', ProductSchema);
