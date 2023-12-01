import { Router } from 'express'
import {
  validateOrdersInput,
  validateIdParam,
} from '../middleware/validationOrdersMiddleware.js'
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authMiddleware.js'

import {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} from '../controllers/orderController.js'

const router = Router()

router
  .route('/')
  .post(authenticateUser, validateOrdersInput, createOrder)
  .get(authenticateUser, authorizePermissions('user'), getAllOrders)

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders)

router
  .route('/:id')
  .get(authenticateUser, validateIdParam, getSingleOrder)
  .patch(authenticateUser, validateIdParam, updateOrder)
export default router
