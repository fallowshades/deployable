import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const createDepression = async (req, res) => {
  res.send('create Depression')
}

export const getAllDepression = async (req, res) => {
  res.send('get all Depression')
}

export const getSingleDepression = async (req, res) => {
  res.send('get single Depression')
}

export const updateDepression = async (req, res) => {
  res.send('update Depression')
}

export const deleteDepression = async (req, res) => {
  res.send('delete Depression')
}
