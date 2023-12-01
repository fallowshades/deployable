import { body, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customErrors.js'
import { SIGN_COMPANY, SIGN_CATEGORY } from '../utils/constants.js'

import mongoose from 'mongoose'
import { param } from 'express-validator'

import Sign from '../models/signModel.js'

import { NotFoundError } from '../errors/customErrors.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)

        if (errorMessages[0].startsWith('no sign')) {
          throw new NotFoundError(errorMessages)
        }

        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateNonPrimaryKey = withValidationErrors([
  body('sign').custom(async (signId) => {
    console.log(signId)

    const isValidId = mongoose.Types.ObjectId.isValid(signId)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const isValidSign = await Sign.findOne({ _id: signId })
    if (!isValidSign) throw new NotFoundError(`no sign with id : ${signId}`)
  }),
])

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const sign = await Sign.findById(value)
    if (!sign) throw new NotFoundError(`no sign with id : ${value}`)
  }),
])

export const validateSignInput = withValidationErrors([
  body('title').notEmpty().withMessage('title is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('category')
    .isIn(Object.values(SIGN_CATEGORY))
    .withMessage('invalid category value'),
  body('company')
    .isIn(Object.values(SIGN_COMPANY))
    .withMessage('invalid company type'),
])
