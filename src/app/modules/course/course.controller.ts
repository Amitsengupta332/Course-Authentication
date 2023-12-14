import { Request, Response } from 'express';
import { courseService } from './course.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createCourse = catchAsync(async (req, res) => {
  const courseData = req.body;
  const result = await courseService.createNewCourseIntoDB(courseData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await courseService.getAllCourseFromAllDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses retrieved successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
};
