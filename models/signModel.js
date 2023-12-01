import mongoose from 'mongoose'
import { SIGN_COMPANY, SIGN_CATEGORY } from '../utils/constants.js'
const SignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: [SIGN_CATEGORY],
    },
    company: {
      type: String,
      required: [true, 'Please provide company'],
      enum: [SIGN_COMPANY],
    },
    colors: {
      type: [String],
      default: ['#222'],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

SignSchema.virtual('reviews', {
  ref: 'review',
  localField: '_id',
  foreignField: 'sign',
  justOne: false,
})

SignSchema.pre('remove', async function (next) {
  await this.model('review').deleteMany({ sign: this._id })
})

export default mongoose.model('sign', SignSchema)
