import { readFile } from 'fs/promises'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import Achievement from './models/achievementModel.js'
import User from './models/userModel.js'
try {
  await mongoose.connect(process.env.MONGO_URL)
  // const user = await User.findOne({ email: 'john@gmail.com' });
  const user = await User.findOne({ email: 'fallowshades@gmail.com' })

  const jsonAchievements = JSON.parse(
    await readFile(new URL('./utils/mockAchievementData.json', import.meta.url))
  )
  const achievements = jsonAchievements.map((achievement) => {
    return { ...achievement, createdBy: user._id }
  })
  await Achievement.deleteMany({ createdBy: user._id })
  await Achievement.create(achievements)
  console.log('Success!!!')
  process.exit(0)
} catch (error) {
  console.log(error)
  process.exit(1)
}
