import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendEmail from '../../utils/sendEmail';
import sendResponse from '../../utils/sendResponse';

const sendEmailFromServer = catchAsync(async (req, res) => {
  await sendEmail(req.body);
  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Email sent successfully',
    data: '',
  });
});
export const emailControllers = {
  sendEmailFromServer,
};
