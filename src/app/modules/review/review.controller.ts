import { Request, Response } from 'express';
import { reviewService } from './review.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const reviewData = req.body;
  const result = await reviewService.createReviewIntoDB(reviewData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

export const ReviewController = {
  createReview,
};
