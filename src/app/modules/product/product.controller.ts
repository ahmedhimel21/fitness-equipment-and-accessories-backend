import { Request, Response } from 'express'
import catchAsync from '../../utility/catchAsync'
import { ProductServices } from './product.service'
import sendResponse from '../../utility/sendResponse'

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  })
})

const getSingleProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const result = await ProductServices.getSingleProductByIdFromDB(productId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product retrieved successfully!',
    data: result,
  })
})

export const ProductControllers = {
  getProducts,
  getSingleProductById,
}
