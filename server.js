const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const cors = require('cors')
const Test = require('./models/testSchema.js')
const seedData = require('./models/test.js')

require('dotenv').config()


const db = mongoose.connection;

app.use(express.json());

app.use(cors())

const PORT = process.env.PORT || 3003

const MONGODB_URI = process.env.MONGODB_URI;

app.post('/', (req, res) => {
  Test.create(req.body, (err, createTest) => {
    res.json(createTest)
  })
})

app.get('/', (req, res) => {
  Test.find({}, (err, test) => {
    res.json(test)
  })
})

app.delete('/:id', (req, res) => {
  Test.findByIdAndRemove(req.params.id, (err, removeTest) => {
    res.json(removeTest)
  })
})

app.put('/:id', (req, res) => {
  Test.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateTest) => {
    res.json(updateTest)
  })
})

mongoose.connect(MONGODB_URI, () => {
  console.log('Praying to monGod...')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
