import { TCategory } from './category.interface';
import { categoryModel } from './category.model';

//create a category
const createCategoryIntoDB = async (categoryData: TCategory) => {
  const result = await categoryModel.create(categoryData);
  return result;
};

const getAllCategoryCoursesFromAllDB = async () => {
  const result = await categoryModel.find();
  return result;
};

export const categoryService = {
  createCategoryIntoDB,
  getAllCategoryCoursesFromAllDB,
};
