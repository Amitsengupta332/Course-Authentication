import { courseService } from './course.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createCourse = catchAsync(async (req, res) => {
  // const courseData = req.body;

  const result = await courseService.createNewCourseIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const { page = 1, limit = 10, ...query } = req.query;

  const result = await courseService.getAllCourseFromAllDB(
    query,
    +page,
    +limit,
  );
  const totalSize = result.length;
  const metaData = {
    page: +page,
    limit: +limit,
    total: totalSize,
  };

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    meta: metaData,
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
    message: 'Course updated successfully',
    data: result,
  });
});

// best
const getBestCourse = catchAsync(async (req, res) => {
  const bestCourseData = await courseService.getBestCourseDB();

  if (!bestCourseData) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'No courses found',
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Best course retrieved successfully',
    data: bestCourseData,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getCourseWithReview,
  updateCourse,
  getBestCourse,
};
