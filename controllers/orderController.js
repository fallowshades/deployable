import { StatusCodes } from 'http-status-codes'
import Order from '../models/ordersModel.js'
import 'express-async-errors'
import { checkPermissions } from '../utils/checkPermissions.js'

import { NotFoundError } from '../errors/customErrors.js'
import Sign from '../models/signModel.js'

const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = 'someRandomValue'
  return { client_secret, amount }
}

export const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body

  let orderItems = []
  let subtotal = 0

  for (const item of cartItems) {
    const dbSign = await Sign.findOne({ _id: item.sign })
    if (!dbSign) {
      throw new NotFoundError(`No sign with id : ${item.sign}`)
    }
    const { title, price, image, _id } = dbSign

    const singleOrderItem = {
      amount: item.amount,
      title,
      price,
      image,
      sign: _id,
    }
    // add item to order
    orderItems = [...orderItems, singleOrderItem]
    // calculate subtotal
    subtotal += item.amount * price
  }

  // calculate total
  const total = tax + shippingFee + subtotal
  // get client secret
  const paymentIntent = await fakeStripeAPI({
    amount: total,
    currency: 'usd',
  })

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    tax,
    shippingFee,
    clientSecret: paymentIntent.client_secret,
    user: req.user.userId,
  })

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret })
}

export const getAllOrders = async (req, res) => {
  const orders = await Order.find({})
  res.status(StatusCodes.OK).json({ orders, count: orders.length })
}
export const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params
  const order = await Order.findOne({ _id: orderId })

  checkPermissions(req.user, order.user)
  res.status(StatusCodes.OK).json({ order })
}
export const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId })
  res.status(StatusCodes.OK).json({ orders, count: orders.length })
}
export const updateOrder = async (req, res) => {
  const { id: orderId } = req.params
  const { paymentIntentId } = req.body

  const order = await Order.findOne({ _id: orderId })

  checkPermissions(req.user, order.user)

  order.paymentIntentId = paymentIntentId
  order.status = 'paid'
  await order.save()

  res.status(StatusCodes.OK).json({ order })
}
