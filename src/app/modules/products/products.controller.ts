import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productsServices } from './products.services';

// create product
const createProduct = catchAsync(async (req, res) => {
  const result = await productsServices.createProductIntoDB(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product created successfully.',
    data: result,
  });
});
// get products
const getProducts = catchAsync(async (req, res) => {
  let category: string = '';
  if (req.query.category) {
    category = req.query.category as string;
  }
  const result = await productsServices.getProductsFromDB(category);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product fetched successfully.',
    data: result,
  });
});

// get single product
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productsServices.getSingleProductFromDB(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product fetched successfully.',
    data: result,
  });
});
// update single product
const updateSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productsServices.updateSingleProductFromDB(id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product updated successfully.',
    data: result,
  });
});
// delete single product
const deleteSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productsServices.deleteSingleProductFromDB(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product deleted successfully.',
    data: result,
  });
});

export const productControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
