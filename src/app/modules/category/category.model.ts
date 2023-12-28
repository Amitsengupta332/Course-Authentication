import { Schema, model } from 'mongoose';
import { TCategory } from './category.interface';

const CategorySchema = new Schema<TCategory>(
  {
    name: { type: String, unique: true },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export const categoryModel = model<TCategory>('category', CategorySchema);
