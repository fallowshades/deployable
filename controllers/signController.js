import Sign from '../models/signModel.js'
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'
import { ObjectId } from 'mongoose'

export const getAllSigns = async (req, res) => {
  const signs = await Sign.find({})
  const data = signs.map((sign) => {
    const { _id, ...attributes } = sign.toObject()
    return { id: _id, attributes }
  })
  res.status(StatusCodes.OK).json({ data })
}

export const createSign = async (req, res) => {
  const { title, price, description, category, company, colors } = req.body
  const sign = await Sign.create({
    title,
    price,
    description,
    category,
    company,
    colors,
  })

  res.status(200).json({ sign })
}

export const getSign = async (req, res) => {
  const { id } = req.params
  const sign = await Sign.findById(id).populate('reviews')
  if (!sign) {
    return res.status(StatusCodes.CREATED).json({ signs })
  }
  res.status(200).json({ sign })
}

export const updateSign = async (req, res) => {
  const { id } = req.params

  const updatedSign = await Sign.findByIdAndUpdate(id, req.body, {
    new: true,
  })

  if (!updatedSign) {
    return res.status(404).json({ msg: `no sign with id ${id}` })
  }

  res.status(StatusCodes.OK).json({ description: updatedSign })
}

export const deleteSign = async (req, res) => {
  const { id } = req.params
  const removedSign = await Sign.findByIdAndDelete(id)

  if (!removedSign) {
    return res.status(404).json({ msg: `no job with id ${id}` })
  }
  res.status(StatusCodes.OK).json({ sign: removedSign })
}
