const mongoose = require('mongoose')

const testSchema = new mongoose.Schema ({
  name: String,
  date: Number
})

const testCollection = mongoose.model('Test', testSchema)
module.exports = testCollection
