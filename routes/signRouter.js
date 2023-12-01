import { Router } from 'express'
import {
  validateSignInput,
  validateIdParam,
} from '../middleware/validateSignMiddleware.js'

//import { validateSignInput } from '../middleware/validationMiddleware.js'
const router = Router()

import {
  getAllSigns,
  getSign,
  createSign,
  updateSign,
  deleteSign,
} from '../controllers/signController.js'

router.route('/').get(getAllSigns).post(validateSignInput, createSign)
router
  .route('/:id')
  .get(validateIdParam, getSign)
  .patch(validateSignInput, updateSign)
  .delete(validateIdParam, deleteSign)

export default router
