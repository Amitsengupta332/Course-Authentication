import { Request, Response } from 'express';
import { categoryService } from './category.service';

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const result = await categoryService.createCategoryIntoDB(categoryData);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Category created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err,
    });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategoryCoursesFromAllDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Categories retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const CategoryController = {
  createCategory,
  getAllCategories,
};
