// import { courseModel } from '../course/course.model';
import { JwtPayload } from 'jsonwebtoken';
import { TReview } from './review.interface';
import { reviewModel } from './review.model';
import { User } from '../auth/auth.model';

//create a category
const createReviewIntoDB = async (reviewData: TReview, user: JwtPayload) => {
  // console.log(user.id);
  const userData = await User.findById(user.id);
  // console.log(userData);
  if (userData) {
    const createUser = {
      _id: userData._id,
      username: userData.username,
      email: userData.email,
      role: userData.role,
    };
    reviewData.createdBy = createUser;
  }
  const result = await reviewModel.create(reviewData);
  return result;
};

// best review

export const reviewService = {
  createReviewIntoDB,
  // getBestCourseByRating,
};
