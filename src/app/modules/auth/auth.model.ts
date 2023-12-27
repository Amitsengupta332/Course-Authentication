import { Schema, model } from 'mongoose';

import bcrypt from 'bcrypt';
import config from '../../config';
import { TUsers, UserModel } from './auth.interface';

const userSchema = new Schema<TUsers, UserModel>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

// Method to entered # password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// Method to compare user's entered # password
userSchema.methods.comparePassword = async function (
  enteredPassword: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    return false;
  }
};

userSchema.statics.isUserExistsByCustomId = async function (username: string) {
  return await User.findOne({ username }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUsers, UserModel>('User', userSchema);
