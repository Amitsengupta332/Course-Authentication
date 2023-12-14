import express from 'express';
import { CourseController } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidationSchema } from './course.validation';
const router = express.Router();

//create course
router.post(
  '/',
  validateRequest(courseValidationSchema),
  CourseController.createCourse,
);
// get all course
router.get('/', CourseController.getAllCourse);

export const courseRoute = router;
