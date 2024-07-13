import QueryBuilder from '../../builder/QueryBuilder';
import { ICartPayload, ICheckout, IProduct } from './products.interface';
import { products } from './products.model';

// create a product
const createProductIntoDB = async (payload: IProduct) => {
  const result = await products.create(payload);
  return result;
};

// get all products
const getProductsFromDB = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(products.find(), query);
  const productQuery = queryBuilder.search(['name']).filter().sort().limit();
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
const checkProductStockFromDB = async (payload: ICartPayload[]) => {
  const cartProducts = payload;
  const result: IProduct[] = [];
  if (cartProducts) {
    const promises = cartProducts.map(async (product) => {
      const outOfStockProduct = await products.findOne({
        _id: product._id,
        stockQuantity: { $lt: product.quantity },
      });
      if (outOfStockProduct) {
        result.push(outOfStockProduct as IProduct); //pushing outOfStockProduct into result
      }
    });

    // Waiting for all promises to complete
    await Promise.all(promises);
  }
  return result;
};

const checkoutFromDB = async (payload: ICheckout) => {
  const { checkoutProducts } = payload;
  const result = [];

  for (const { _id, quantity } of checkoutProducts) {
    const product = await products.findById(_id);

    if (!product) {
      throw new Error(`Product not found`);
    }

    if (product.stockQuantity < quantity) {
      throw new Error(`Insufficient stock for product ${product.name}`);
    }
    const stockQuantityUpdatedProducts = await products.findByIdAndUpdate(
      _id,
      {
        $set: {
          stockQuantity: product?.stockQuantity - quantity,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (stockQuantityUpdatedProducts) {
      result.push(stockQuantityUpdatedProducts);
    }
  }
  return result;
};
export const productsServices = {
  getProductsFromDB,
  createProductIntoDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
  checkProductStockFromDB,
  checkoutFromDB,
};
