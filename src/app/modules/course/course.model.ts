import { Schema, model } from 'mongoose';
import { TCourse, TDetails, TTag } from './course.interface';

const TagSchema = new Schema<TTag>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: true },
  },
  { _id: false },
);
const DetailsSchema = new Schema<TDetails>({
  level: { type: String, required: true },
  description: { type: String, required: true },
});

const CourseSchema = new Schema<TCourse>({
  title: { type: String, unique: true, required: true },
  instructor: { type: String, required: true },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  price: { type: Number, required: true },
  tags: [TagSchema],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number },
  details: DetailsSchema,
});

export const courseModel = model<TCourse>('Course', CourseSchema);
