import express from 'express';
import { CourseController } from './course.controller';
const router = express.Router();

//create course
router.post('/', CourseController.createCourse);
// get all course
router.get('/', CourseController.getAllCourse);

export const courseRoute = router;
