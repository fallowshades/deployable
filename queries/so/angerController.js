import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createAnger = async (req, res) => {
  res.send('create Anger')
}

export const getAllAnger = async (req, res) => {
  res.send('get all Anger')
}

export const getSingleAnger = async (req, res) => {
  res.send('get single Anger')
}

export const updateAnger = async (req, res) => {
  res.send('update Anger')
}

export const deleteAnger = async (req, res) => {
  res.send('delete Anger')
}
