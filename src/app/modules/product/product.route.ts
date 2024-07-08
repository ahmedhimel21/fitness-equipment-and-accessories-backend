import { Router } from 'express'
import { ProductControllers } from './product.controller'

const router = Router()

router.get('/', ProductControllers.getProducts)

router.get('/:productId', ProductControllers.getSingleProductById)

router.post('/', ProductControllers.createProduct)

export const ProductRoutes = router
