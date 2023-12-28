import express from 'express';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { reviewValidationSchema } from './review.validation';
import { USER_ROLE } from '../auth/auth.constant';
import auth from '../auth/auth';

const router = express.Router();

//create course
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(reviewValidationSchema),
  ReviewController.createReview,
);

// // get all course
// router.get('/', CategoryController.getAllCategories);

export const ReviewRoute = router;
