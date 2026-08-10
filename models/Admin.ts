import { Schema, models, model } from 'mongoose';

export interface IAdmin {
  _id: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Admin || model<IAdmin>('Admin', AdminSchema);
