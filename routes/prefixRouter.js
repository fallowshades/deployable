import { Router } from 'express'

import {
  getAllPrefixes,
  getSinglePrefix,
  createPrefix,
  updatePrefix,
  deletePrefix,
} from '../controllers/prefixController.js'

const router = Router()

router.route('/').post(createPrefix).get(getAllPrefixes)

router
  .route('/:id')
  .get(getSinglePrefix)
  .patch(updatePrefix)
  .delete(deletePrefix)
export default router
