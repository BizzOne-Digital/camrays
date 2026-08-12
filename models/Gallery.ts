import { Schema, models, model } from 'mongoose';

export interface IGalleryImage {
  _id: string;
  img: string;
  alt: string;
  label: string;
  span?: string;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    img: { type: String, required: true },
    alt: { type: String, required: true },
    label: { type: String, required: true },
    span: { type: String, default: '' },
  },
  { timestamps: true }
);

export default models.GalleryImage || model<IGalleryImage>('GalleryImage', GalleryImageSchema);
