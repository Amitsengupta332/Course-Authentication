import { Request, Response } from 'express';
import { reviewService } from './review.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const result = await reviewService.createReviewIntoDB(reviewData);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Review created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err,
    });
  }
};

export const ReviewController = {
  createReview,
};
