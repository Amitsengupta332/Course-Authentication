import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authValidationSchema, loginValidationSchema } from './auth.validation';
import { AuthController } from './auth.controller';

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

export const AuthRoute = router;
