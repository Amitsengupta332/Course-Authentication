/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUsers = {
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
};

export type TLoginUser = {
  username: string;
  password: string;
};

export interface UserModel extends Model<TUsers> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUsers>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
