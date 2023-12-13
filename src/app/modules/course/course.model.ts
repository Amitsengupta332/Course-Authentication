import { Schema, model } from 'mongoose';
import { TCourse, TDetails, TTag } from './course.interface';

const TagSchema = new Schema<TTag>({
  name: { type: String },
  isDeleted: { type: Boolean },
});
const DetailsSchema = new Schema<TDetails>({
  level: { type: String },
  description: { type: String },
});

const CourseSchema = new Schema<TCourse>({
  title: { type: String, unique: true, required: true },
  instructor: { type: String },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  price: { type: Number },
  tags: [TagSchema],
  startDate: { type: String },
  endDate: { type: String },
  language: { type: String },
  provider: { type: String },
  durationInWeeks: { type: Number },
  details: { DetailsSchema },
});

export const courseModel = model<TCourse>('Course', CourseSchema);
