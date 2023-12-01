import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createTuple = async (req, res) => {
  res.send('create Tuple')
}

export const getAllTuple = async (req, res) => {
  res.send('get all Tuple')
}

export const getSingleTuple = async (req, res) => {
  res.send('get single Tuple')
}

export const updateTuple = async (req, res) => {
  res.send('update Tuple')
}

export const deleteTuple = async (req, res) => {
  res.send('delete Tuple')
}
