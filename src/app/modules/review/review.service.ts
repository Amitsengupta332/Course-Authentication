import { courseModel } from '../course/course.model';
import { TReview } from './review.interface';
import { reviewModel } from './review.model';

//create a category
const createReviewIntoDB = async (reviewData: TReview) => {
  const result = await reviewModel.create(reviewData);
  return result;
};

// best review

const getBestCourseByRating = async () => {
  const result = await reviewModel
    .aggregate([
      {
        $group: {
          _id: '$courseId',
          averageRating: { $avg: '$rating' },
          reviewCount: { $sum: 1 },
        },
      },
    ])
    .sort({ averageRating: -1 })
    .limit(1)
    .exec();

  if (result.length > 0) {
    const bestCourseId = result[0]._id;
    const bestCourse = await courseModel.findById(bestCourseId);

    const { averageRating, reviewCount } = result[0];
    const bestWith = {
      course: bestCourse,
      averageRating: averageRating,
      reviewCount: reviewCount,
    };

    return bestWith;
  } else {
    return null;
  }
};

export const reviewService = {
  createReviewIntoDB,
  getBestCourseByRating,
};
