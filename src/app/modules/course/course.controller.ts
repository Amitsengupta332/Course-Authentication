import { Request, Response } from 'express';
import { courseService } from './course.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createCourse = catchAsync(async (req, res) => {
  // const courseData = req.body;
  console.log(req.body);
  const result = await courseService.createNewCourseIntoDB(req.body);
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

const getCourseWithReview = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await courseService.getCourseWithReviewFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course and Reviews retrieved successfully',
    data: result,
  });
});
const updateCourse = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await courseService.updateCourse(id, updatedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course and Reviews retrieved successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getCourseWithReview,
  updateCourse,
};
