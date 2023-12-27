import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

// import { Request, Response } from 'express';
const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await authService.createUserIntoDB(userData);
  const modifiedResult = JSON.parse(JSON.stringify(result));
  delete modifiedResult.password;
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User created successfully',
    data: modifiedResult,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);
  const modifiedResult = JSON.parse(JSON.stringify(result));
  delete modifiedResult.user.password;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: modifiedResult,
  });
});

export const AuthController = {
  createUser,
  loginUser,
};
