import mongoose from 'mongoose'
import { ACHIEVEMENT_STATUS, ACHIEVEMENT_TYPE } from '../utils/constants.js'
const AchievementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'NaN',
    },
    description: String,
    //uh mb later
    status: {
      type: String,
      enum: [ACHIEVEMENT_STATUS],
      default: ACHIEVEMENT_STATUS.INACTIVE,
    },
    points: {
      type: Number,
      default: 0,
    },

    type: {
      type: String,
      enum: [ACHIEVEMENT_TYPE],
      default: ACHIEVEMENT_TYPE.EXPLORATION,
    },
    dateOfCompletion: {
      type: Date,
      default: null,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.model('achievement', AchievementSchema)
