import { Request, Response } from 'express';
import { categoryService } from './category.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const categoryData = req.body;
  const result = await categoryService.createCategoryIntoDB(categoryData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryService.getAllCategoryCoursesFromAllDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course created successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
};
