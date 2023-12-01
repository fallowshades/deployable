import { Router } from 'express'
const router = Router()
import { authenticateUser } from '../middleware/authMiddleware.js'
import {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
  getSingleProductReviews,
} from '../controllers/reviewController.js'

import { validateNonPrimaryKey } from '../middleware/validateSignMiddleware.js'
import {
  validateReviewInput,
  validateAlreadySubmittedNotPrimary,
  validateIdParam,
} from '../middleware/validateReviewMiddleware.js'
router
  .route('/')
  .post(
    authenticateUser,
    validateReviewInput,
    validateNonPrimaryKey,
    validateAlreadySubmittedNotPrimary,

    createReview
  )
  .get(getAllReviews)

router
  .route('/:id')
  .get(validateIdParam, getSingleReview)
  .patch(authenticateUser, validateIdParam, updateReview)
  .delete(authenticateUser, deleteReview)

router.route('/:id/reviews').get(getSingleProductReviews)

export default router
