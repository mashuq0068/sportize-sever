import express from 'express';
import { productRoutes } from '../modules/products/products.routes';
const router = express.Router();

const routes = [
  {
    path: '/products',
    routes: productRoutes,
  },
];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
