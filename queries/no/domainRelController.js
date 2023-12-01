import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createDomain = async (req, res) => {
  res.send('create Domain')
}

export const getAllDomain = async (req, res) => {
  res.send('get all Domain')
}

export const getSingleDomain = async (req, res) => {
  res.send('get single Domain')
}

export const updateDomain = async (req, res) => {
  res.send('update Domain')
}

export const deleteDomain = async (req, res) => {
  res.send('delete Domain')
}
