import express from 'express';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidationSchema } from './category.validation';

const router = express.Router();

//create course
router.post(
  '/',
  validateRequest(categoryValidationSchema),
  CategoryController.createCategory,
);
// get all course
router.get('/', CategoryController.getAllCategories);

export const CategoryRoute = router;
