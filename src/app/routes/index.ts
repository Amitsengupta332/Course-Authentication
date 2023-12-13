import { Router } from 'express';
import { courseRoute } from '../modules/course/course.route';
import { CategoryRoute } from '../modules/category/category.route';
import { ReviewRoute } from '../modules/review/review.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/course',
    route: courseRoute,
  },
  {
    path: '/categories',
    route: CategoryRoute,
  },
  {
    path: '/reviews',
    route: ReviewRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
