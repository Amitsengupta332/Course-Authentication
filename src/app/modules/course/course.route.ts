import express from 'express';
import { CourseController } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidationSchema } from './course.validation';

const router = express.Router();

//create course
router.post(
  '/course',
  validateRequest(courseValidationSchema),
  CourseController.createCourse,
);
// get all course
router.get('/courses', CourseController.getAllCourse);
router.get('/courses/:id/reviews', CourseController.getCourseWithReview);

export const courseRoute = router;
