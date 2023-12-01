import { Router } from 'express'

import {
  getAllReferences,
  getSingleReference,
  createReference,
  updateReference,
  deleteReference,
} from '../controllers/referenceController.js'

const router = Router()

router.route('/').post(createReference).get(getAllReferences)

router
  .route('/:id')
  .get(getSingleReference)
  .patch(updateReference)
  .delete(deleteReference)
export default router
