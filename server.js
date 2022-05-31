const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const cors = require('cors')
const Food = require('./models/foodSchema.js')
const Item = require('./models/itemSchema.js')

require('dotenv').config()


const db = mongoose.connection;

app.use(express.json());

app.use(cors())

const PORT = process.env.PORT || 3003

const MONGODB_URI = process.env.MONGODB_URI;

//Redirect Route

app.get('/', (req, res) => {
  res.redirect('/food')
})

//Food Routes

app.post('/food', (req, res) => {
  Food.create(req.body, (err, createFood) => {
    res.json(createFood)
  })
})

app.get('/food', (req, res) => {
  Food.find({}, (err, food) => {
    res.json(food)
  })
})

app.delete('/food/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, (err, removeFood) => {
    res.json(removeFood)
  })
})

app.put('/food/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateFood) => {
    res.json(updateFood)
  })
})

//Item Routes

app.post('/item', (req, res) => {
  Item.create(req.body, (err, createItem) => {
    res.json(createItem)
  })
})

app.get('/item', (req, res) => {
  Item.find({}, (err, item) => {
    res.json(item)
  })
})

app.delete('/item/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, removeItem) => {
    res.json(removeItem)
  })
})

app.put('/item/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateItem) => {
    res.json(updateItem)
  })
})

mongoose.connect(MONGODB_URI, () => {
  console.log('Praying to monGod...')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
