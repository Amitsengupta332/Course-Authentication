import express from 'express';
import { CourseController } from './course.controller';
const router = express.Router();

//create course
router.post('/course', CourseController.createCourse);
// get all course
router.get('/course', CourseController.getAllCourse);

export const courseRoute = router;
