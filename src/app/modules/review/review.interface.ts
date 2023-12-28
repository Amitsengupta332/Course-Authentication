import { Types } from 'mongoose';

export type IUserData = {
  _id: Types.ObjectId;
  username: string;
  email: string;
  role: string;
};
export type TReview = {
  courseId: Types.ObjectId;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  createdBy: IUserData;
};
