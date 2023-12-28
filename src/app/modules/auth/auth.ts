import { NextFunction, Response, Request } from 'express';

import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../error/AppError';
import config from '../../config';
import { TUserRole } from './auth.interface';

const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // If the used is sent token
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You do not have the necessary permissions to access this resource.',
      );
    }

    // Check if the token is valid
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You do not have the necessary permissions to access this resource.',
          );
        }

        // role checking
        const role = (decoded as JwtPayload).role;
        if (requiredRole && !requiredRole.includes(role)) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You do not have the necessary permissions to access this resource.',
          );
        }

        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;
