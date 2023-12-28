import { categoryService } from './category.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createCategory = catchAsync(async (req, res) => {
  const categoryData = req.body;
  const result = await categoryService.createCategoryIntoDB(
    categoryData,
    req.user,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Category created successfully',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryService.getAllCategoryCoursesFromAllDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories retrieved successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
};
