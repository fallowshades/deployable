import { StatusCodes } from 'http-status-codes'
import orientationModel from '../models/orientationModel.js'
import 'express-async-errors'

export const createOrientation = async (req, res) => {
  res.send('create orientation')
}

export const getAllOrientations = async (req, res) => {
  res.send('get all orientation')
}

export const getSingleOrientation = async (req, res) => {
  res.send('get single orientation')
}

export const updateOrientation = async (req, res) => {
  res.send('update orientation')
}

export const deleteOrientation = async (req, res) => {
  res.send('delete orientation')
}
