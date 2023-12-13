import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const ReviewSchema = new Schema<TReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'review',
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  review: { type: String },
});

export const reviewModel = model<TReview>('review', ReviewSchema);
