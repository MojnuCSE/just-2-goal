const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  dayNumber: {
    type: String,
    required: true
  },
  certificateHour: {
    type: Number,
    required: true
  },
  googleJobHour: {
    type: Number,
    required: true
  },
  daySummary: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)