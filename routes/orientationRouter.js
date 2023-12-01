import { Router } from 'express'

import {
  getAllOrientations,
  getSingleOrientation,
  createOrientation,
  updateOrientation,
  deleteOrientation,
} from '../controllers/orientationController.js'

const router = Router()

router.route('/').post(createOrientation).get(getAllOrientations)

router
  .route('/:id')
  .get(getSingleOrientation)
  .patch(updateOrientation)
  .delete(deleteOrientation)
export default router
