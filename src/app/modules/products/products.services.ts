import QueryBuilder from '../../builder/QueryBuilder';
import { IProduct } from './products.interface';
import { products } from './products.model';

// create a product
const createProductIntoDB = async (payload: IProduct) => {
  const result = await products.create(payload);
  return result;
};

// get all products
const getProductsFromDB = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(products.find(), query);
  const productQuery = queryBuilder.search(['name']).filter().sort();
  const result = await productQuery.modelQuery;
  return result;
};
// get single products
const getSingleProductFromDB = async (id: string) => {
  const result = await products.findById(id);
  return result;
};

// update single products
const updateSingleProductFromDB = async (
  id: string,
  payload: Partial<IProduct>,
) => {
  const result = await products.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  return result;
};

// delete single product
const deleteSingleProductFromDB = async (id: string) => {
  const result = await products.deleteOne({ _id: id });
  return result;
};
export const productsServices = {
  getProductsFromDB,
  createProductIntoDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
