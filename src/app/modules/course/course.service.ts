import { TCourse } from './course.interface';
import { courseModel } from './course.model';

//create course
const createNewCourseIntoDB = async (courseData: TCourse) => {
  const result = await courseModel.create(courseData);
  return result;
};

const getAllCourseFromAllDB = async () => {
  const result = await courseModel.find();
  return result;
};

export const courseService = {
  createNewCourseIntoDB,
  getAllCourseFromAllDB,
};
