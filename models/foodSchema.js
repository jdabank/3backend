const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema ({
  itemName: String,
  type: String,
  personBringing: String
})

const foodCollection = mongoose.model('Food', foodSchema)
module.exports = foodCollection
