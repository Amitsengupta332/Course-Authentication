import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  authValidationSchema,
  changePasswordValidationSchema,
  loginValidationSchema,
} from './auth.validation';
import { AuthController } from './auth.controller';
import auth from './auth';
import { USER_ROLE } from './auth.constant';

const router = express.Router();

//create course
router.post(
  '/register',
  validateRequest(authValidationSchema),
  AuthController.createUser,
);
router.post(
  '/login',
  validateRequest(loginValidationSchema),
  AuthController.loginUser,
);
router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(changePasswordValidationSchema),
  AuthController.changePassword,
);

export const AuthRoute = router;
