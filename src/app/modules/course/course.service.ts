import { reviewModel } from '../review/review.model';
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

const getCourseWithReviewFromDB = async (id: string) => {
  const course = await courseModel.findById(id);
  const reviews = await reviewModel.find({ courseId: id });
  const result = { course, reviews };
  return result;
};

export const courseService = {
  createNewCourseIntoDB,
  getAllCourseFromAllDB,
  getCourseWithReviewFromDB,
};
