const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
  name: String,
  personBringing: String,
  quantity: Number
})

const itemCollection = mongoose.model('Item', itemSchema)
module.exports = itemCollection
