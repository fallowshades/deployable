import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createBargain = async (req, res) => {
  res.send('create Bargain')
}

export const getAllBargain = async (req, res) => {
  res.send('get all Bargain')
}

export const getSingleBargain = async (req, res) => {
  res.send('get single Bargain')
}

export const updateBargain = async (req, res) => {
  res.send('update Bargain')
}

export const deleteBargain = async (req, res) => {
  res.send('delete Bargain')
}
