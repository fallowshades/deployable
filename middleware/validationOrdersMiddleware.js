import { body, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError } from '../errors/customErrors.js'

import mongoose from 'mongoose'
import { param } from 'express-validator'

import Order from '../models/ordersModel.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        if (errorMessages[0].startsWith('no order')) {
          throw new NotFoundError(errorMessages)
        }
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateOrdersInput = withValidationErrors([
  body('items').isArray({ min: 1 }).withMessage('cartItems is required'),
  body('tax').notEmpty().withMessage('tax is required'),
  body('shippingFee').notEmpty().withMessage('shippingFee is required'),
])

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const order = await Order.findById(value)
    if (!order) throw new NotFoundError(`no order with id : ${value}`)
  }),
])
