import { Request, Response } from 'express';
import { courseService } from './course.service';

const createCourse = async (req: Request, res: Response) => {
  try {
    const courseData = req.body;
    const result = await courseService.createNewCourseIntoDB(courseData);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Course created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err,
    });
  }
};

const getAllCourse = async (req: Request, res: Response) => {
  try {
    const result = await courseService.getAllCourseFromAllDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Courses retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const CourseController = {
  createCourse,
  getAllCourse,
};
