import express from 'express';
import zodValidation from '../../middlewares/zodValidation';
import { productControllers } from './products.controller';
import { productValidationSchemas } from './products.validation';
const router = express.Router();
router.get('/', productControllers.getProducts);
router.post(
  '/',
  zodValidation(productValidationSchemas.createProductValidationSchema),
  productControllers.createProduct,
);
router.patch(
  '/:id',
  zodValidation(productValidationSchemas.updateProductValidationSchema),
  productControllers.updateSingleProduct,
);
router.get('/:id', productControllers.getSingleProduct);
router.delete('/:id', productControllers.deleteSingleProduct);
export const productRoutes = router;
