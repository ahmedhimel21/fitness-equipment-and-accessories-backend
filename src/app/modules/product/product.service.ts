import productModel from './product.model'

const getProductsFromDB = async () => {
  const result = await productModel.find()
  return result
}

const getSingleProductByIdFromDB = async (productId: string) => {
  const result = await productModel.findById(productId)
  return result
}

export const ProductServices = {
  getProductsFromDB,
  getSingleProductByIdFromDB,
}
