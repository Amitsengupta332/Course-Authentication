import { Schema, model } from 'mongoose';
import { IUserData, TReview } from './review.interface';

const userDataSchema = new Schema<IUserData>({
  _id: {
    type: Schema.Types.ObjectId,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
});

const ReviewSchema = new Schema<TReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  review: { type: String },
  createdBy: userDataSchema,
});

export const reviewModel = model<TReview>('review', ReviewSchema);
