import mongoose from 'mongoose'

const singleCartItemSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },

  sign: {
    type: mongoose.Schema.ObjectId,
    ref: 'sign',
    required: true,
  },
})

const OrderSchema = mongoose.Schema({
  tax: {
    type: Number,
    required: true,
  },

  shippingFee: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },

  clientSecret: {
    type: String,
    required: true,
  },

  paymentIntentId: {
    type: String,
  },

  status: {
    type: String,
    enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
    default: 'pending',
  },
  orderItems: [singleCartItemSchema],
})

export default mongoose.model('order', OrderSchema)
