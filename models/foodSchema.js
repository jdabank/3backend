const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  name: String,
  personBringing: String,
  beverage: Boolean,
  quantity: Number
})

const foodCollection = mongoose.model('Food', foodSchema)
module.exports = foodCollection
