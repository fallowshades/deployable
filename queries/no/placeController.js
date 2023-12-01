import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createPlace = async (req, res) => {
  res.send('create place')
}

export const getAllPlace = async (req, res) => {
  res.send('get all Place')
}

export const getSinglePlace = async (req, res) => {
  res.send('get single Place')
}

export const updatePlace = async (req, res) => {
  res.send('update Place')
}

export const deletePlace = async (req, res) => {
  res.send('delete Place')
}
