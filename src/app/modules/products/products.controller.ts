import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productsServices } from './products.services';

const createProduct = catchAsync(async (req, res) => {
  const result = await productsServices.createProductIntoDB(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'product created successfully.',
    data: result,
  });
});

export const productControllers = {
  createProduct,
};
