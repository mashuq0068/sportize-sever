import { z } from 'zod';

const createProductValidationSchema = z.object({
  name: z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }),
  image: z.string({
    required_error: 'Product image is required',
    invalid_type_error: 'Product images must be a string',
  }),
  price: z.number({
    required_error: 'Product price is required',
    invalid_type_error: 'Product price must be a number',
  }),
  rating: z
    .number({
      required_error: 'Product rating is required',
      invalid_type_error: 'Product rating must be a number',
    })
    .min(1, { message: 'Product rating must be at least 1' })
    .max(5, { message: 'Product rating must be at most 5' }),
  description: z.string({
    required_error: 'Product description is required',
    invalid_type_error: 'Product description must be a string',
  }),
  category: z.string({
    required_error: 'Product category is required',
    invalid_type_error: 'Product category must be a string',
  }),
  brand: z.string({
    required_error: 'Product brand is required',
    invalid_type_error: 'Product brand must be a string',
  }),
  stockQuantity: z.number({
    required_error: 'Stock quantity is required',
    invalid_type_error: 'Stock quantity must be a number',
  }),
});
const updateProductValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Product name must be a string',
    })
    .optional(),
  image: z
    .string({
      invalid_type_error: 'Product images must be a string',
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: 'Product price must be a number',
    })
    .optional(),
  rating: z
    .number({
      invalid_type_error: 'Product rating must be a number',
    })
    .min(1, { message: 'Product rating must be at least 1' })
    .max(5, { message: 'Product rating must be at most 5' })
    .optional(),
  description: z
    .string({
      invalid_type_error: 'Product description must be a string',
    })
    .optional(),
  category: z
    .string({
      invalid_type_error: 'Product category must be a string',
    })
    .optional(),
  brand: z
    .string({
      invalid_type_error: 'Product brand must be a string',
    })
    .optional(),
  stockQuantity: z
    .number({
      invalid_type_error: 'Stock quantity must be a number',
    })
    .optional(),
});

export const productValidationSchemas = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
