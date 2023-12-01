import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createItem = async (req, res) => {
  res.send('create Item')
}

export const getAllItem = async (req, res) => {
  res.send('get all Item')
}

export const getSingleItem = async (req, res) => {
  res.send('get single Item')
}

export const updateItem = async (req, res) => {
  res.send('update Item')
}

export const deleteItem = async (req, res) => {
  res.send('delete Item')
}
