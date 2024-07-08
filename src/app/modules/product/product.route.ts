import { Router } from 'express'
import { ProductControllers } from './product.controller'

const router = Router()

router.get('/', ProductControllers.getProducts)

router.get('/:productId', ProductControllers.getSingleProductById)

export const ProductRoutes = router
