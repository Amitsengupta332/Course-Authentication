import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { TLoginUser, TUsers } from './auth.interface';
import { User } from './auth.model';
import config from '../../config';
import jwt from 'jsonwebtoken';

//create a category
const createUserIntoDB = async (userData: TUsers) => {
  const result = await User.create(userData);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload.username);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client

  const jwtPayload = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: (user as any)._id,
    role: user.role,
    email: user.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  return {
    user: user,
    token: accessToken,
  };
};

export const authService = {
  createUserIntoDB,
  loginUser,
  // getBestCourseByRating,
};
