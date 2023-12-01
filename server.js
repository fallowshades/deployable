import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import achievementRouter from './routes/achievementRouter.js'
import mongoose from 'mongoose'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

import { body, validationResult } from 'express-validator'

import authRouter from './routes/authRouter.js'
import { authenticateUser } from './middleware/authMiddleware.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRouter.js'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import cloudinary from 'cloudinary'

import signRouter from './routes/signRouter.js'

import reviewRouter from './routes/reviewRouter.js'
import orderRouter from './routes/ordersRouter.js'

import prefixRouter from './routes/prefixRouter.js'
import orientationRouter from './routes/orientationRouter.js'
import wordRouter from './routes/wordRouter.js'
import referenceRouter from './routes/referenceRouter.js'
import courseRouter from './routes/courseRouter.js'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.static(path.resolve(__dirname, './client/dist')))
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cookieParser())
app.use('/api/v1/achievements', authenticateUser, achievementRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/signs', signRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/prefixes', prefixRouter)
app.use('/api/v1/orientations', orientationRouter)
app.use('/api/v1/words', wordRouter)
app.use('/api/v1/references', referenceRouter)
app.use('/api/v1/courses', courseRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'))
})

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
