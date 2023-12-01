import { StatusCodes } from 'http-status-codes'
import wordModel from '../models/wordModel.js'
import 'express-async-errors'

export const createWord = async (req, res) => {
  res.send('create word')
}

export const getAllWords = async (req, res) => {
  res.send('get all words')
}

export const getSingleWord = async (req, res) => {
  res.send('get single word')
}

export const updateWord = async (req, res) => {
  res.send('update word')
}

export const deleteWord = async (req, res) => {
  res.send('delete word')
}
