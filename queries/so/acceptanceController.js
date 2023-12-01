import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createAcceptance = async (req, res) => {
  res.send('create Acceptance')
}

export const getAllAcceptance = async (req, res) => {
  res.send('get all Acceptance')
}

export const getSingleAcceptance = async (req, res) => {
  res.send('get single Acceptance')
}

export const updateAcceptance = async (req, res) => {
  res.send('update Acceptance')
}

export const deleteAcceptance = async (req, res) => {
  res.send('delete Acceptance')
}
