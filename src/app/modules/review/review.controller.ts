import { reviewService } from './review.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createReview = catchAsync(async (req, res) => {
  const reviewData = req.body;
  const result = await reviewService.createReviewIntoDB(reviewData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Review created successfully',
    data: result,
  });
});

// review
const getBestCourseByRating = catchAsync(async (req, res) => {
  const result = await reviewService.getBestCourseByRating();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review fatched successfull',
    data: result,
  });
});

export const ReviewController = {
  createReview,
  getBestCourseByRating,
};
