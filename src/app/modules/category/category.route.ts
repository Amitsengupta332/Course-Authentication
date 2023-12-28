import express from 'express';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidationSchema } from './category.validation';
import auth from '../auth/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

//create course
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(categoryValidationSchema),
  CategoryController.createCategory,
);
// get all course
router.get('/', CategoryController.getAllCategories);

export const CategoryRoute = router;
