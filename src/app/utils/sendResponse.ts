import { Response } from 'express';
interface IResponseData<T> {
  success: true;
  status: number;
  message: string;
  data: T;
}
const sendResponse = <T>(res: Response, responseData: IResponseData<T>) => {
  res.status(responseData.status).json({
    success: responseData?.success,
    message: responseData?.message,
    data: responseData?.message,
  });
};
export default sendResponse ;