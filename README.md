# Assignment-3

-> Vercel Hosting Link: https://assignment-3-sand-tau.vercel.app/

# Instructions for run this file locally

npm install (run this command in terminal for this file for install all packages)

# Features

Enumerate the main features of the project and briefly explain each one.

- **Course Management:** Create, update, and manage courses with comprehensive details.
- **Category Management:** Create and manage course categories for classification.
- **Review System:** Allow users to give reviews for courses, including ratings and comments.
- **Data Retrieval:** Retrieve courses based on various parameters, get categories, etc.
- **Error Handling:** Describe how errors are handled across the application.
- **Validation:** Explain how incoming data is validated using Joi/Zod.
- **Advanced Functionality:** Highlight special functionalities like retrieving courses with reviews and determining the best-rated course.

## Technologies Used

- Programming Language: TypeScript
- Web Framework: Express.js
- ODM and Validation Library: Mongoose for MongoDB
- Other technologies...

# Api End Point :

1. Create a Course (Post): /api/course
2. Get Paginated and Filtered Courses (Get): /api/courses
3. Create a Category (Post): /api/categories
4. Get All Categories (Get): /api/categories
5. Create a Review (Post) : /api/reviews
6. Update a Course (Put) : /api/courses/:courseId
7. Get Course by ID with Reviews (Get): /api/courses/:courseId/reviews
8. Get the Best Course Based on Average Review (Rating) (Get): /api/course/best
