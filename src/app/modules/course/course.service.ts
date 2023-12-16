/* eslint-disable @typescript-eslint/no-explicit-any */
import { reviewModel } from '../review/review.model';
import { TCourse } from './course.interface';
import { courseModel } from './course.model';

//create course
const createNewCourseIntoDB = async (courseData: TCourse) => {
  const result = await courseModel.create(courseData);
  return result;
};

const getAllCourseFromAllDB = async (
  query: { [key: string]: any },
  page: number,
  pageSize: number,
): Promise<TCourse[]> => {
  const skip = (page - 1) * pageSize;

  try {
    const result = await courseModel
      .find(query)
      .skip(skip)
      .limit(pageSize)
      .exec();

    return result;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

const getCourseWithReviewFromDB = async (id: string) => {
  const course = await courseModel.findById(id);
  const reviews = await reviewModel.find({ courseId: id });
  const result = { course, reviews };
  return result;
};

const updateCourse = async (id: string, payload: Partial<TCourse>) => {
  // primitive update
  const { tags, details, ...remaining } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remaining,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }
  if (tags && tags.length > 0) {
    const getDeletedTags = tags
      .filter((el) => el.name && el.isDeleted)
      .map((el) => el.name);

    await courseModel.findByIdAndUpdate(
      id,
      {
        $pull: { tags: { name: { $in: getDeletedTags } } },
      },
      {
        new: true,
        runValidators: true,
      },
    );
    // filter added tags data
    const getNewTags = tags?.filter((el) => el.name && !el.isDeleted);

    await courseModel.findByIdAndUpdate(
      id,
      {
        $addToSet: { tags: { $each: getNewTags } },
      },
      {
        new: true,
        runValidators: true,
      },
    );
  }

  const result = await courseModel.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

// best course

export const courseService = {
  createNewCourseIntoDB,
  getAllCourseFromAllDB,
  getCourseWithReviewFromDB,
  updateCourse,
};
