import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

//create course
router.post('/', CategoryController.createCategory);
// get all course
router.get('/', CategoryController.getAllCategories);

export const CategoryRoute = router;
