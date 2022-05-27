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

app.get('/test/seed', (req, res) => {
  Test.create(seedData, (err, createdData) => {
    console.log('Testing mongoDB')
  })
})

mongoose.connect(MONGODB_URI, () => {
  console.log('Praying to monGod...')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
