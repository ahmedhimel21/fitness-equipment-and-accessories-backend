import catchAsync from '../../utility/catchAsync'
import sendResponse from '../../utility/sendResponse'
import { OrderServices } from './order.service'

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order has been created successfully',
    data: result,
  })
})

export const OrderControllers = {
  createOrder,
}
