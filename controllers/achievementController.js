import Achievement from '../models/achievementModel.js'
import 'express-async-errors'
import { NotFoundError } from '../errors/customErrors.js'
import { StatusCodes } from 'http-status-codes'

import mongoose from 'mongoose'
import day from 'dayjs'

export const getAllAchievements = async (req, res) => {
  const { search, status, type, sort } = req.query

  const queryObject = {
    createdBy: req.user.userId,
  }

  if (search) {
    queryObject.$or = [
      { description: { $regex: search, $options: 'i' } },
      { name: { $regex: search, $options: 'i' } },
    ]
  }
  if (status && status !== 'all') {
    queryObject.status = status
  }
  if (type && type !== 'all') {
    queryObject.type = type
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  }

  const sortKey = sortOptions[sort] || sortOptions.newest

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  const achievements = await Achievement.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit)

  const totalAchievements = await Achievement.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalAchievements / limit)

  res
    .status(StatusCodes.OK)
    .json({ totalAchievements, numOfPages, currentPage: page, achievements })
}

export const createAchievement = async (req, res) => {
  req.body.createdBy = req.user.userId
  const achievement = await Achievement.create(req.body)
  res.status(StatusCodes.CREATED).json({ achievement })
}

export const getAchievement = async (req, res) => {
  const { id } = req.params
  const achievement = await Achievement.findById(id)

  res.status(StatusCodes.OK).json({ achievement })
}

export const updateAchievement = async (req, res) => {
  const { id } = req.params

  const updatedAchievement = await Achievement.findByIdAndUpdate(id, req.body, {
    new: true,
  })

  res.status(StatusCodes.OK).json({ description: updatedAchievement })
}

export const deleteAchievement = async (req, res) => {
  const { id } = req.params
  const removedAchievement = await Achievement.findByIdAndDelete(id)

  res.status(StatusCodes.OK).json({ achievement: removedAchievement })
}

export const showStats = async (req, res) => {
  let stats = await Achievement.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
    return acc
  }, {})

  const defaultStats = {
    inactive: stats.inactive || 0,
    activated: stats.activated || 0,
    complete: stats.complete || 0,
  }

  let monthlyApplications = await Achievement.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ])
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY')
      return { date, count }
    })
    .reverse()
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}
