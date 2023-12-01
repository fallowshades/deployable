import { StatusCodes } from 'http-status-codes'
import Review from '../models/reviewModel.js'
import 'express-async-errors'
import { checkPermissions } from '../utils/checkPermissions.js'

export const createReview = async (req, res) => {
  req.body.user = req.user.userId
  const review = await Review.create(req.body)
  res.status(StatusCodes.CREATED).json({ review })
}
export const getAllReviews = async (req, res) => {
  const reviews = await Review.find({})
    .populate({
      path: 'sign',
      select: 'title company price',
    })
    .populate({ path: 'user', select: 'name' })

  res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}
export const getSingleReview = async (req, res) => {
  const { id: reviewId } = req.params

  const review = await Review.findOne({ _id: reviewId })
  res.status(StatusCodes.OK).json({ review })
}

export const getSingleProductReviews = async (req, res) => {
  const { id: signId } = req.params

  const reviews = await Review.find({ sign: signId })
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

export const updateReview = async (req, res) => {
  const { id: reviewId } = req.params
  const { rating, title, comment } = req.body

  const review = await Review.findOne({ _id: reviewId })

  checkPermissions(req.user, review.user)

  review.rating = rating
  review.title = title
  review.comment = comment
  await review.save()

  res.status(StatusCodes.OK).json({ review })
}
export const deleteReview = async (req, res) => {
  const { id: reviewId } = req.params

  const review = await Review.findOne({ _id: reviewId })

  checkPermissions(req.user, review.user)
  await Review.deleteOne({ _id: reviewId })
  res.status(StatusCodes.OK).json({ review })
}
