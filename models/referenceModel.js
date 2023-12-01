import mongoose from 'mongoose'
import { TOUCH_TYPE, FACE_EXPRESSION } from '../utils/constants.js'

const ReferenceSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  bodyContact: {
    type: String,
    required: true,
  },
  touchType: {
    type: String,
    enum: [TOUCH_TYPE],
    default: TOUCH_TYPE.NULL,
  },
  faceExpression: {
    type: String,
    enum: [FACE_EXPRESSION],
    default: FACE_EXPRESSION.NULL,
  },
  link: {
    type: String,
    required: true,
  },
})

export default mongoose.model('reference', ReferenceSchema)
