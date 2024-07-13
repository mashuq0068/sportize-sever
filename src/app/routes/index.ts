import express from 'express';
import { productRoutes } from '../modules/products/products.routes';
import { emailRoutes } from '../modules/email/email.routes';
const router = express.Router();

const routes = [
  {
    path: '/products',
    routes: productRoutes,
  },
  {
    path: '/email',
    routes: emailRoutes,
  },
];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
