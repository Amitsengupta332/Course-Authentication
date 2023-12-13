import { Router } from 'express';
import { courseRoute } from '../modules/course/course.route';
import { CategoryRoute } from '../modules/category/category.route';
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
