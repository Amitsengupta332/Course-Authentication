import { Router } from 'express';
import { courseRoute } from '../modules/course/course.route';
import { CategoryRoute } from '../modules/category/category.route';
import { ReviewRoute } from '../modules/review/review.route';
import { AuthRoute } from '../modules/auth/auth.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/',
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
  {
    path: '/auth',
    route: AuthRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
