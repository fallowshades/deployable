import { StatusCodes } from 'http-status-codes'
import referenceModel from '../models/referenceModel.js'
import 'express-async-errors'

export const createReference = async (req, res) => {
  res.send('create reference')
}

export const getAllReferences = async (req, res) => {
  res.send('get all reference')
}

export const getSingleReference = async (req, res) => {
  res.send('get single reference')
}

export const updateReference = async (req, res) => {
  res.send('update reference')
}

export const deleteReference = async (req, res) => {
  res.send('delete reference')
}
