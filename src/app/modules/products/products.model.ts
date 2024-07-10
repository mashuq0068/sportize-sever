import { model, Schema } from 'mongoose';
import { IProduct } from './products.interface';

export const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Product rating is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  brand: {
    type: String,
    required: [true, 'Product brand is required'],
  },
  stockQuantity: {
    type: Number,
    required: [true, 'Stock quantity is required'],
  },
});

export const products = model<IProduct>('product', productSchema);
