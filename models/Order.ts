import { Schema, models, model } from 'mongoose';

export interface IOrderItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  size?: string;
  scent?: string;
}

export interface IOrder {
  _id: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  items: IOrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true, min: 1 },
    size: { type: String },
    scent: { type: String },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrder>(
  {
    customer: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    items: { type: [OrderItemSchema], required: true, validate: (v: IOrderItem[]) => v.length > 0 },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export default models.Order || model<IOrder>('Order', OrderSchema);
