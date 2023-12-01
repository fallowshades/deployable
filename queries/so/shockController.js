import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createShock = async (req, res) => {
  res.send('create Shock')
}

export const getAllShock = async (req, res) => {
  res.send('get all Shock')
}

export const getSingleShock = async (req, res) => {
  res.send('get single Shock')
}

export const updateShock = async (req, res) => {
  res.send('update Shock')
}

export const deleteShock = async (req, res) => {
  res.send('delete Shock')
}
