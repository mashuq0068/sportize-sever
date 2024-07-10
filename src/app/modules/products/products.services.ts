import { IProduct } from './products.interface';
import { products } from './products.model';

// create a product
const createProductIntoDB = async (payload: IProduct) => {
  const result = await products.create(payload);
  return result;
};

// get all products
const getProductsFromDB = async (category: string | null) => {
  let query = {};
  if (category) {
    query = { category: category };
  }
  const result = await products.find(query).sort({ createdAt: -1 });
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
