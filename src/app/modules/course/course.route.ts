import express from 'express';
import { CourseController } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  courseValidationSchema,
  updateValidationSchema,
} from './course.validation';
import auth from '../auth/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

//create course
router.post(
  '/course',
  auth(USER_ROLE.admin),
  validateRequest(courseValidationSchema),
  CourseController.createCourse,
);
// get all course
router.get('/courses', CourseController.getAllCourse);
router.get('/courses/:id/reviews', CourseController.getCourseWithReview);
router.get('/course/best', CourseController.getBestCourse);

router.put(
  '/courses/:id',
  validateRequest(updateValidationSchema),
  CourseController.updateCourse,
);

export const courseRoute = router;
