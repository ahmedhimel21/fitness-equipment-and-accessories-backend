import productModel from './product.model'

const getProductsFromDB = async () => {
  const result = await productModel.find()
  return result
}

export const ProductServices = {
  getProductsFromDB,
}
