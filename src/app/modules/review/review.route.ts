import express from 'express';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { reviewValidationSchema } from './review.validation';

const router = express.Router();

//create course
router.post(
  '/',
  validateRequest(reviewValidationSchema),
  ReviewController.createReview,
);

router.get('/course/best', ReviewController.getBestCourseByRating);
// // get all course
// router.get('/', CategoryController.getAllCategories);

export const ReviewRoute = router;
