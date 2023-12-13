import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

//create course
router.post('/', ReviewController.createReview);
// // get all course
// router.get('/', CategoryController.getAllCategories);

export const ReviewRoute = router;
