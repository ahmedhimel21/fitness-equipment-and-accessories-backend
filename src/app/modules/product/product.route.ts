import { Router } from 'express'
import { ProductControllers } from './product.controller'

const router = Router()

router.get('/', ProductControllers.getProducts)

export const ProductRoutes = router
