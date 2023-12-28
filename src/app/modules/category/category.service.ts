import { JwtPayload } from 'jsonwebtoken';
import { TCategory } from './category.interface';
import { categoryModel } from './category.model';

//create a category
const createCategoryIntoDB = async (
  categoryData: TCategory,
  user: JwtPayload,
) => {
  // console.log(user._id);
  categoryData.createdBy = user.id;
  const result = await categoryModel.create(categoryData);
  return result;
};

const getAllCategoryCoursesFromAllDB = async () => {
  const result = await categoryModel.find().populate({
    path: 'createdBy',
    select: '_id username email role',
  });
  return result;
};

export const categoryService = {
  createCategoryIntoDB,
  getAllCategoryCoursesFromAllDB,
};
