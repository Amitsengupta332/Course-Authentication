/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtPayload } from 'jsonwebtoken';
import { reviewModel } from '../review/review.model';
import { TCourse } from './course.interface';
import { courseModel } from './course.model';

//create course
const createNewCourseIntoDB = async (courseData: TCourse, user: JwtPayload) => {
  // console.log(user._id);
  courseData.createdBy = user._id;
  // console.log(user.id);
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
const getBestCourseDB = async (): Promise<{
  course: TCourse;
  averageRating: number;
  reviewCount: number;
} | null> => {
  try {
    // Aggregate reviews to calculate average rating
    const aggregateResult = await reviewModel.aggregate([
      {
        $group: {
          _id: '$courseId',
          averageRating: { $avg: '$rating' },
          reviewCount: { $sum: 1 },
        },
      },
      { $sort: { averageRating: -1, reviewCount: -1 } },
      { $limit: 1 },
    ]);

    if (aggregateResult.length === 0) {
      return null;
    }

    const bestCourseId = aggregateResult[0]._id;

    // Fetch the best course details
    const bestCourse = await courseModel.findById(bestCourseId);

    if (!bestCourse) {
      return null;
    }

    return {
      course: bestCourse.toObject(),
      averageRating: aggregateResult[0].averageRating,
      reviewCount: aggregateResult[0].reviewCount,
    };
  } catch (error) {
    console.error('Error fetching best course:', error);
    throw error;
  }
};

export const courseService = {
  createNewCourseIntoDB,
  getAllCourseFromAllDB,
  getCourseWithReviewFromDB,
  updateCourse,
  getBestCourseDB,
};
