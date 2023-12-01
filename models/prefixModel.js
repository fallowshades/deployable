// positionHandModel.js
import mongoose from 'mongoose'
import { HAND_VARIANTS } from '../utils/constants.js'

// Define a Mongoose schema
const PrefixSchema = new mongoose.Schema({
  position: { type: String, required: true },
  hand: { type: String, enum: [HAND_VARIANTS], required: true },
})

// Export the Mongoose schema definition
export default mongoose.model('prefix', PrefixSchema)
