import { TReview } from './review.interface';
import { reviewModel } from './review.model';

//create a category
const createReviewIntoDB = async (reviewData: TReview) => {
  const result = await reviewModel.create(reviewData);
  return result;
};

export const reviewService = {
  createReviewIntoDB,
};
