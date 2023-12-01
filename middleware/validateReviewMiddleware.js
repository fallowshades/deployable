import { body, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError } from '../errors/customErrors.js'
import Review from '../models/reviewModel.js'

import mongoose from 'mongoose'
import { param } from 'express-validator'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)

        if (errorMessages[0].startsWith('no review')) {
          throw new NotFoundError(errorMessages)
        }

        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const sign = await Review.findById(value)
    if (!sign) throw new NotFoundError(`No review with id ${value}`)
  }),
])

export const validateReviewInput = withValidationErrors([
  body('sign').notEmpty().withMessage('sign is required'),
  body('rating').notEmpty().withMessage('rating is required'),
  body('title').notEmpty().withMessage('invalid category value'),
  body('comment').notEmpty().withMessage('comment is required'),
])

export const validateAlreadySubmittedNotPrimary = async (req, res, next) => {
  const { sign: signId } = req.body

  const alreadySubmitted = await Review.findOne({
    sign: signId,
    user: req.user.userId,
  })

  if (alreadySubmitted) {
    throw new BadRequestError('Already submitted review for this product')
  }

  next()
}
