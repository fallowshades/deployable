import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide rating'],
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide review title'],
    },

    comment: {
      type: String,
      required: [true, 'Please provide review text'],
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },

    sign: {
      type: mongoose.Schema.ObjectId,
      ref: 'sign',
      required: true,
    },
  },
  { timestamp: true }
)
ReviewSchema.index({ product: 1, user: 1 }, { unique: true })

export default mongoose.model('review', ReviewSchema)
