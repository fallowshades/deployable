import mongoose from 'mongoose'
import { ORIENTATION } from '../utils/constants.js'

const OrientationSchema = new mongoose.Schema({
  fingerdirection: {
    type: String,
    enum: Object.values(ORIENTATION),
    default: ORIENTATION.NULL,
  },
  fingerdirection2: {
    type: String,
    enum: Object.values(ORIENTATION),
    default: ORIENTATION.NULL,
  },
  palmdirection: {
    type: String,
    enum: Object.values(ORIENTATION),
    default: ORIENTATION.NULL,
  },
  palmdirection2: {
    type: String,
    enum: Object.values(ORIENTATION),
    default: ORIENTATION.NULL,
  },
})

export default mongoose.model('orientation', OrientationSchema)
